import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;

  clientsCount: number = 0;
  techniciensCount: number = 0;
  missionsCount: number = 0;
  isLoading: boolean = false;
  errorMessage: string | null = null; // Pour afficher les erreurs dans le template

  chartOptionsBar!: Highcharts.Options;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAllCounts();
  }

  fetchAllCounts(): void {
    this.isLoading = true;
    this.errorMessage = null;

    // Définir les requêtes HTTP
    const clients$ = this.http.get<any>('http://localhost:8000/api/clients');
    const techniciens$ = this.http.get<any>('http://localhost:8000/api/techniciens');
    const reclamations$ = this.http.get<any>('http://localhost:8000/api/reclamations');

    forkJoin([clients$, techniciens$, reclamations$]).subscribe({
      next: ([clients, techniciens, reclamations]) => {
        // Débogage : Vérifier les réponses
        console.log('Clients:', clients);
        console.log('Techniciens:', techniciens);
        console.log('Reclamations:', reclamations);

        // Vérifier que les réponses sont des tableaux
        this.clientsCount = Array.isArray(clients) ? clients.length : 0;
        this.techniciensCount = Array.isArray(techniciens) ? techniciens.length : 0;
        this.missionsCount = Array.isArray(reclamations) ? reclamations.length : 0;

        // Initialiser le graphique
        this.initCharts();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données:', err);
        this.errorMessage = 'Erreur lors du chargement des données. Veuillez réessayer.';
        this.clientsCount = 0;
        this.techniciensCount = 0;
        this.missionsCount = 0;
        this.initCharts();
        this.isLoading = false;
      }
    });
  }

  initCharts(): void {
    console.log('Initialisation du graphique avec:', {
      clientsCount: this.clientsCount,
      techniciensCount: this.techniciensCount,
      missionsCount: this.missionsCount
    });

    this.chartOptionsBar = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Répartition des entités'
      },
      xAxis: {
        categories: ['Clients', 'Techniciens', 'Réclamations'],
        title: { text: null }
      },
      yAxis: {
        min: 0,
        title: { text: 'Nombre total', align: 'high' }
      },
      series: [{
        type: 'bar',
        name: 'Total',
        data: [this.clientsCount, this.techniciensCount, this.missionsCount],
        colorByPoint: true
      }],
      credits: {
        enabled: false
      }
    };
  }
}
