import { Component } from "@angular/core";
import { AuthService } from 'src/services/auth.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    constructor(private authsvc: AuthService) {

    }

    isAuth(): void {
        this.authsvc.reverse();
    }
}