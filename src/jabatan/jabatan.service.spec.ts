import { Test, TestingModule } from '@nestjs/testing';
import { JabatanService } from './jabatan.service';

describe('JabatanService', () => {
  let service: JabatanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JabatanService],
    }).compile();

    service = module.get<JabatanService>(JabatanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
