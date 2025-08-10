import { IsEmail, IsNotEmpty, MinLength, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'admin@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securePass123', minLength: 6 })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Eyca' })
  @IsNotEmpty()
  nama_depan: string;

  @ApiProperty({ example: 'Putri' })
  @IsNotEmpty()
  nama_belakang: string;

  @ApiProperty({ example: 'Admin', enum: ['Admin', 'SuperAdmin'] })
  @IsNotEmpty()
  @IsIn(['Admin', 'SuperAdmin'])
  peran: 'Admin' | 'SuperAdmin';
}
