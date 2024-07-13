import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Monster} from "../../../../core/models/Monster";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MonsterListService {

  constructor(private http: HttpClient) { }

  getMonsterList(): Observable<Monster[]> {
    return this.http.get<Monster[]>('https://jsonplaceholder.typicode.com/users')
  }
}
