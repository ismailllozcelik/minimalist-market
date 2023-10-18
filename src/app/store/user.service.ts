import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    private user = new BehaviorSubject<User>(null);
    user$ = this.user.asObservable();

    constructor() {}

    login(user: User) {
        this.user.next(user);
    }

    logout() {
        this.user.next(null);
    }

    get userData() {
        return this.user.value;
    }
}
