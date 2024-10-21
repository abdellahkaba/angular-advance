import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true, 
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() product?: any;
  @Output() addToCart = new EventEmitter<any>();

  onAddToCart(){
    this.addToCart.emit(this.product)
  }
}
