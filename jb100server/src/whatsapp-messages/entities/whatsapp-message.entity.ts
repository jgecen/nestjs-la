import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class WhatsappMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  from: number;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @Column('jsonb')
  to: number[];
}
