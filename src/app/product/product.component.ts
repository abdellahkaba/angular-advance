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

  cartItem: any[] = []
  count: number = 0
  count2: number = 1
  search= ''
  recherche=''

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

  increaseCount(){
    this.count ++
  }
  rechercheIncrease(){
    this.count2++
  }

  onProductAddedToCart(product: any){
      console.log('product added to cart: ' + product.name);
      this.cartItem.push(product)
  }
}
