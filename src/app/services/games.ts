import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root',
})

export class Games {
  private data: Game[] = [
  { id: 0, title: 'Catan', category: 'Board Game', elements: 89, minPlayers: 2, maxPlayers: 4 },
  { id: 1, title: 'Carcassonne', category: 'Board Game', elements: 72, minPlayers: 2, maxPlayers: 5 },
  { id: 2, title: 'Ticket to Ride', category: 'Board Game', elements: 240, minPlayers: 2, maxPlayers: 5 },
  { id: 3, title: 'Pandemic', category: 'Board Game', elements: 110, minPlayers: 2, maxPlayers: 4 },
  { id: 4, title: 'Azul', category: 'Board Game', elements: 100, minPlayers: 2, maxPlayers: 4 },
  { id: 5, title: '7 Wonders', category: 'Board Game', elements: 150, minPlayers: 3, maxPlayers: 7 },
  { id: 6, title: 'Terraforming Mars', category: 'Board Game', elements: 200, minPlayers: 1, maxPlayers: 5 },
  { id: 7, title: 'Scythe', category: 'Board Game', elements: 250, minPlayers: 1, maxPlayers: 5 },
  { id: 8, title: 'Dominion', category: 'Board Game', elements: 500, minPlayers: 2, maxPlayers: 4 },
  { id: 9, title: 'Wingspan', category: 'Board Game', elements: 170, minPlayers: 1, maxPlayers: 5 },

  { id: 10, title: 'Uno', category: 'Card Game', elements: 108, minPlayers: 2, maxPlayers: 10 },
  { id: 11, title: 'Exploding Kittens', category: 'Card Game', elements: 56, minPlayers: 2, maxPlayers: 5 },
  { id: 12, title: 'Poker', category: 'Card Game', elements: 52, minPlayers: 2, maxPlayers: 10 },
  { id: 13, title: 'Blackjack', category: 'Card Game', elements: 52, minPlayers: 1, maxPlayers: 7 },
  { id: 14, title: 'Dobble', category: 'Card Game', elements: 55, minPlayers: 2, maxPlayers: 8 },
  { id: 15, title: 'Phase 10', category: 'Card Game', elements: 108, minPlayers: 2, maxPlayers: 6 },
  { id: 16, title: 'Skip-Bo', category: 'Card Game', elements: 162, minPlayers: 2, maxPlayers: 6 },
  { id: 17, title: 'Magic: The Gathering', category: 'Card Game', elements: 10000, minPlayers: 2, maxPlayers: 2 },
  { id: 18, title: 'Hearthstone (physical proxy decks)', category: 'Card Game', elements: 30, minPlayers: 2, maxPlayers: 2 },
  { id: 19, title: 'The Mind', category: 'Card Game', elements: 100, minPlayers: 2, maxPlayers: 4 },
];

  getData() {
    return [...this.data];
  }

  addGame(newGame: Game) {
    newGame.id = this.data.length;
    this.data.push(newGame);
  }
}
