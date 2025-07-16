// src/jabatan/jabatan.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { JabatanService } from './jabatan.service';
import { CreateJabatanDto } from './dto/create-jabatan.dto';
import { UpdateJabatanDto } from './dto/update-jabatan.dto';
import { ApiTags } from '@nestjs/swagger';
import { supabase } from '../supabase/supabase.client';

@ApiTags('jabatan')
@Controller('jabatan')
export class JabatanController {
  constructor(private readonly jabatanService: JabatanService) {}

  @Get()
  findAll() {
    return this.jabatanService.findAll();
  }

  @Get('count')
  async getCount() {
    const { count, error } = await supabase
      .from('Jabatan')
      .select('*', { count: 'exact', head: true });

    if (error) throw new BadRequestException(error.message);
    return { count };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jabatanService.findOne(id);
  }

  @Post()
  create(
    @Body() dto: CreateJabatanDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.jabatanService.create(dto, user_id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateJabatanDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.jabatanService.update(id, dto, user_id);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Headers('user_id') user_id: string,
  ) {
    return this.jabatanService.delete(id, user_id);
  }
}
