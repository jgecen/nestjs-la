import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappMessagesController } from './whatsapp-messages.controller';
import { WhatsappMessagesService } from './whatsapp-messages.service';

describe('WhatsappMessagesController', () => {
  let controller: WhatsappMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhatsappMessagesController],
      providers: [WhatsappMessagesService],
    }).compile();

    controller = module.get<WhatsappMessagesController>(
      WhatsappMessagesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
