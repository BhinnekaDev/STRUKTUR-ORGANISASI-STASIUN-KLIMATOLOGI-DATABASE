// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { supabase } from '../supabase/supabase.client';

@Injectable()
export class AuthService {
  async register(dto: RegisterDto) {
    const { data, error } = await supabase.auth.admin.createUser({
      email: dto.email,
      password: dto.password,
      email_confirm: true,
    });

    if (error) throw new BadRequestException(error.message);

    const user = data.user;
    if (!user) throw new BadRequestException('Gagal membuat user.');

    const { error: insertError } = await supabase.from('Admin').insert({
      ID_Admin: user.id,
      Nama_Depan_Admin: dto.nama_depan,
      Nama_Belakang_Admin: dto.nama_belakang,
      Peran: dto.peran,
    });

    if (insertError) {
      await supabase.auth.admin.deleteUser(user.id);
      throw new BadRequestException('Gagal menyimpan data admin: ' + insertError.message);
    }

    return { message: 'Registrasi berhasil', user_id: user.id };
  }
  async login(dto: LoginDto) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: dto.email,
      password: dto.password,
    });

    if (error || !data.session) {
      throw new UnauthorizedException('Email atau password salah.');
    }

    return {
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: data.user,
    };
  }

}