import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsibleModule } from './responsible/responsible.module';
import { WhatsappMessagesModule } from './whatsapp-messages/whatsapp-messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ResponsibleModule,
    WhatsappMessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
