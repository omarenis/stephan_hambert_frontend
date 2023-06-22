import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
    animations: [
    trigger('position', [
      state('left', style({
        transform: 'translate({{ initialState }}%)',
      }), {params: {initialState: 0}}),
      state('right', style({
        transform: 'translate({{ initialState }}%)',
      }), {params: {initialState: 0}}),
      transition('* <=> *', animate('1s ease-in'))
    ])
  ]
})
export class CardComponent implements OnInit{
  @Input() position !: string;
  @Input() initialValue !: number;

  ngOnInit(): void {
  }

}
