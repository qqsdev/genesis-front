import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = [
    {
      name: 'nimadur',
      url: 'assets/images/food.jpg',
    },
  ];

  constructor(private loading: LoadingService) {}
}
