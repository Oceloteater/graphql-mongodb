import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Student } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.studentRepository.findOne({ id });
  }

  async getStudentsByIds(studentIds: string[]): Promise<Student[]> {
    return await this.studentRepository.find({
      where: {
        id: {
          $in: [...studentIds],
        } as any,
      },
    });
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return await this.studentRepository.save(student);
  }
}
