import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { OrderListModule } from 'primeng/orderlist';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HotDetalComponent } from './components/hot-deal.component';
import { ImageModule } from 'primeng/image';

@NgModule({
    imports: [
        CommonModule,
        ProductDetailRoutingModule,
        FormsModule,
        RouterModule,
        AsyncPipe,
        ButtonModule,
        RatingModule,
        ImageModule,
    ],
    declarations: [ProductDetailComponent, HotDetalComponent],
})
export class ProductDetailModule {}
