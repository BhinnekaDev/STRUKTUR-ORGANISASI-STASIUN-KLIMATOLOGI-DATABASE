import { PartialType } from '@nestjs/swagger';
import { CreateStrukturOrganisasiDto } from './create-struktur.dto';

export class UpdateStrukturOrganisasiDto extends PartialType(CreateStrukturOrganisasiDto) {}
