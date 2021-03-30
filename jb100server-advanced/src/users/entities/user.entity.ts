import { WhatsappMessage } from '../../whatsapp-messages/entities/whatsapp-message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from 'typeorm';

@Entity('users')
@Unique(['phone'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @OneToMany(() => WhatsappMessage, (whatsappMessages) => whatsappMessages.user)
  whatsappMessages: WhatsappMessage[];
}
