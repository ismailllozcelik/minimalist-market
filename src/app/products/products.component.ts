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
import { Product } from './models/product.model';
import { Observable, scheduled, asyncScheduler, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { CartStoreService } from '../store/cart-store.service';
import { UserService } from '../store/user.service';
import { User } from '../shared/models/user.model';

@Component({
    templateUrl: './products.component.html',
    styles: [
        `
            :host ::ng-deep .product-image {
                min-height: 150px;
                max-height: 200px; /* veya istediğiniz boyutu belirtin */
            }
        `,
    ],
    providers: [MessageService, ConfirmationService, ProductService],
})
export class ProductComponent implements OnInit {
    products$: Observable<Product[] | null> = scheduled([], asyncScheduler);
    private readonly route: ActivatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private cartService = inject(CartStoreService);
    private userService = inject(UserService);
    userData: User;

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';

    constructor() {}

    ngOnInit() {
        this.products$ = this.route.data.pipe(
            map((data: any) => data.products)
        );

        this.userService.user$.subscribe((user) => {
            this.userData = user;
        });

        this.sortOptions = [
            { label: 'Price High to Low', value: '!price' },
            { label: 'Price Low to High', value: 'price' },
        ];
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }

    showDetailProduct(product: Product) {
        this.router.navigate(['/product', product.id]);
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
    }
}
