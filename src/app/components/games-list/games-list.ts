import { Component, inject } from '@angular/core';
import { Games } from '../../services/games';
import { GameCard } from '../game-card/game-card';

@Component({
  selector: 'app-games-list',
  imports: [GameCard],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css',
})

export class GamesList {
  gameList = inject(Games);
}
