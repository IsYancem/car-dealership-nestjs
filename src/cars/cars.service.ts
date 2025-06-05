import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang',
    },
    {
      id: 4,
      brand: 'Chevrolet',
      model: 'Camaro',
    },
    {
      id: 5,
      brand: 'BMW',
      model: 'X5',
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'C-Class',
    },
    {
      id: 7,
      brand: 'Audi',
      model: 'A4',
    },
    {
      id: 8,
      brand: 'Hyundai',
      model: 'Elantra',
    },
    {
      id: 9,
      brand: 'Kia',
      model: 'Sportage',
    },
    {
      id: 10,
      brand: 'Nissan',
      model: 'Altima',
    },
  ];

  findAll() {
    return this.cars;
  }

  findCardById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found.`);

    return car;
  }
}
