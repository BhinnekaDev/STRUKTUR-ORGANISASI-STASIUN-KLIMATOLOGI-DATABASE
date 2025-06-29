import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreateStrukturDto } from './dto/create-struktur.dto';
import { UpdateStrukturDto } from './dto/update-struktur.dto';

@Injectable()
export class StrukturService {
  async findAll() {
    const { data, error } = await supabase.from('Struktur_Organisasi').select('*');
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await supabase
      .from('Struktur_Organisasi')
      .select('*')
      .eq('ID_Struktur', id)
      .single();
    if (error || !data) throw new NotFoundException('Struktur tidak ditemukan');
    return data;
  }

  async create(dto: CreateStrukturDto) {
    const { error } = await supabase.from('Struktur_Organisasi').insert(dto);
    if (error) throw new BadRequestException(error.message);
    return { message: 'Struktur berhasil ditambahkan' };
  }

  async update(id: string, dto: UpdateStrukturDto) {
    const { data, error } = await supabase
      .from('Struktur_Organisasi')
      .update(dto)
      .eq('ID_Struktur', id)
      .select()
      .single();
    if (error || !data) throw new NotFoundException('Gagal memperbarui struktur');
    return { message: 'Struktur berhasil diperbarui', data };
  }

  async delete(id: string) {
    const { error } = await supabase.from('Struktur_Organisasi').delete().eq('ID_Struktur', id);
    if (error) throw new BadRequestException(error.message);
    return { message: 'Struktur berhasil dihapus' };
  }
}
