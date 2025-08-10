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
import { StrukturService } from './struktur.service';
import { CreateStrukturDto } from './dto/create-struktur.dto';
import { UpdateStrukturDto } from './dto/update-struktur.dto';
import { ApiTags, ApiOperation, ApiParam, ApiHeader } from '@nestjs/swagger';

@ApiTags('struktur-organisasi')
@Controller('struktur-organisasi')
export class StrukturController {
  constructor(private readonly strukturService: StrukturService) {}

  @Get()
  @ApiOperation({ summary: 'Ambil semua data struktur organisasi' })
  findAll() {
    return this.strukturService.findAll();
  }

  @Get('count') 
  @ApiOperation({ summary: 'Hitung total data struktur organisasi' })
  getCount() {
    return this.strukturService.getCount();
  }

  @Get(':ID_Struktur')
  @ApiOperation({ summary: 'Ambil satu data struktur organisasi berdasarkan ID' })
  @ApiParam({ name: 'ID_Struktur', description: 'ID Struktur Organisasi' })
  findOne(@Param('ID_Struktur') ID_Struktur: string) {
    return this.strukturService.findOne(ID_Struktur);
  }

  @Post()
  @ApiOperation({ summary: 'Tambah data struktur organisasi' })
  @ApiHeader({ name: 'user_id', description: 'ID pengguna yang melakukan aksi' })
  create(
    @Body() dto: CreateStrukturDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.strukturService.create(dto, user_id);
  }

  @Put(':ID_Struktur')
  @ApiOperation({ summary: 'Update data struktur organisasi berdasarkan ID' })
  @ApiParam({ name: 'ID_Struktur', description: 'ID Struktur Organisasi' })
  @ApiHeader({ name: 'user_id', description: 'ID pengguna yang melakukan aksi' })
  update(
    @Param('ID_Struktur') ID_Struktur: string,
    @Body() dto: UpdateStrukturDto,
    @Headers('user_id') user_id: string,
  ) {
    return this.strukturService.update(ID_Struktur, dto, user_id);
  }

  @Delete(':ID_Struktur')
  @ApiOperation({ summary: 'Hapus data struktur organisasi berdasarkan ID' })
  @ApiParam({ name: 'ID_Struktur', description: 'ID Struktur Organisasi' })
  remove(@Param('ID_Struktur') ID_Struktur: string) {
    return this.strukturService.remove(ID_Struktur);
  }
}
