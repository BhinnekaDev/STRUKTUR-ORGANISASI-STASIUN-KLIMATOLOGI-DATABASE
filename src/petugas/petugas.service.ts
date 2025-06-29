import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';
import { supabase } from '../supabase/supabase.client';

@Injectable()
export class PetugasService {
  async findAll() {
    const { data, error } = await supabase.from('Petugas').select('*');
    if (error) throw new BadRequestException(error.message);
    return data;
  }

  async findOne(nip: string) {
    const { data, error } = await supabase.from('Petugas').select('*').eq('NIP', nip).single();
    if (error || !data) throw new NotFoundException('Petugas tidak ditemukan');
    return data;
  }

  async uploadFotoBase64(base64: string, nip: string): Promise<string> {
    const matches = base64.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!matches) throw new BadRequestException('Format foto tidak valid. Harus base64 dengan prefix data:image/...');

    const mimeType = matches[1]; // contoh: image/jpeg
    const base64Data = matches[2];
    const ext = mimeType.split('/')[1]; // contoh: jpeg
    const buffer = Buffer.from(base64Data, 'base64');

    const timestamp = Date.now();
    const filename = `foto-${nip}-${timestamp}.${ext}`;

    const { error: uploadError } = await supabase.storage
        .from('fotopegawai')
        .upload(filename, buffer, {
        contentType: mimeType,
        upsert: false,
        });

    if (uploadError) throw new BadRequestException('Gagal upload foto: ' + uploadError.message);

    const { data: publicUrlData } = supabase.storage.from('fotopegawai').getPublicUrl(filename);
    return publicUrlData.publicUrl;
    }


  async create(dto: CreatePetugasDto) {
    let fotoUrl: string | null = null;
    if (dto.Foto_Petugas) {
        fotoUrl = await this.uploadFotoBase64(dto.Foto_Petugas, dto.NIP);
    }

    const { error } = await supabase.from('Petugas').insert({
      ...dto,
      Foto_Petugas: fotoUrl,
    });

    if (error) throw new BadRequestException(error.message);
    return { message: 'Petugas berhasil ditambahkan' };
  }

  async update(nip: string, dto: UpdatePetugasDto) {
    let fotoUrl: string | null = null;
    if (dto.Foto_Petugas) {
      fotoUrl = await this.uploadFotoBase64(dto.Foto_Petugas, nip);
    }

    const updateData = { ...dto };
    if (fotoUrl) updateData.Foto_Petugas = fotoUrl;

    const { data, error } = await supabase
      .from('Petugas')
      .update(updateData)
      .eq('NIP', nip)
      .select()
      .single();

    if (error || !data) throw new NotFoundException('Gagal memperbarui petugas');
    return { message: 'Petugas berhasil diperbarui', data };
  }

  async delete(nip: string) {
  // 1. Ambil data petugas untuk dapatkan URL gambar
  const { data: petugas, error: fetchError } = await supabase
    .from('Petugas')
    .select('Foto_Petugas')
    .eq('NIP', nip)
    .single();

  if (fetchError || !petugas) {
    throw new NotFoundException('Petugas tidak ditemukan');
  }

  // 2. Hapus gambar jika ada
  if (petugas.Foto_Petugas) {
    // Ambil nama file dari URL publik
    const url = new URL(petugas.Foto_Petugas);
    const filePath = decodeURIComponent(url.pathname.split('/storage/v1/object/public/fotopegawai/')[1]);

    if (filePath) {
      const { error: deleteFileError } = await supabase.storage
        .from('fotopegawai')
        .remove([filePath]);

      if (deleteFileError) {
        throw new BadRequestException('Gagal menghapus foto dari storage: ' + deleteFileError.message);
      }
    }
  }

  // 3. Hapus data dari tabel
  const { error: deleteDataError } = await supabase.from('Petugas').delete().eq('NIP', nip);

  if (deleteDataError) {
    throw new BadRequestException('Gagal menghapus data petugas: ' + deleteDataError.message);
  }

  return { message: 'Petugas dan foto berhasil dihapus' };
}

}
