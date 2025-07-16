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
import { StrukturOrganisasiService } from './struktur.service';
import { CreateStrukturOrganisasiDto } from './dto/create-struktur.dto';
import { UpdateStrukturOrganisasiDto } from './dto/update-struktur.dto';
import { ApiTags, ApiOperation, ApiParam, ApiHeader } from '@nestjs/swagger';

@ApiTags('struktur-organisasi')
@Controller('struktur-organisasi')
export class StrukturOrganisasiController {
  constructor(private readonly strukturService: StrukturOrganisasiService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data struktur organisasi' })
  findAll() {
    return this.strukturService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Ambil satu data struktur organisasi berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID Struktur Organisasi' })
  findOne(@Param('id') id: string) {
    return this.strukturService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Tambah data struktur organisasi' })
  @ApiHeader({ name: 'user_id', description: 'ID pengguna yang melakukan aksi' })
  create(
    @Body() dto: CreateStrukturOrganisasiDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.strukturService.create(dto, user_id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update data struktur organisasi berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID Struktur Organisasi' })
  @ApiHeader({ name: 'user_id', description: 'ID pengguna yang melakukan aksi' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateStrukturOrganisasiDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.strukturService.update(id, dto, user_id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Hapus data struktur organisasi berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID Struktur Organisasi' })
  remove(@Param('id') id: string) {
    return this.strukturService.remove(id);
  }
}
