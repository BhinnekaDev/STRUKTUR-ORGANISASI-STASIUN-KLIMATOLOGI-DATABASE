import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetugasDto {
  @ApiProperty({ example: '1987654321' })
  @IsNotEmpty()
  @IsString()
  nip: string;

  @ApiProperty({ example: 'Siti Aminah' })
  @IsNotEmpty()
  @IsString()
  nama_lengkap: string;

  @ApiProperty({ example: 'S1 Geofisika' })
  @IsOptional()
  @IsString()
  pendidikan_terakhir?: string;

  @ApiProperty({ example: 'III/a' })
  @IsOptional()
  @IsString()
  pangkat_golongan?: string;

  @ApiProperty({ example: '2023-05-10' })
  @IsOptional()
  @IsString()
  kgb_terakhir?: string;

  @ApiProperty({ example: '2025-05-10' })
  @IsOptional()
  @IsString()
  kgb_berikutnya?: string;

  @ApiProperty({ example: '081234567890' })
  @IsOptional()
  @IsString()
  no_telepon?: string;

  @ApiProperty({ example: 'base64string.jpg' })
  @IsOptional()
  @IsString()
  foto_pegawai?: string;

  @ApiProperty({ example: 'JBT001' })
  @IsNotEmpty()
  @IsString()
  id_jabatan: string;

  @ApiProperty({ example: 'Jakarta, 12 Januari 1985' })
  @IsOptional()
  @IsString()
  tempat_tanggal_lahir?: string;
}
