import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { ProductModule } from 'src/products/productsModule';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ProductModule,
        AngularFontAwesomeModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
        ])
    ],
    providers: [],
    exports: [LoginComponent]
})

export class UserModule {
    constructor() {

    }
}