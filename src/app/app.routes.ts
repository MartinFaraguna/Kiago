import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'auth',
    component: Auth
  },
  {
    path: '**',
    redirectTo: 'auth' 
  }
];
