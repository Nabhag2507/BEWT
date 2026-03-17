import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private stuRepo: Model<Student>
  ) { }

  create(createStudentDto: CreateStudentDto) {
    return this.stuRepo.create(createStudentDto);
  }

  findAll() {
    return this.stuRepo.find();
  }

  findOne(id: number) {
    return this.stuRepo.findById(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.stuRepo.updateOne({ id }, updateStudentDto);
  }

  remove(id: number) {
    return this.stuRepo.deleteOne({ id });
  }
}
