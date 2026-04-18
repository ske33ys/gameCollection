import { Component, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  userInput = output<string>();
  input = signal('');

  sendInput() {
    this.userInput.emit(this.input());
  }
}
