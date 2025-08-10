import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateJabatanDto {
  @ApiProperty({ example: 'Kepala Seksi Observasi' })
  @IsNotEmpty()
  @IsString()
  Nama_Jabatan: string;
}
