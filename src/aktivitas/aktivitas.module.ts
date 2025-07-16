import { Module } from '@nestjs/common';
import { AktivitasController } from './aktivitas.controller';

@Module({
  controllers: [AktivitasController],
})
export class AktivitasModule {}
