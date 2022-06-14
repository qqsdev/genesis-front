import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products = this.productsService.products;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.fetch();
  }
}
