import {Component, Input} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @Input({required: true}) placeholder!: string;
  constructor(private searchService: SearchService) {}

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    // console.log(searchTerm)
    this.searchService.setSearchTerm(searchTerm)
  }
}
