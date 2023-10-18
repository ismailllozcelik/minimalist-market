import {
    Component,
    OnInit,
    Inject,
    ChangeDetectionStrategy,
    inject,
    effect,
} from '@angular/core';
import { CartStoreService } from '../store/cart-store.service';
import { Product } from '../products/models/product.model';

@Component({
    selector: 'summary-cart',
    templateUrl: './summary-cart.component.html',
})
export class SummaryCartComponent implements OnInit {
    private cartService = inject(CartStoreService);
    myCartList: Product[] = [];

    constructor() {}

    ngOnInit() {
        this.cartService.currentCart.subscribe((products) => {
            console.log('item', products);
            this.myCartList = products;
        });
    }
}
