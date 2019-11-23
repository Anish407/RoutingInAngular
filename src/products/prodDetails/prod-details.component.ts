import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/services/product-service';
import { IProductModel } from 'src/models/productModel';

@Component({
    selector: 'prod-details',
    templateUrl: './prod-details.component.html',
    styleUrls: ['./prod-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    ngOnInit(): void {
        // alert("details: " +  this.route.snapshot.paramMap.get('id')); this will be called wen the component is initaliazed
        // but the route params can changes after a component has been initiazed. So we need to subscribe to the params, 
        //that is the better approach
        this.pageTitle = this.route.snapshot.data["heading"];
        this.route.paramMap.subscribe(params => {
            this.getProduct(+params.get("id"));
        })

    }

    constructor(private productService: ProductDataService, private route: ActivatedRoute) {

    }

    pageTitle: string = '';
    product: IProductModel;
    errorMessage: string;

    getProduct(id: number) {
        this.onProductRetrieved(this.productService.getData().find(i => i.id === id));
    }

    onProductRetrieved(product: IProductModel): void {
        this.product = product;

        if (this.product) {
            this.pageTitle = `${this.pageTitle}: ${this.product.productName}`;
        } else {
            this.pageTitle = 'No product found';
        }
    }
}