import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GameList } from './pages/game-list/game-list';
import { GameSearch } from './pages/game-search/game-search';
import { AddGame } from './pages/add-game/add-game';
import path from 'path';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page'
  },
  {
    path: 'gameList',
    component: GameList,
    title: 'Game List'
  },
  {
    path: 'gameSearch',
    component: GameSearch,
    title: 'Search for Games'
  },
  {
    path: 'gameForm',
    component: AddGame,
    title: 'Add Game',
  }, 
  {
    path: 'gameForm/update/:id',
    component: AddGame,
    title: 'Edit Game'
  }
];
