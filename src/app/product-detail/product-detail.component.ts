import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() search = 'initial'
  @Output() messageForParent = new EventEmitter()
  @Output() searchChange = new EventEmitter<string>();


  updateChange(message: string) {
      this.searchChange.emit(message)
  }

  sendMessage() {
    this.messageForParent.emit()
  }
}
