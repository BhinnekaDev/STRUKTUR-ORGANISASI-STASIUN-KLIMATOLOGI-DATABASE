// src/petugas/petugas.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';

@Injectable()
export class PetugasService {
  async create(createPetugasDto: CreatePetugasDto) {
    const { data, error } = await supabase
      .from('Petugas')
      .insert([createPetugasDto])
      .select()
      .single();

    if (error) {
      if (error.message.includes('duplicate') && error.message.includes('nip')) {
        throw new BadRequestException('NIP sudah terdaftar');
      }
      throw new BadRequestException(error.message);
    }

    return {
      message: 'Petugas berhasil ditambahkan',
      data,
    };
  }

  async update(nip: string, updateDto: UpdatePetugasDto) {
    const { data, error } = await supabase
      .from('Petugas')
      .update(updateDto)
      .eq('nip', nip)
      .select()
      .single();

    if (error) throw new BadRequestException(error.message);

    return {
      message: 'Petugas berhasil diperbarui',
      data,
    };
  }

  async findAll() {
    const { data, error } = await supabase.from('Petugas').select('*');
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async findOne(nip: string) {
    const { data, error } = await supabase
      .from('Petugas')
      .select('*')
      .eq('nip', nip)
      .single();
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async remove(nip: string) {
    const { error } = await supabase.from('Petugas').delete().eq('nip', nip);
    if (error) throw new BadRequestException(error.message);
    return { message: 'Petugas berhasil dihapus' };
  }
}
