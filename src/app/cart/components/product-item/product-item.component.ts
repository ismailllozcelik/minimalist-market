import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartStoreService } from 'src/app/store/cart-store.service';

@Component({
    selector: 'product-item',
    templateUrl: 'product-item.component.html',
})
export class ProductItemComponent implements OnInit {
    private cartService = inject(CartStoreService);
    @Input({ required: true }) product: Product;

    constructor() {}

    ngOnInit() {}

    increment(product: Product) {
        product.quantity++;
        this.cartService.updateQuantity(product, product.quantity);
    }

    decrement(product: Product) {
        if (product.quantity > 0) product.quantity--;
        this.cartService.updateQuantity(product, product.quantity);
    }

    removeProduct(product: Product) {
        this.cartService.removeFromCart(product);
    }
}
