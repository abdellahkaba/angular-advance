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

  count: number = 0
  recherche = ''
  messageFromChild(){
    this.count++
  }

  

}
