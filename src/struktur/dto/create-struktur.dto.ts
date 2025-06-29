import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStrukturDto {
  @ApiProperty({ example: '1987654321' })
  @IsNotEmpty()
  @IsString()
  Petugas: string;

  @ApiProperty({ example: '2024-2026' })
  @IsOptional()
  @IsString()
  Periode?: string;
}
