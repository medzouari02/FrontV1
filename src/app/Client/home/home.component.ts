import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [
    { image: 'assets/images/pc-fixe.jpg', alt: 'Maintenance PC fixes', title: 'Ordinateurs fixes' },
    { image: 'assets/images/pc-portable.jpg', alt: 'Réparation portables', title: 'Ordinateurs portables' },
    { image: 'assets/images/serveurs.jpg', alt: 'Maintenance serveurs', title: 'Serveurs & NAS' },
    { image: 'assets/images/peripheriques.jpg', alt: 'Réparation périphériques', title: 'Périphériques' },
    { image: 'assets/images/reseau.jpg', alt: 'Installation réseau', title: 'Équipements réseau' },
    { image: 'assets/images/imprimantes.jpg', alt: 'Maintenance imprimantes', title: 'Imprimantes & scanners' }
  ];


}
