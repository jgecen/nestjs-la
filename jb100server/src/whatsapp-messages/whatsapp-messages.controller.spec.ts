import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModuleTest } from '../../test/ormconfig.test';
import { WhatsappMessagesController } from './whatsapp-messages.controller';
import { WhatsappMessagesModule } from './whatsapp-messages.module';

describe('WhatsappMessagesController', () => {
  let controller: WhatsappMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [WhatsappMessagesModule, TypeOrmModuleTest],
    }).compile();

    controller = module.get<WhatsappMessagesController>(
      WhatsappMessagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
