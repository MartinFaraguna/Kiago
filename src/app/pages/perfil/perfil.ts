import { Component } from '@angular/core';
import { DatosUsuario } from '../../components/perfil/datos-usuario/datos-usuario';
import { HistorialVisitas } from '../../components/perfil/historial-visitas/historial-visitas';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [DatosUsuario,HistorialVisitas,Header,Footer],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {}
