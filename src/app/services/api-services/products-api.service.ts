import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FakeDataService, FAKE_PRODUCTS } from 'src/app/data/fake-data';

const KEY = 'PRODUCTS';

// 1000 va 3000 orasidagi qaysidur sonni qaytaradi
const randomMilliseconds = (min = 1000, max = 3000) => {
  return min + Math.random() * (max - min);
};

const rerurnWithDelay = (data: any) =>
  of(data).pipe(delay(randomMilliseconds()));

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private fakeDataService: FakeDataService) {}
  /**
   * Fetches all products from storage
   * @returns products from storage
   */
  public getAll() {
    const products = this.fakeDataService.getList(KEY, FAKE_PRODUCTS);

    return rerurnWithDelay(products);
  }

  /**
   * Fetches one product from storage
   * @param id identificator of product
   * @returns product from storage
   */
  public get(id: number) {
    const products = this.fakeDataService.getList(KEY, FAKE_PRODUCTS);

    const product = products.find((c: any) => c.id === id);

    return rerurnWithDelay(product);
  }

  /**
   * Saving new product into storage
   * @param newProduct
   * @returns updated list
   */
  public create(newProduct: any) {
    const products = this.fakeDataService.getList(KEY, FAKE_PRODUCTS);

    products.push(newProduct);

    this.fakeDataService.saveList(KEY, products);

    return rerurnWithDelay(products);
  }

  /**
   * Updates one product by id
   * @param id identificator of product
   * @param changedProduct
   * @returns updated product or null
   */
  public update(id: number, changedProduct: any) {
    const products = this.fakeDataService.getList(KEY, FAKE_PRODUCTS);

    const oldProduct = products.find((c: any) => c.id === id);

    if (oldProduct) {
      const index = products.findIndex((c) => c === oldProduct);

      const updatedProduct = { ...oldProduct, ...changedProduct };

      products[index] = updatedProduct;

      this.fakeDataService.saveList(KEY, products);

      return rerurnWithDelay(updatedProduct);
    }

    return rerurnWithDelay(null);
  }

  /**
   * Removes one product by id
   * @param id identificator of product
   * @returns updated list or old list
   */
  public remove(id: number): Observable<any[]> {
    const products = this.fakeDataService.getList(KEY, FAKE_PRODUCTS);

    const product = products.find((c: any) => c.id === id);

    if (product) {
      const updatetCategories = products.filter((c) => c !== product);

      this.fakeDataService.saveList(KEY, updatetCategories);

      return rerurnWithDelay(updatetCategories);
    }

    return rerurnWithDelay(products);
  }
}
