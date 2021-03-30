import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResponsibleDto } from './dto/create-responsible.dto';
import { UpdateResponsibleDto } from './dto/update-responsible.dto';
import { Responsible } from './entities/responsible.entity';

@Injectable()
export class ResponsibleService {
  constructor(
    @InjectRepository(Responsible)
    private responsibleRepository: Repository<Responsible>,
  ) {}

  create(createResponsibleDto: CreateResponsibleDto): Promise<Responsible> {
    return this.responsibleRepository.save(createResponsibleDto);
  }

  findAll(): Promise<Responsible[]> {
    return this.responsibleRepository.find();
  }

  findOne(id: number): Promise<Responsible> {
    return this.responsibleRepository.findOneOrFail(id);
  }

  update(
    id: number,
    updateResponsibleDto: UpdateResponsibleDto,
  ): Promise<Responsible> {
    return this.responsibleRepository.save({ ...updateResponsibleDto, id });
  }

  async remove(id: number): Promise<Responsible> {
    return this.responsibleRepository.remove(await this.findOne(id));
  }
}
