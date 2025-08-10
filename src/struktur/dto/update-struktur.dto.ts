import { PartialType } from '@nestjs/swagger';
import { CreateStrukturDto } from './create-struktur.dto';

export class UpdateStrukturDto extends PartialType(CreateStrukturDto) {}
