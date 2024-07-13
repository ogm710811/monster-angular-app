import {Component, Input, OnInit} from '@angular/core';
import {Monster} from "../../../../core/models/Monster";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) monster!: Monster;
}
