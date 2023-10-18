import { Component, OnInit, inject } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Product } from '../products/models/product.model';
import { CartStoreService } from '../store/cart-store.service';

@Component({
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    providers: [MessageService, ConfirmationService],
})
export class CartComponent implements OnInit {
    private cartService = inject(CartStoreService);
    myCartList: Product[] = [];

    constructor() {}

    ngOnInit() {
        this.cartService.currentCart.subscribe((products) => {
            this.myCartList = products;
        });
    }
}
