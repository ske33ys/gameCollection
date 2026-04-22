import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Games } from '../../services/games';
import { Game } from '../../interfaces/game';
import { SearchBar } from '../../components/search-bar/search-bar';
import { GamesList } from '../../components/games-list/games-list';
import { SearchFilter } from '../../components/search-filter/search-filter';
import { gameTypeEn } from '../../enums/game-type';

@Component({
  selector: 'app-game-search',
  imports: [Header, SearchBar, GamesList, SearchFilter],
  templateUrl: './game-search.html',
  styleUrl: './game-search.css',
})
export class GameSearch {
  allGames = inject(Games);
  searchedGames: Game[] = [];
  userInput = '';

  filters = {
    minPlayers: 0,
    maxPlayers: 99,
    boardGames: true,
    cardGames: true
  }

  updateFilters(newFilters: any) {
    this.filters = newFilters;
    this.searchGame(this.userInput);
  }

  checkFilters(game: Game) : boolean {
    if(game.minPlayers < this.filters.minPlayers || 
       game.maxPlayers > this.filters.maxPlayers) 
      return false;

    if((game.category == gameTypeEn.boardGame && !this.filters.boardGames))
      return false
    if(game.category == gameTypeEn.cardGame && !this.filters.cardGames) 
      return false;
    
    return true;
  }

  searchGame(gameName: string) {
    this.userInput = gameName;
    this.searchedGames = [];

    this.allGames.getData().forEach(game => {
      if(game.title.toLowerCase().includes(gameName.toLowerCase())) {
        if(this.checkFilters(game)) this.searchedGames.push(game);
      }
    });
  }

  ngOnInit() {
    this.searchGame('');
  }
}
