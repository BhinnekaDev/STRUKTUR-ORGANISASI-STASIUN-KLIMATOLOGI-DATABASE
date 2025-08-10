import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config(); // Pastikan ini dipanggil sebelum akses process.env

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY wajib diatur di file .env');
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
