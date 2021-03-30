import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsible } from './entities/responsible.entity';
import { ResponsibleService } from './responsible.service';

@Module({
  imports: [TypeOrmModule.forFeature([Responsible])],
  providers: [ResponsibleService],
})
export class ResponsibleModule {}
