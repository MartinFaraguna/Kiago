import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { Perfil } from './pages/perfil/perfil';

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
    path: 'perfil',
    component: Perfil
  },
  {
    path: '**',
    redirectTo: 'auth' 
  }
];
