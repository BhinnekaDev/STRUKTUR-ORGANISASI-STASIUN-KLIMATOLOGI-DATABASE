// src/jabatan/jabatan.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreateJabatanDto } from './dto/create-jabatan.dto';
import { UpdateJabatanDto } from './dto/update-jabatan.dto';

@Injectable()
export class JabatanService {
  async findAll() {
    const { data, error } = await supabase.from('Jabatan').select('*');
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await supabase
      .from('Jabatan')
      .select('*')
      .eq('ID_Jabatan', id)
      .single();

    if (error || !data) {
      throw new NotFoundException('Jabatan tidak ditemukan');
    }

    return data;
  }

  async create(dto: CreateJabatanDto, user_id: string) {
    const { data, error } = await supabase
      .from('Jabatan')
      .insert({ Nama_Jabatan: dto.Nama_Jabatan })
      .select()
      .single();

    if (error) throw new BadRequestException('Gagal membuat jabatan: ' + error.message);

    return { message: 'Jabatan berhasil ditambahkan', data };
  }

  async update(id: string, dto: UpdateJabatanDto, user_id: string) {
    const { data, error } = await supabase
      .from('Jabatan')
      .update({ Nama_Jabatan: dto.Nama_Jabatan })
      .eq('ID_Jabatan', id)
      .select()
      .single();

    if (error || !data) throw new NotFoundException('Gagal memperbarui jabatan');
    return { message: 'Jabatan berhasil diperbarui', data };
  }

  async delete(id: string, user_id: string) {
    const { error } = await supabase
      .from('Jabatan')
      .delete()
      .eq('ID_Jabatan', id);

    if (error) throw new BadRequestException('Gagal menghapus jabatan: ' + error.message);

    return { message: 'Jabatan berhasil dihapus' };
  }
}
