import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Car } from '../models/car.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private localStorageKey = 'cars';
  private carsSubject: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);
  public cars$: Observable<Car[]> = this.carsSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const carsFromStorage = localStorage.getItem(this.localStorageKey);
      if (carsFromStorage) {
        this.carsSubject.next(JSON.parse(carsFromStorage));
      }
    }
  }

  getCars(): Car[] {
    return this.carsSubject.getValue();
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
    const cars = this.getCars();
    const index = cars.findIndex(c => c.id === car.id);
    if (index !== -1) {
      cars[index] = car;
    } else {
      cars.push(car);
    }
    this.saveCars(cars);
  }

  deleteCar(id: number): void {
    const cars = this.getCars().filter(car => car.id !== id);
    this.saveCars(cars);
  }

  private saveCars(cars: Car[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
    }
    this.carsSubject.next(cars);
  }
}
