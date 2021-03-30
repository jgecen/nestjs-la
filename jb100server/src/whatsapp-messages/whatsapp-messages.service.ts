import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWhatsappMessageDto } from './dto/create-whatsapp-message.dto';
import { WhatsappMessage } from './entities/whatsapp-message.entity';
import WhatsappMessageTypeOrmRepository from './whatsapp-messages.typeorm.repository';

@Injectable()
export class WhatsappMessagesService {
  constructor(
    @InjectRepository(WhatsappMessageTypeOrmRepository)
    private readonly whatsappMessageTypeOrmRepository: WhatsappMessageTypeOrmRepository,
  ) {}

  create(
    createWhatsappMessageDto: CreateWhatsappMessageDto,
  ): Promise<WhatsappMessage> {
    return this.whatsappMessageTypeOrmRepository.save(createWhatsappMessageDto);
  }
}
