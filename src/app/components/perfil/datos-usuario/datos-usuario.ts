import { Component } from '@angular/core';
import { usuariosMock } from '../../../services/mock/usuariosMock';
@Component({
  imports: [],
  selector: 'app-datos-usuario',
  styleUrl: './datos-usuario.css',
  templateUrl: './datos-usuario.html',
})
export class DatosUsuario {
   usuario = usuariosMock[0];
}
