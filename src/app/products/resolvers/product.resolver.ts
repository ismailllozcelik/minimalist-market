import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    ResolveFn,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

export const ProductResolver: ResolveFn<Product[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    productFacade: ProductService = inject(ProductService)
): Observable<Product[]> =>
    productFacade
        .getProducts()
        .pipe(filter<Product[]>((products: Product[]) => !!products));
