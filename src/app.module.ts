import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JabatanController } from './jabatan/jabatan.controller';
import { JabatanService } from './jabatan/jabatan.service';
import { JabatanModule } from './jabatan/jabatan.module';
import { PetugasService } from './petugas/petugas.service';
import { PetugasModule } from './petugas/petugas.module';
import { StrukturModule } from './struktur/struktur.module';

@Module({
  imports: [
    // Load .env file secara global
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Modul-modul lainnya
    AuthModule,

    JabatanModule,

    PetugasModule,

    StrukturModule,
  ],
  controllers: [AppController, JabatanController],
  providers: [AppService, JabatanService, PetugasService],
})
export class AppModule {}
