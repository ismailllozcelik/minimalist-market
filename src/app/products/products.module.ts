import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './products.component';
import { ProductRoutingModule } from './products-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { DataViewModule } from 'primeng/dataview';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
        DataViewModule,
        InputTextModule,
        DropdownModule,
        RatingModule,
        ButtonModule,
        AsyncPipe,
        TooltipModule,
    ],
    declarations: [ProductComponent, EllipsisPipe],
})
export class ProductsModule {}
