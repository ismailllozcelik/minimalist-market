import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { CartStoreService } from '../store/cart-store.service';
import { UserService } from '../store/user.service';
import { User } from '../shared/models/user.model';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
    items!: MenuItem[];
    showCart = false;
    private cartService = inject(CartStoreService);
    basketCount = 0;
    private userService = inject(UserService);
    userData: User;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.cartService.currentCart.subscribe((products) => {
            this.basketCount = products
                .map((item) => item.quantity)
                .reduce((prev, next) => prev + next, 0);
        });

        this.userService.user$.subscribe((user) => {
            this.userData = user;
        });
    }
}
