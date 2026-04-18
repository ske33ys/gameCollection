import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Games } from '../../services/games';
import { Game } from '../../interfaces/game';
import { SearchBar } from '../../components/search-bar/search-bar';
import { GamesList } from '../../components/games-list/games-list';

@Component({
  selector: 'app-game-search',
  imports: [Header, SearchBar, GamesList],
  templateUrl: './game-search.html',
  styleUrl: './game-search.css',
})
export class GameSearch {
  allGames = inject(Games);
  searchedGames: Game[] = [];

  searchGame(gameName: string) {
    this.searchedGames = [];
    
    if(gameName == '') return;

    this.allGames.getData().forEach(game => {
      if(game.title.toLowerCase().includes(gameName.toLowerCase())) {
        this.searchedGames.push(game);
      }
    });
  }
}
