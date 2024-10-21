import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() search = 'initial value';
  @Input() recherche = 'initial'
  @Output() searchButtonClicked = new EventEmitter()
  @Output() searchChange = new EventEmitter<string>()
  @Output() rechercheButtonClicked = new EventEmitter()
  @Output() rechercheChang = new EventEmitter<string>()

  searchClick(){
    this.searchButtonClicked.emit();
  }

  updateSearch(message: string){
    this.searchChange.emit(message)
  }

  rechercheClick(){
    this.rechercheButtonClicked.emit();
  }

  updateRecherche(message: string){
    this.rechercheChang.emit(message)
  }
}
