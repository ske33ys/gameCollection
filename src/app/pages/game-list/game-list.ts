import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { GamesList } from '../../components/games-list/games-list';
import { Games } from '../../services/games';

@Component({
  selector: 'app-game-list',
  imports: [Header, GamesList],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {
  gamesList = inject(Games);

  ngOnInit() {
    this.gamesList.loadAllData();
  }
}
