import { Injectable, computed, effect, signal } from '@angular/core';
import { Product } from '../products/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartStoreService {
    private myCartList = new BehaviorSubject<Product[]>([]);
    currentCart = this.myCartList.asObservable();

    addToCart(product: Product) {
        // control by id for added product via myCartList
        console.log('this.myCartList', this.myCartList.value);
        const item = this.myCartList.value.find(
            (item) => item.id === product.id
        );
        if (!item) {
            product.quantity = 1;
            this.myCartList.next([...this.myCartList.value, product]);
        }
    }

    updateQuantity(product: Product, quantity: number) {
        const updatedList = this.myCartList.value.map((item) => {
            if (item.id === product.id) {
                item.quantity = quantity;
            }
            return item;
        });

        this.myCartList.next(updatedList);
    }

    removeFromCart(product: Product) {
        const updatedList = this.myCartList.value.filter(
            (item) => item.id !== product.id
        );

        this.myCartList.next(updatedList);
    }
}
