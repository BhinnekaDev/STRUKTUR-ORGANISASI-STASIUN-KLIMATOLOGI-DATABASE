import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJabatanDto {
  @ApiProperty({ example: 'Kepala Stasiun' })
  @IsNotEmpty()
  @IsString()
  Nama_Jabatan: string;
}
