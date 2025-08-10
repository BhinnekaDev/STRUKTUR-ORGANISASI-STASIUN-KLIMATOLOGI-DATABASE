import { Injectable, BadRequestException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';
import { logAktivitas } from '../utils/logAktivitas';

@Injectable()
export class PetugasService {
  async create(createPetugasDto: CreatePetugasDto) {
    const { data, error } = await supabase
      .from('Petugas')
      .insert([createPetugasDto])
      .select()
      .maybeSingle();

    if (error) {
      if (error.code === '23505') {
        throw new BadRequestException('NIP sudah terdaftar');
      }
      throw new BadRequestException('Gagal menambahkan petugas');
    }

    if (!data) {
      throw new BadRequestException('Petugas gagal ditambahkan');
    }

    await logAktivitas(
      'Petugas',
      'Menambahkan pegawai',
      `Menambahkan pegawai ${createPetugasDto.nama_lengkap}`
    );

    return {
      message: 'Pegawai berhasil ditambahkan',
      data,
    };
  }

  async update(nip: string, updateDto: UpdatePetugasDto) {
    const { data, error } = await supabase
      .from('Petugas')
      .update(updateDto)
      .eq('nip', nip)
      .select()
      .maybeSingle();

    if (error) {
      if (error.code === '23505') {
        throw new BadRequestException('NIP sudah terdaftar');
      }
      throw new BadRequestException('Gagal memperbarui petugas');
    }

    if (!data) {
      throw new BadRequestException('Petugas tidak ditemukan');
    }

    await logAktivitas(
      'Petugas',
      'Memperbarui pegawai',
      `Memperbarui pegawai ${data.nama_lengkap}`
    );

    return {
      message: 'Pegawai berhasil diperbarui',
      data,
    };
  }

  async findAll() {
    const { data, error } = await supabase.from('Petugas').select('*');
    if (error) throw new BadRequestException('Gagal mengambil data petugas');
    return data;
  }

  async findOne(nip: string) {
    const { data, error } = await supabase
      .from('Petugas')
      .select('*')
      .eq('nip', nip)
      .maybeSingle();

    if (error) throw new BadRequestException('Gagal mengambil data pegawai');
    if (!data) throw new BadRequestException('Pegawai tidak ditemukan');
    return data;
  }

  async getCount() {
    const { count, error } = await supabase
      .from('Petugas')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw new BadRequestException('Gagal mengambil total pegawai');
    }

    return { count: count ?? 0 }; 
  }

  async remove(nip: string) {
    const { error } = await supabase.from('Petugas').delete().eq('nip', nip);
    if (error) throw new BadRequestException('Gagal menghapus petugas');

    await logAktivitas('Pegawai', 'Menghapus pegawai', `Menghapus pegawai dengan NIP ${nip}`);

    return { message: 'Pegawai berhasil dihapus' };
  }
}
