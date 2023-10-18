import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    inject,
} from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { AsyncPipe } from '@angular/common';
import { Product } from '../products/models/product.model';
import { Observable, scheduled, asyncScheduler, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
