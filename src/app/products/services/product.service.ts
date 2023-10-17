import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
    httpClient = inject(HttpClient);

    constructor() { }

    // get all products from api with observable
    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${environment.apiUrl}products`);
    }
    
}