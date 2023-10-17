import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProductComponent }
	])],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
