import { Component, inject } from '@angular/core';
import { GameForm } from '../../components/game-form/game-form';
import { Header } from '../../components/header/header';
import { SearchBar } from "../../components/search-bar/search-bar";
import { Games } from '../../services/games';
import { Router } from '@angular/router';

@Component({
  selector: 'add-game',
  imports: [GameForm, Header, SearchBar],
  templateUrl: './add-game.html',
  styleUrl: './add-game.css',
})
export class AddGame {
  private router = inject(Router);
  games = inject(Games);
  gamesList = this.games.getData();
  

  getGameName(gameName: string) {
    let result = this.gamesList.filter(game => game.title.toLowerCase() == gameName.toLowerCase());

    if(result.length != 1)
      return;

    let gameId = result[0].id;
    
    this.router.navigate(['gameForm/update/'+gameId]);
  }
}
