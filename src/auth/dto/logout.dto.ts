// logout.dto.ts
import { IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LogoutDto {
  @ApiProperty({ example: '03c1fbd5-4dbe-4f55-8d60-21a30cf95f3a' })
  @IsNotEmpty()
  @IsUUID()
  user_id: string;
}
