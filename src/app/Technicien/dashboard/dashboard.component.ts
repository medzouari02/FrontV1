import { Component } from '@angular/core';

@Component({
  selector: 'app-technicien-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DaashboardComponent {
  pendingMissions = 5;

  chartDataLine = [{ data: [10, 20, 30, 40], label: 'Tâches terminées' }];
  chartLabelsLine = ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'];
  chartOptionsLine = { responsive: true };

  chartDataPie = [{ data: [40, 30, 30] }];
  chartLabelsPie = ['Urgent', 'Normal', 'Basse priorité'];
  chartOptionsPie = { responsive: true };

  chartDataDoughnut = [{ data: [60, 25, 15] }];
  chartLabelsDoughnut = ['Terminées', 'En cours', 'Non démarrées'];
  chartOptionsDoughnut = { responsive: true };

  chartDataBar = [{ data: [5, 15, 10, 20], label: 'Interventions' }];
  chartLabelsBar = ['Jan', 'Fév', 'Mar', 'Avr'];
  chartOptionsBar = { responsive: true };
}
