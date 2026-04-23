import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';
import { gameTypeEn } from '../enums/game-type';

@Injectable({
  providedIn: 'root',
})

export class Games {
  private data: Game[] = [
  { id: 0, title: 'Catan', category: gameTypeEn.boardGame, elements: 89, minPlayers: 2, maxPlayers: 4 },
  { id: 1, title: 'Carcassonne', category: gameTypeEn.boardGame, elements: 72, minPlayers: 2, maxPlayers: 5 },
  { id: 2, title: 'Ticket to Ride', category: gameTypeEn.boardGame, elements: 240, minPlayers: 2, maxPlayers: 5 },
  { id: 3, title: 'Pandemic', category: gameTypeEn.boardGame, elements: 110, minPlayers: 2, maxPlayers: 4 },
  { id: 4, title: 'Azul', category: gameTypeEn.boardGame, elements: 100, minPlayers: 2, maxPlayers: 4 },
  { id: 5, title: '7 Wonders', category: gameTypeEn.boardGame, elements: 150, minPlayers: 3, maxPlayers: 7 },
  { id: 6, title: 'Terraforming Mars', category: gameTypeEn.boardGame, elements: 200, minPlayers: 1, maxPlayers: 5 },
  { id: 7, title: 'Scythe', category: gameTypeEn.boardGame, elements: 250, minPlayers: 1, maxPlayers: 5 },
  { id: 8, title: 'Dominion', category: gameTypeEn.boardGame, elements: 500, minPlayers: 2, maxPlayers: 4 },
  { id: 9, title: 'Wingspan', category: gameTypeEn.boardGame, elements: 170, minPlayers: 1, maxPlayers: 5 },

  { id: 10, title: 'Uno', category: gameTypeEn.cardGame, elements: 108, minPlayers: 2, maxPlayers: 10 },
  { id: 11, title: 'Exploding Kittens', category: gameTypeEn.cardGame, elements: 56, minPlayers: 2, maxPlayers: 5 },
  { id: 12, title: 'Poker', category: gameTypeEn.cardGame, elements: 52, minPlayers: 2, maxPlayers: 10 },
  { id: 13, title: 'Blackjack', category: gameTypeEn.cardGame, elements: 52, minPlayers: 1, maxPlayers: 7 },
  { id: 14, title: 'Dobble', category: gameTypeEn.cardGame, elements: 55, minPlayers: 2, maxPlayers: 8 },
  { id: 15, title: 'Phase 10', category: gameTypeEn.cardGame, elements: 108, minPlayers: 2, maxPlayers: 6 },
  { id: 16, title: 'Skip-Bo', category: gameTypeEn.cardGame, elements: 162, minPlayers: 2, maxPlayers: 6 },
  { id: 17, title: 'Magic: The Gathering', category: gameTypeEn.cardGame, elements: 10000, minPlayers: 2, maxPlayers: 2 },
  { id: 18, title: 'Hearthstone (physical proxy decks)', category: gameTypeEn.cardGame, elements: 30, minPlayers: 2, maxPlayers: 2 },
  { id: 19, title: 'The Mind', category: gameTypeEn.cardGame, elements: 100, minPlayers: 2, maxPlayers: 4 },
];

  getData() {
    return [...this.data];
  }

  addGame(newGame: Game) {
    newGame.id = this.data.length;
    this.data.push(newGame);
  }

  getGameById(id: number) {
    return this.data.filter(game => game.id == id);
  }

  updateGameById(updatedGame: Game) {
    let game = this.data.filter(game => game.id == updatedGame.id)[0];
    this.data.splice(game.id, 1, updatedGame);
  }
}
