import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { ApiService } from './api-services/api.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = new BehaviorSubject<Product[]>([]);

  constructor(private loading: LoadingService, private api: ApiService) {}

  public fetch() {
    this.loading.startLoading();

    this.api.products.getAll().subscribe((data) => {
      this.products.next(data);

      this.loading.stopLoading();
    });
  }
}
