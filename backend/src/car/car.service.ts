import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService){}

  create(createCarDto: CreateCarDto) {
    return this.prisma.cars.create({
      data: {
        ...createCarDto
      }
    });
  }

  async findAll() {
    return await this.prisma.cars.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
