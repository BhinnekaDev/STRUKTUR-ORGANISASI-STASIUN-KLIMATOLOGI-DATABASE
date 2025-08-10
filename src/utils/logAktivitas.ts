import { supabase } from '../supabase/supabase.client';

export async function logAktivitas(tipe: string, aksi: string, deskripsi: string) {
  const { error } = await supabase.from('Aktivitas').insert([
    {
      tipe, 
      aksi,
      deskripsi,
      waktu: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error('Gagal mencatat aktivitas:', error.message);
  }
}
