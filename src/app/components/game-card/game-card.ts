import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'game-card',
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  @Input() title!: string;
  @Input() category!: string;
  @Input() minPlayers!: number;
  @Input() maxPlayers!: number;
  @Input() elements!: number;
}
