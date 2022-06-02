import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../models/product';
import { LoadingService } from '../services/loading.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() categoryId: number | null = null;

  public isLoading$ = this.loading.content$;
  public products$ = this.service.products$;

  constructor(
    private service: ProductsService,
    private loading: LoadingService
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['categoryId']) {
      this.fetch();
    }
  }

  public fetch() {
    if (this.categoryId) {
      this.service.fetchByCategory(this.categoryId);
    } else {
      this.service.fetch();
    }
  }

  public remove(product: Product) {
    this.service.remove(product);
  }
}
