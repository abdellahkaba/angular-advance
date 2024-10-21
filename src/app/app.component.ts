import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {

  category = [
    {
      id: 1,
      name: 'Habit',
      description: 'Description des habits'
    },
    {
      id: 2,
      name: 'Montres',
      description: 'Description des montres'
    },
    {
      id: 3,
      name: 'Chaussures',
      description: 'Description des chaussures'
    }
  ]
}
