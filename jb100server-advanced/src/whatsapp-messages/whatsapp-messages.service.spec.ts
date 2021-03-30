import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappMessagesService } from './whatsapp-messages.service';

describe('WhatsappMessagesService', () => {
  let service: WhatsappMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappMessagesService],
    }).compile();

    service = module.get<WhatsappMessagesService>(WhatsappMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
