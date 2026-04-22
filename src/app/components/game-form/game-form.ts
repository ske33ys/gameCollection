import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameCard } from '../game-card/game-card';
import { min } from 'rxjs';
import { Games } from '../../services/games';
import { Game } from '../../interfaces/game';
import { PopUpMessage } from '../pop-up-message/pop-up-message';
import { gameTypeEn } from '../../enums/game-type';

@Component({
  selector: 'game-form',
  imports: [ReactiveFormsModule, GameCard],
  templateUrl: './game-form.html',
  styleUrl: './game-form.css',
})

export class GameForm {
  gameTypeEn = gameTypeEn;

  gameForm = new FormGroup({
    gameName: new FormControl('', Validators.required),
    minPlayers: new FormControl(0, Validators.required),
    maxPlayers: new FormControl(0, Validators.required),
    elements: new FormControl(0, Validators.required),
    gameType: new FormControl(gameTypeEn.cardGame, Validators.required)
  });

  gameList = inject(Games);

  onSubmit() {
    if(this.gameForm.valid){
      let title = this.gameForm.value.gameName;
      let minPlayers = this.gameForm.value.minPlayers;
      let maxPlayers = this.gameForm.value.maxPlayers;
      let elements = this.gameForm.value.elements;
      let gameType = this.gameForm.value.gameType;

      if(title == undefined || minPlayers == undefined || maxPlayers == undefined || elements == undefined || gameType == undefined) 
        return;
      
      if(title.length < 2 || maxPlayers < minPlayers || elements <= 0 || maxPlayers <= 0) 
        return;

      if(!isInt(minPlayers) || !isInt(maxPlayers) || !isInt(elements)) 
        return;

      let newGameObject: Game = {
        id: 0,
        title: title,
        category: gameType,
        elements: elements,
        minPlayers: minPlayers,
        maxPlayers: maxPlayers
      }

      this.gameList.addGame(newGameObject);
      this.gameForm.reset();
    }
  }
}

function isInt(num: number) {
  return num % 1 == 0;
}