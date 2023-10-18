import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RouterModule } from '@angular/router';
import { HotDetalComponent } from './components/hot-deal.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        CommonModule,
        ProductDetailRoutingModule,
        FormsModule,
        RouterModule,
        AsyncPipe,
        ButtonModule,
        RatingModule,
        TooltipModule,
    ],
    declarations: [ProductDetailComponent, HotDetalComponent],
})
export class ProductDetailModule {}
