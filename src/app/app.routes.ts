import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GameList } from './pages/game-list/game-list';
import { GameSearch } from './pages/game-search/game-search';

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
  }
];
