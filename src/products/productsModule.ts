import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './prodDetails/prod-details.component';
import { ProductModifyComponent } from './prodAddEdit/prod-modify.component';
import { CanActivateRouteGaurd } from 'src/gaurds/canActivateGaurd';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailsComponent,
        ProductModifyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFontAwesomeModule,
        RouterModule.forChild([
          
            { path: 'products', component: ProductsComponent, pathMatch: 'full',  canActivate: [CanActivateRouteGaurd] },
            {
                path: 'productDetails/:id', component: ProductDetailsComponent, pathMatch: 'full',
                data: { heading: 'Product Details To be displayed' }
            },
            { path: 'productDetails/:id/Edit', component: ProductModifyComponent, pathMatch: 'full' },
        ])
    ],
    providers: [CanActivateRouteGaurd],
    exports: [ProductsComponent]
})
export class ProductModule { }