import { Component } from '@angular/core';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailComponent, SearchBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products = [
    {
      id: 1,
      name: 'Iphone XR',
      price: 600
    },
    {
      id: 2,
      name: 'Samsung Galaxy',
      price: 500
    },
    {
      id: 3,
      name: 'Nokia',
      price: 200
    },
  ]

  onProductAddToCart(product: any){
    console.log('Product addet to cart ' + product.name)
  }
  
}
