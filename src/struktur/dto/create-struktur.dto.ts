import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStrukturDto {
  @ApiProperty({
    example: 'STRUK001',
    description: 'ID struktur organisasi (opsional, biasanya auto-generated)',
    required: false,
  })
  @IsOptional()
  @IsString()
  ID_Struktur?: string; 

  @ApiProperty({
    example: '1987654321',
    description: 'NIP petugas yang menjabat',
  })
  @IsNotEmpty()
  @IsString()
  Petugas: string;

  @ApiProperty({
    example: 'Kepala Seksi Data dan Informasi',
    description: 'Nama jabatan yang diemban petugas',
  })
  @IsNotEmpty()
  @IsString()
  jabatan: string;

  @ApiProperty({
    example: '2024-01-01',
    description: 'Tanggal mulai tugas (TMT)',
  })
  
  @IsNotEmpty()
  @IsString() 
  tmt: string;
}
