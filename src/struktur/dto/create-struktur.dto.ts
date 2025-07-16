import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStrukturOrganisasiDto {
  @ApiProperty({
    example: 'STRUK001',
    description: 'ID struktur organisasi ',
    required: false,
  })
  @IsOptional()
  @IsString()
  id_struktur?: string;

  @ApiProperty({
    example: '1987654321',
    description: 'NIP petugas yang menjabat',
  })
  @IsNotEmpty()
  @IsString()
  petugas: string;

  @ApiProperty({
    example: 'Kepala Seksi Data dan Informasi',
    description: 'Nama jabatan yang diemban petugas',
  })
  @IsNotEmpty()
  @IsString()
  jabatan: string;

  @ApiProperty({
    example: '2024-01-01',
    description: 'Tanggal mulai tugas (TMT) dalam format YYYY-MM-DD',
  })
  @IsNotEmpty()
  @IsString()
  tmt: string;
}
