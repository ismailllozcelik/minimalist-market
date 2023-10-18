import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'totalPrice',
})
export class TotalPricePipe implements PipeTransform {
    transform(items: any[]): number {
        if (!items || !Array.isArray(items)) {
            return 0;
        }

        return items
            .reduce(
                (total, item) => total + (item.price * item.quantity || 0),
                0
            )
            .toFixed(2);
    }
}
