import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { sign } from 'crypto';

@Component({
  selector: 'search-filter',
  imports: [FormsModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {
  minPlayers = signal<number>(0);
  maxPlayers = signal<number>(99);
  boardGames = signal<boolean>(true);
  cardGames = signal<boolean>(true);

  expandAnimation = false;

  filters = output<{
    minPlayers: number,
    maxPlayers: number,
    boardGames: boolean,
    cardGames: boolean
  }>();

  emitFilters = () => this.filters.emit({
    minPlayers: this.minPlayers(),
    maxPlayers: this.maxPlayers(),
    boardGames: this.boardGames(),
    cardGames: this.cardGames()
  });

  display = 'none';
  buttonText = signal('Show filters');
  changeDisplay() {
    if(this.display == 'none') {
      this.display = 'block';
      this.buttonText.set('Hide filters');
    } else {
      this.display = 'none';
      this.buttonText.set('Show filters');
    }
    
  }
}
