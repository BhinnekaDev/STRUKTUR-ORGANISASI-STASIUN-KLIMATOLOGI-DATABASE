import { PartialType } from '@nestjs/swagger';
import { CreatePetugasDto } from './create-petugas.dto';

export class UpdatePetugasDto extends PartialType(CreatePetugasDto) {}
