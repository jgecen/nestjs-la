import { User } from '../../users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Responsible } from '../../responsible/entities/responsible.entity';

@Entity()

export class WhatsappMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.whatsappMessages)
  user: User;

  @ManyToOne(() => Responsible, (responsible) => responsible.whatsappMessages)
  responsible: Responsible;

}
