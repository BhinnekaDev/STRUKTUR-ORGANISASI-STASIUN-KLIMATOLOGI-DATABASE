import { Controller, Get, Post, Patch, Delete, Param, Body, Headers } from '@nestjs/common';
import { StrukturService } from './struktur.service';
import { CreateStrukturDto } from './dto/create-struktur.dto';
import { UpdateStrukturDto } from './dto/update-struktur.dto';

@Controller('struktur-organisasi')
export class StrukturController {
  constructor(private readonly strukturService: StrukturService) {}

  @Get()
  findAll() {
    return this.strukturService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.strukturService.findOne(id);
  }

  @Post()
  create(
    @Headers('user_id') user_id: string, // diterima tapi tidak digunakan
    @Body() dto: CreateStrukturDto,
  ) {
    return this.strukturService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Headers('user_id') user_id: string, // diterima tapi tidak digunakan
    @Body() dto: UpdateStrukturDto,
  ) {
    return this.strukturService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.strukturService.delete(id);
  }
}
