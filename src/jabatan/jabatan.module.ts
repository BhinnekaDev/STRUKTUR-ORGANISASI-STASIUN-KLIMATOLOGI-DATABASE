import { Module } from '@nestjs/common';
import { JabatanService } from './jabatan.service';
import { JabatanController } from './jabatan.controller';

@Module({
  controllers: [JabatanController],
  providers: [JabatanService],
})
export class JabatanModule {}
