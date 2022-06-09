import { Component } from '@angular/core';
import { Car } from '../models/car';
import { CarListService } from './car-list.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  public cars: Car[] = this.service.cars;

  constructor(private service: CarListService) {}
}
