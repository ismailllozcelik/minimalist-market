import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Component({
    selector: 'order-summary',
    templateUrl: 'order-summary.component.html',
})
export class OrderSummaryComponent implements OnInit {
    @Input({ required: true }) products: Product[];
    constructor() {}

    ngOnInit() {}
}
