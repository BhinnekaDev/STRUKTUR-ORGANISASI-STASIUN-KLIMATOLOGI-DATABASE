import { IsNotEmpty, IsString, IsUUID, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetugasDto {
  @ApiProperty({ example: '1987654321' })
  @IsNotEmpty()
  @IsString()
  NIP: string;

  @ApiProperty({ example: 'uuid-jabatan', required: true })
  @IsUUID()
  ID_Jabatan: string;

  @ApiProperty({ example: 'Kepala Seksi' })
  @IsOptional()
  @IsString()
  Jabatan?: string;

  @ApiProperty({ example: 'Budi' })
  @IsNotEmpty()
  @IsString()
  Nama_Depan_Petugas: string;

  @ApiProperty({ example: 'Santoso' })
  @IsNotEmpty()
  @IsString()
  Nama_Belakang_Petugas: string;

  @ApiProperty({ example: '08123456789' })
  @IsOptional()
  @IsString()
  No_Telepon_Petugas?: string;

  @IsOptional()
    @ApiProperty({ example: 'https://example.com/foto.jpg', required: false })
    @IsString()
    Foto_Petugas?: string | null;


  @ApiProperty({ example: '2020-2024' })
  @IsOptional()
  @IsString()
  Masa_Bakti?: string;
}
