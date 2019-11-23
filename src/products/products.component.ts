import { Component, OnInit } from '@angular/core';
import { IProductModel } from 'src/models/productModel';
import { ProductDataService } from 'src/services/product-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProductModel[] = [];
  products: IProductModel[] = [];

  constructor(private productService: ProductDataService) { }

  ngOnInit(): void {
    this.products= this.productService.getData();
    this.filteredProducts=this.products;
    
  }

  performFilter(filterBy: string): IProductModel[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProductModel) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}
