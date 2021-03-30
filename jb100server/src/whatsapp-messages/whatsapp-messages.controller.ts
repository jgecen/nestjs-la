import { Controller, Post, Body } from '@nestjs/common';
import { WhatsappMessagesService } from './whatsapp-messages.service';
import { CreateWhatsappMessageDto } from './dto/create-whatsapp-message.dto';

@Controller('whatsapp-messages')
export class WhatsappMessagesController {
  constructor(
    private readonly whatsappMessagesService: WhatsappMessagesService,
  ) {}

  @Post()
  create(@Body() createWhatsappMessageDto: CreateWhatsappMessageDto) {
    return this.whatsappMessagesService.create(createWhatsappMessageDto);
  }
}
