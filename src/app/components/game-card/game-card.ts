import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'game-card',
  imports: [],
  templateUrl: './game-card.html',
  styleUrl: './game-card.css',
})
export class GameCard {
  title = input();
  category = input();
  minPlayers = input();
  maxPlayers = input();
  elements = input();
}
