import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    inject,
} from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { AsyncPipe } from '@angular/common';
import { Product as pd } from '../products/models/product.model';
import { Observable, scheduled, asyncScheduler, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './services/product-detail.service';

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
    product$: Observable<pd | null> = scheduled([], asyncScheduler);
    private readonly route: ActivatedRoute = inject(ActivatedRoute);

    constructor() {}

    ngOnInit() {
        this.product$ = this.route.data.pipe(map((data: any) => data.product));
        // this.products$ = this.route.data.pipe(map((data) => data));
        this.product$.subscribe((item) => {
            console.log('product detail', item);
        });
    }
}
