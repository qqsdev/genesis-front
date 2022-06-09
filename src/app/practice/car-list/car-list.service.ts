import { Injectable } from '@angular/core';
import { carList } from '../data/car-data';
import { Car } from '../models/car';

@Injectable({ providedIn: 'root' })
export class CarListService {
  public cars: Car[] = carList;
}
