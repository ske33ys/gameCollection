import { Component, inject, input } from '@angular/core';
import { Games } from '../../services/games';
import { GameCard } from '../game-card/game-card';
import { Game } from '../../interfaces/game';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'games-list',
  imports: [GameCard],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css',
})

export class GamesList {
  gameList = input.required<Game[]>();
}
