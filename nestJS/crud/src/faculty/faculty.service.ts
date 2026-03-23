import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from './entities/faculty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty)
    private facRepo: Repository<Faculty>
  ) { }

  create(createFacultyDto: CreateFacultyDto) {
    return this.facRepo.save(createFacultyDto);
  }

  findAll() {
    return this.facRepo.find();
  }

  findOne(id: number) {
    return this.facRepo.findOneBy({ id });
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    return this.facRepo.update(id, updateFacultyDto);
  }

  remove(id: number) {
    return this.facRepo.remove({ id });
  }
}
