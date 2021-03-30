import { Injectable } from '@nestjs/common';
import { CreateWhatsappMessageDto } from './dto/create-whatsapp-message.dto';
import { UpdateWhatsappMessageDto } from './dto/update-whatsapp-message.dto';

@Injectable()
export class WhatsappMessagesService {
  create(createWhatsappMessageDto: CreateWhatsappMessageDto) {
    return 'This action adds a new whatsappMessage';
  }

  findAll() {
    return `This action returns all whatsappMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} whatsappMessage`;
  }

  update(id: number, updateWhatsappMessageDto: UpdateWhatsappMessageDto) {
    return `This action updates a #${id} whatsappMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} whatsappMessage`;
  }
}
