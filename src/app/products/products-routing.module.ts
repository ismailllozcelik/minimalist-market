import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products.component';
import { ProductResolver } from './resolvers/product.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProductComponent,
                resolve: { products: ProductResolver },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
