import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    ResolveFn,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Product } from '../../products/models/product.model';
import { ProductDetailService } from '../services/product-detail.service';

export const ProductDetailResolver: ResolveFn<Product> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    productFacade: ProductDetailService = inject(ProductDetailService)
): Observable<Product> => {
    const productId = +route.paramMap.get('id');
    return productFacade
        .getProductDetail(productId)
        .pipe(filter<Product>((product: Product) => !!product));
};
