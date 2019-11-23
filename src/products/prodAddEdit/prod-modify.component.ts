import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductModel } from 'src/models/productModel';
import { ProductDataService } from 'src/services/product-service';

@Component({
    selector: 'modify-prod',
    templateUrl: './prod-modify.component.html',
    styleUrls: ['./prod-modify.component.css']
})
export class ProductModifyComponent implements OnInit {

  
    ngOnInit(): void {
      //  alert("modify " + this.route.snapshot.paramMap.get('id')); use subscribe instead

        this.route.paramMap.subscribe(params => {
            var id = params.get("id");
            alert("modify: " + id);
           this.getProduct(+id);
        })
    }

    pageTitle = 'Product Edit';
  errorMessage: string;

  product: IProductModel;

  constructor(private route: ActivatedRoute,private productService: ProductDataService,
              ) { }

  getProduct(id: number): void {
    this.onProductRetrieved(this.productService.getData().find(i=> i.id===id)) ;
  }

  onProductRetrieved(product: IProductModel): void {
    this.product = product;

    if (!this.product) {
      this.pageTitle = 'No product found';
    } else {
      if (this.product.id === 0) {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }
    }
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.product.productName} was deleted`);
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        // this.productService.deleteProduct(this.product.id).subscribe({
        //   next: () => this.onSaveComplete(`${this.product.productName} was deleted`),
        //   error: err => this.errorMessage = err
        // });
      }
    }
  }

  saveProduct(): void {
    if (true === true) {
      if (this.product.id === 0) {
        // this.productService.createProduct(this.product).subscribe({
        //   next: () => this.onSaveComplete(`The new ${this.product.productName} was saved`),
        //   error: err => this.errorMessage = err
        //});
      } else {
        // this.productService.updateProduct(this.product).subscribe({
        //   next: () => this.onSaveComplete(`The updated ${this.product.productName} was saved`),
        //   error: err => this.errorMessage = err
        // });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      //this.messageService.addMessage(message);
    }

    // Navigate back to the product list
  }


}