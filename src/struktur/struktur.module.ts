import { Module } from '@nestjs/common';
import { StrukturService } from './struktur.service';
import { StrukturController } from './struktur.controller';

@Module({
  controllers: [StrukturController],
  providers: [StrukturService],
})
export class StrukturModule {}
