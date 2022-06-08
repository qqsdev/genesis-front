import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.api + '/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches all products from storage
   * @returns products from storage
   */
  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(BASE_URL);
  }

  /**
   * Fetches one product from storage
   * @param id identificator of product
   * @returns product from storage
   */
  public get(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/${id}`);
  }

  /**
   * Saving new product into storage
   * @param payload
   * @returns updated list
   */
  public create(payload: Partial<Product>): Observable<Product[]> {
    const { id, ...body } = payload;
    return this.http.post<Product[]>(BASE_URL, body);
  }

  /**
   * Updates one product by id
   * @param id identificator of product
   * @param changedProduct
   * @returns updated product or null
   */
  public update(payload: Partial<Product>): Observable<Product[]> {
    return this.http.put<Product[]>(BASE_URL, payload);
  }

  /**
   * Removes one product by id
   * @param id identificator of product
   * @returns updated list or old list
   */
  public remove(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(BASE_URL, { params: { id } });
  }
}
