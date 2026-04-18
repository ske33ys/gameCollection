import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root',
})

export class Games {
  private data: Game[] = [
    {
      id: 0,
      title: 'Catan',
      category: 'Board Game',
      elements: 89,
      minPlayers: 2,
      maxPlayers: 4,
    },
    {
      id: 1,
      title: 'Uno',
      category: 'Card Game',
      elements: 104,
      minPlayers: 2,
      maxPlayers: 10,
    }
  ];

  getData() {
    return [...this.data];
  }

  addGame(newGame: Game) {
    newGame.id = this.data.length;
    this.data.push(newGame);
  }
}
