import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreateStrukturDto } from './dto/create-struktur.dto';
import { UpdateStrukturDto } from './dto/update-struktur.dto';
import { logAktivitas } from '../utils/logAktivitas';

@Injectable()
export class StrukturService {
  private readonly table = 'Struktur_Organisasi';

  async findAll() {
<<<<<<< HEAD
    try {
      const { data: strukturData, error } = await supabase
        .from(this.table)
        .select('*')
        .order('tmt', { ascending: false }); // Urutkan langsung berdasarkan kolom tmt di Struktur_Organisasi

      if (error) throw error;

      const nip = strukturData.map((s) => s.Petugas).filter(Boolean);

      if (nip.length === 0) {
        return strukturData.map((s) => ({
          ...s,
          petugas: null,
        }));
      }

      const { data: petugasData, error: petugasError } = await supabase
        .from('Petugas')
        .select('nip, nama_lengkap, no_telepon, foto_pegawai')
        .in('nip', nip);

      if (petugasError) throw petugasError;

      return strukturData.map((s) => {
        const petugas = petugasData.find((p) => p.nip === s.Petugas);
        return {
          ...s,
          petugas,
        };
      });
    } catch (err) {
      console.error('findAll Struktur Error:', err);
      throw new InternalServerErrorException(
        'Gagal mengambil data struktur organisasi'
      );
    }
=======
    const { data, error } = await supabase
      .from('Struktur_Organisasi')
      .select(`
        ID_Struktur,
        Periode,
        Petugas,
        PetugasDetail:Petugas (
          NIP,
          Nama_Depan_Petugas,
          Nama_Belakang_Petugas,
          No_Telepon_Petugas,
          Foto_Petugas,
          Masa_Bakti,
          ID_Jabatan,
          JabatanDetail:Jabatan (
            Nama_Jabatan
          )
        )
      `);

    if (error) throw new BadRequestException(error.message);
    return data;
>>>>>>> dfa3a5a0077648c0403598013a74293f96b45677
  }



  async findOne(id: string) {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('ID_Struktur', id)
      .single();

    if (error || !data) throw new NotFoundException('Struktur tidak ditemukan');
    return data;
  }

  async create(dto: CreateStrukturDto, user_id: string) {
    const { error } = await supabase.from(this.table).insert(dto);
    if (error) throw error;

    // Deskripsi disingkat agar tampil rapi di frontend
    await logAktivitas(
      'Struktur-Organisasi',
      'Menambahkan struktur',
      `Menambahkan struktur ${dto.jabatan}`
    );

    return { message: 'Struktur organisasi berhasil ditambahkan' };
  }

  async update(id: string, dto: UpdateStrukturDto, user_id: string) {
    const { error } = await supabase
      .from(this.table)
      .update(dto)
      .eq('ID_Struktur', id);

    if (error) throw error;

    // Deskripsi disingkat untuk frontend
    await logAktivitas(
      'Struktur-Organisasi',
      'Memperbarui struktur',
      `Memperbarui struktur ${dto.jabatan}`
    );

    return { message: 'Struktur organisasi berhasil diperbarui' };
  }

  async remove(id: string) {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq('ID_Struktur', id);

    if (error) throw error;

    await logAktivitas(
      'Struktur-Organisasi',
      'Menghapus struktur',
      'Menghapus entri struktur organisasi'
    );

    return { message: 'Struktur organisasi berhasil dihapus' };
  }

  async getCount() {
    try {
      const { count, error } = await supabase
        .from(this.table)
        .select('*', { count: 'exact', head: true });

      if (error) throw error;

      return { count: count ?? 0 };
    } catch (err) {
      console.error('getCount Struktur Error:', err);
      throw new InternalServerErrorException(
        'Gagal mengambil total struktur organisasi'
      );
    }
  }
}