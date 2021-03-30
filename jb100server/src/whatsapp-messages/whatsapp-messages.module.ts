import { Module } from '@nestjs/common';
import { WhatsappMessagesService } from './whatsapp-messages.service';
import { WhatsappMessagesController } from './whatsapp-messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import WhatsappMessageTypeOrmRepository from './whatsapp-messages.typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([WhatsappMessageTypeOrmRepository])],
  controllers: [WhatsappMessagesController],
  providers: [WhatsappMessagesService],
})
export class WhatsappMessagesModule {}
