import { Test, TestingModule } from '@nestjs/testing';
import { LanguagesController } from './languages.controller';

describe('Languages Controller', () => {
  let controller: LanguagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguagesController],
    }).compile();

    controller = module.get<LanguagesController>(LanguagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
