import { RouterModule, Routes } from "@angular/router";
import { CardListComponent } from "./components/card-list/card-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterListRoutingModule { }
