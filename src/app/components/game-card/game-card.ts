import { Component, Input, input, signal } from '@angular/core';
import { gameTypeEn } from '../../enums/game-type';

@Component({
  selector: 'game-card',
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  title = input<string>('');
  category = input<gameTypeEn>(gameTypeEn.cardGame);
  minPlayers = input<number>(0);
  maxPlayers = input<number>(0);
  elements = input<number>(0);

  display = 'none';
}
