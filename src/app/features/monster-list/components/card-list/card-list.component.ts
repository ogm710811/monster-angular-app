import {Component, OnInit} from '@angular/core';
import {combineLatest, map, Observable, startWith} from "rxjs";
import {Monster} from "../../../../core/models/Monster";
import {MonsterListService} from "../../services/monster-list/monster-list.service";
import {AsyncPipe} from "@angular/common";
import {CardComponent} from "../card/card.component";
import {SearchBoxComponent} from "../../../../shared/component/search-box/search-box.component";
import {SearchService} from "../../../../shared/services/search.service";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent,
    SearchBoxComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  monsters$!: Observable<Monster[]>;
  filteredMonsters$!: Observable<Monster[]>;
  searchTerm$!: Observable<string>;

  constructor(
    private monsterListService: MonsterListService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.monsters$ = this.monsterListService.getMonsterList()
    this.searchTerm$ = this.searchService.searchTerm$.pipe(startWith(''));


    this.filteredMonsters$ = combineLatest([
      this.monsters$,
      this.searchTerm$
    ]).pipe(
      map(([monsters, searchTerm]) => {
        return monsters.filter(monster =>
          monster.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }
}
