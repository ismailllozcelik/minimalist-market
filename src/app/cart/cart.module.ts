import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { SidebarModule } from 'primeng/sidebar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { TotalPricePipe } from './pipes/total-price.pipe';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { BreadcrubmComponent } from '../shared/components/breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CartRoutingModule,
        InputTextModule,
        DropdownModule,
        RatingModule,
        ButtonModule,
        AsyncPipe,
        SidebarModule,
        InputNumberModule,
        BreadcrubmComponent,
    ],
    declarations: [
        CartComponent,
        ProductItemComponent,
        TotalPricePipe,
        OrderSummaryComponent,
    ],
})
export class CartModule {}
