import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products = this.productsService.products;

  public item$: Observable<any[]>;

  constructor(firestore: Firestore, private productsService: ProductsService) {
    const categories = collection(firestore, 'categories');
    this.item$ = collectionData(categories);
  }

  ngOnInit(): void {
    this.productsService.fetch();
  }
}
