import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Car} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private localStorageKey = 'cars';
  private readonly cars: Car[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const carsFromStorage = localStorage.getItem('cars');
      if (carsFromStorage) {
        this.cars = JSON.parse(carsFromStorage);
      }
    }
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | undefined {
    return this.getCars().find(car => car.id === id);
  }

  addCar(car: Car): void {
    const cars = this.getCars();
    cars.push(car);
    this.saveCars(cars);
  }

  updateCar(car: Car): void {
    const index = this.cars.findIndex(c => c.id === car.id);
    if (index !== -1) {
      this.cars[index] = car;
    } else {
      this.cars.push(car);
    }
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cars', JSON.stringify(this.cars));
    }
  }

  deleteCar(id: number): void {
    const cars = this.getCars().filter(car => car.id !== id);
    this.saveCars(cars);
  }

  private saveCars(cars: Car[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
    }
  }
}
