import { Controller, Get, BadRequestException } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';

@Controller('aktivitas')
export class AktivitasController {
  @Get('terbaru')
  async getRecent() {
    // Ambil semua data aktivitas yang diurutkan dari terbaru ke terlama
    const { data: allData, error } = await supabase
      .from('Aktivitas')
      .select('id, tipe, waktu, deskripsi')
      .order('waktu', { ascending: false });

    if (error) throw new BadRequestException(error.message);

    // Ambil 3 terbaru
    const terbaru = allData.slice(0, 3);

    // Hapus sisanya jika lebih dari 3
    const sisanya = allData.slice(3);
    if (sisanya.length > 0) {
      const idsToDelete = sisanya.map((item) => item.id);
      await supabase.from('Aktivitas').delete().in('id', idsToDelete);
    }

    // Format untuk frontend
    const formatted = terbaru.map((item) => ({
      jenis: item.tipe,
      waktu: item.waktu,
      keterangan: item.deskripsi,
    }));

    return formatted;
  }
}
