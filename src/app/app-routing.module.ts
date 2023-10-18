import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'products',
                            loadChildren: () =>
                                import('./products/products.module').then(
                                    (m) => m.ProductsModule
                                ),
                        },
                        {
                            path: 'product',
                            loadChildren: () =>
                                import(
                                    './product-detail/product-detail.module'
                                ).then((m) => m.ProductDetailModule),
                        },
                        {
                            path: 'cart',
                            loadChildren: () =>
                                import('./cart/cart.module').then(
                                    (m) => m.CartModule
                                ),
                        },
                    ],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./auth/auth.module').then((m) => m.AuthModule),
                },

                { path: '**', redirectTo: '/products' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
