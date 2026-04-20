import { Component } from '@angular/core';
import { GameForm } from '../../components/game-form/game-form';
import { Header } from '../../components/header/header';

@Component({
  selector: 'add-game',
  imports: [GameForm, Header],
  templateUrl: './add-game.html',
  styleUrl: './add-game.css',
})
export class AddGame {

}
