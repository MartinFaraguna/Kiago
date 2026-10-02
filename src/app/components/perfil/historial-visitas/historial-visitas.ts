import { Component } from '@angular/core';
import {
  FullCalendarModule,
  CalendarOptions
} from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/angular/daygrid';
import themePlugin from '@fullcalendar/angular/themes/monarch';
import { visitasMock } from '../../../services/mock/visitas';

@Component({
  selector: 'app-historial-visitas',
  imports: [FullCalendarModule],
  templateUrl: './historial-visitas.html',
  styleUrl: './historial-visitas.css'
})
export class HistorialVisitas {

  visitas = visitasMock;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    plugins: [
      dayGridPlugin, themePlugin
    ],

    locale: 'es',

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },

    events: this.visitas.map(visita => ({
      title: visita.lugar,
      date: visita.fecha
    }))
  };

}