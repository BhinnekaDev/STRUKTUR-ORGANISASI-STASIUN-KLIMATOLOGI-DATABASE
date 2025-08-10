// src/petugas/petugas.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PetugasService } from './petugas.service';
import { CreatePetugasDto } from './dto/create-petugas.dto';
import { UpdatePetugasDto } from './dto/update-petugas.dto';

@Controller('petugas')
export class PetugasController {
  constructor(private readonly petugasService: PetugasService) {}

  @Post()
  create(@Body() dto: CreatePetugasDto) {
    return this.petugasService.create(dto);
  }

  @Get()
  findAll() {
    return this.petugasService.findAll();
  }

  @Get('count')
  getCount() {
    return this.petugasService.getCount();
  }

  @Get(':nip')
  findOne(@Param('nip') nip: string) {
    return this.petugasService.findOne(nip);
  }

  @Put(':nip')
  update(@Param('nip') nip: string, @Body() dto: UpdatePetugasDto) {
    return this.petugasService.update(nip, dto);
  }

  @Delete(':nip')
  remove(@Param('nip') nip: string) {
    return this.petugasService.remove(nip);
  }
}
