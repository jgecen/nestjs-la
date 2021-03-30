import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModuleTest } from '../../test/ormconfig.test';
import { WhatsappMessagesModule } from './whatsapp-messages.module';
import { WhatsappMessagesService } from './whatsapp-messages.service';

describe('WhatsappMessagesService', () => {
  let service: WhatsappMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [WhatsappMessagesModule, TypeOrmModuleTest],
    }).compile();

    service = module.get<WhatsappMessagesService>(WhatsappMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
