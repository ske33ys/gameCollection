import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GameList } from './pages/game-list/game-list';

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
  }
];
