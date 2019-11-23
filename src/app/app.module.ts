import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { ProductsComponent } from 'src/products/products.component';
import { ProductDataService } from 'src/services/product-service';
import { ProductModule } from 'src/products/productsModule';
import { UserModule } from 'src/login/user.module';
//import { CanActivateRouteGaurd } from 'src/gaurds/canActivateGaurd';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DetailsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    UserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
