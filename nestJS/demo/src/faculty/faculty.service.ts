import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

type Faculty = {
  id: number;
  name: string;
  age: number;
};

@Injectable()
export class FacultyService {

  private fac: Faculty[] = [
    { id: 1, name: "Nabhag", age: 18 },
    { id: 2, name: "Vishal", age: 58 },
    { id: 3, name: "Kuldeep", age: 78 },
    { id: 4, name: "Aniruddh", age: 19 }
  ];

  private idCounter = 5;

  create(createFacultyDto: CreateFacultyDto) {
    const newFac: Faculty = {
      id: this.idCounter++,
      name: createFacultyDto.name!,
      age: createFacultyDto.age!
    };

    this.fac.push(newFac);
    return newFac;
  }

  findAll() {
    return this.fac;
  }

  findOne(id: number) {
    const faculty = this.fac.find(f => f.id === id);

    if (!faculty) {
      return { error: "Faculty not found" };
    }

    return faculty;
  }

  update(id: number, updateFacultyDto: UpdateFacultyDto) {
    const index = this.fac.findIndex(f => f.id === id);

    if (index === -1) {
      return { error: "Faculty not found" };
    }

    this.fac[index] = {
      ...this.fac[index],
      ...updateFacultyDto
    };

    return this.fac[index];
  }

  remove(id: number) {
    const index = this.fac.findIndex(f => f.id === id);

    if (index === -1) {
      return { error: "Faculty not found" };
    }

    return this.fac.splice(index, 1)[0];
  }
}