import { WhatsappMessage } from '../../whatsapp-messages/entities/whatsapp-message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity('responsible')
@Unique(['phone'])
export class Responsible {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @OneToMany(() => WhatsappMessage, (whatsappMessages) => whatsappMessages.user)
  whatsappMessages: WhatsappMessage[];
}
