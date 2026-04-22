import { gameTypeEn } from "../enums/game-type";

export interface Game {
  id: number,
  title: string,
  category: gameTypeEn,
  elements: number,
  minPlayers: number,
  maxPlayers: number,
}
