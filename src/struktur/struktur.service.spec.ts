import { Test, TestingModule } from '@nestjs/testing';
import { StrukturService } from './struktur.service';

describe('StrukturService', () => {
  let service: StrukturService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrukturService],
    }).compile();

    service = module.get<StrukturService>(StrukturService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
