import { Test, TestingModule } from '@nestjs/testing';
import { JabatanController } from './jabatan.controller';

describe('JabatanController', () => {
  let controller: JabatanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JabatanController],
    }).compile();

    controller = module.get<JabatanController>(JabatanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
