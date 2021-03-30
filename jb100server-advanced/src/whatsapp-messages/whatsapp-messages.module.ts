import { Module } from '@nestjs/common';
import { WhatsappMessagesService } from './whatsapp-messages.service';
import { WhatsappMessagesController } from './whatsapp-messages.controller';

@Module({
  controllers: [WhatsappMessagesController],
  providers: [WhatsappMessagesService],
})
export class WhatsappMessagesModule {}
