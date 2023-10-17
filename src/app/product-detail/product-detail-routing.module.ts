import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: ':id',
                component: ProductDetailComponent,
                resolve: { product: ProductDetailResolver },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ProductDetailRoutingModule {}
