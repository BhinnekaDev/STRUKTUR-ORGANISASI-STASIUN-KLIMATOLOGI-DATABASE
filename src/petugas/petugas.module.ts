import { Module } from '@nestjs/common';
import { PetugasService } from './petugas.service';
import { PetugasController } from './petugas.controller';

@Module({
  controllers: [PetugasController],
  providers: [PetugasService],
})
export class PetugasModule {}
