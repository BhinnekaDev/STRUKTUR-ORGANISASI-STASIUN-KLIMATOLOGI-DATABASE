import { Injectable, NotFoundException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreateStrukturOrganisasiDto } from './dto/create-struktur.dto';
import { UpdateStrukturOrganisasiDto } from './dto/update-struktur.dto';
import { logAktivitas } from '../utils/logAktivitas';

@Injectable()
export class StrukturOrganisasiService {
  private readonly table = 'struktur_organisasi';

  async findAll() {
    const { data, error } = await supabase
      .from(this.table)
      .select(`
        *,
        petugas:nip (
          nip,
          nama_lengkap,
          no_telepon,
          foto_pegawai
        )
      `)
      .order('tmt', { ascending: false });

    if (error) throw error;
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await supabase
      .from(this.table)
      .select('*')
      .eq('id_struktur', id)
      .single();

    if (error || !data) throw new NotFoundException('Struktur tidak ditemukan');
    return data;
  }

  async create(dto: CreateStrukturOrganisasiDto, user_id: string) {
    const { error } = await supabase.from(this.table).insert(dto);
    if (error) throw error;

    await logAktivitas(
      'struktur-organisasi',
      'Menambahkan struktur',
      `Petugas: ${dto.petugas}, Jabatan: ${dto.jabatan}, TMT: ${dto.tmt}`
    );
    return { message: 'Struktur organisasi berhasil ditambahkan' };
  }

  async update(id: string, dto: UpdateStrukturOrganisasiDto, user_id: string) {
    const { error } = await supabase
      .from(this.table)
      .update(dto)
      .eq('id_struktur', id);

    if (error) throw error;

    await logAktivitas(
      'struktur-organisasi',
      'Memperbarui struktur',
      `ID: ${id}, Petugas: ${dto.petugas}, Jabatan: ${dto.jabatan}, TMT: ${dto.tmt}`
    );
    return { message: 'Struktur organisasi berhasil diperbarui' };
  }

  async remove(id: string) {
    const { error } = await supabase
      .from(this.table)
      .delete()
      .eq('id_struktur', id);

    if (error) throw error;
    return { message: 'Struktur organisasi berhasil dihapus' };
  }
}
