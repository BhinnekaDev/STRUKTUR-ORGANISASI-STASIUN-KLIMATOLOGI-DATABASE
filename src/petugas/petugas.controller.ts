import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Headers,
} from '@nestjs/common';
import { PetugasService } from './petugas.service';
import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';
import { ApiTags, ApiHeader } from '@nestjs/swagger';

@ApiTags('petugas')
@Controller('petugas')
export class PetugasController {
  constructor(private readonly petugasService: PetugasService) {}

  @Get()
  findAll() {
    return this.petugasService.findAll();
  }

  @Get(':nip')
  findOne(@Param('nip') nip: string) {
    return this.petugasService.findOne(nip);
  }

  @Post()
  create(@Body() dto: CreatePetugasDto, @Headers('user_id') user_id: string) {
    return this.petugasService.create(dto);
  }

  @Put(':nip')
  update(
    @Param('nip') nip: string,
    @Body() dto: UpdatePetugasDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.petugasService.update(nip, dto);
  }

  @Delete(':nip')
  remove(@Param('nip') nip: string, @Headers('user_id') user_id: string) {
    return this.petugasService.delete(nip);
  }
}
