import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    inject,
} from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { AsyncPipe } from '@angular/common';
import { Product } from '../products/models/product.model';
import { Observable, scheduled, asyncScheduler, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './services/product-detail.service';
import { CartStoreService } from '../store/cart-store.service';
import { UserService } from '../store/user.service';
import { User } from '../shared/models/user.model';

@Component({
    templateUrl: './product-detail.component.html',
    styles: [
        `
            :host ::ng-deep .product-image {
                min-height: 150px;
                max-height: 200px;
            }
        `,
    ],
    providers: [MessageService, ConfirmationService, ProductDetailService],
})
export class ProductDetailComponent implements OnInit {
    product$: Observable<Product | null> = scheduled([], asyncScheduler);
    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    private cartService = inject(CartStoreService);
    private userService = inject(UserService);
    userData: User;

    constructor() {}

    ngOnInit() {
        this.product$ = this.route.data.pipe(map((data: any) => data.product));

        this.userService.user$.subscribe((user) => {
            this.userData = user;
        });
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
    }
}
