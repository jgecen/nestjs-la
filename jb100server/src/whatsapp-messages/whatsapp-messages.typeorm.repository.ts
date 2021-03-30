import { EntityRepository, Repository } from 'typeorm';
import { WhatsappMessage } from './entities/whatsapp-message.entity';

@EntityRepository(WhatsappMessage)
export default class WhatsappMessageTypeOrmRepository extends Repository<WhatsappMessage> {}
