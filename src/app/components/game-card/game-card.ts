import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'game-card',
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  title = input<string>('');
  category = input<string>('');
  minPlayers = input<number>(0);
  maxPlayers = input<number>(0);
  elements = input<number>(0);
}
