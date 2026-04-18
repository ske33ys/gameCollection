import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { GamesList } from '../../components/games-list/games-list';

@Component({
  selector: 'app-game-list',
  imports: [Header, GamesList],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css',
})
export class GameList {

}
