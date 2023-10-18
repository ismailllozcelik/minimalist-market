import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/store/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    user: User = {
        name: 'Ahmet Akkuyu',
        email: 'ahmet.akkuyu@gmail.com',
        password: '123456',
    };

    userService = inject(UserService);
    router = inject(Router);

    constructor(public layoutService: LayoutService) {}

    signIn() {
        if (!this.user.email || !this.user.password) {
            throw new Error('Email or password is empty!');
        }
        this.userService.login(this.user);
        this.router.navigateByUrl('/products');
    }
}
