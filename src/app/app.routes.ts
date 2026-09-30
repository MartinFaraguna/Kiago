import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { AuthSignUp } from './pages/auth-sign-up/auth-sign-up';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'log-in',
    component: Auth
  },
  {
    path: 'sign-up',
    component: AuthSignUp
  },
  {
    path: '**',
    redirectTo: 'log-in' 
  }
];
