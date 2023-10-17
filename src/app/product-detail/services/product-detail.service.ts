import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../../products/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductDetailService {
    httpClient = inject(HttpClient);

    constructor() {}

    // get product by id
    getProductDetail(id: number): Observable<Product> {
        return this.httpClient.get<Product>(
            `${environment.apiUrl}products/${id}`
        );
    }
}
