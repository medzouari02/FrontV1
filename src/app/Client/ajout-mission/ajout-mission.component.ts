import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from 'src/app/service/mission.service';

@Component({
  selector: 'app-ajout-mission',
  templateUrl: './ajout-mission.component.html',
  styleUrls: ['./ajout-mission.component.css']
})
export class AjoutMissionComponent implements OnInit {
  service: string = '';
  errorMessage: string | null = null;


  nom_client: string = '';
  adress: string = '';
  adress_email: string = '';
  telephone: string = '';
  description: string = '';
  type: string = '';

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService,
    private router: Router

  ) {}

  ngOnInit(): void {
    // Récupérer le service depuis l'URL
    this.route.queryParams.subscribe(params => {
      this.service = params['service'] || '';
      this.type = this.service;
    });

    // Préremplir les données à partir du localStorage
    this.nom_client = localStorage.getItem('name') || '';
    this.telephone = localStorage.getItem('telephone') || '';
    this.adress_email = localStorage.getItem('email') || '';
  }

  onSubmit(): void {
    const newReclamation = {
      nom_client: this.nom_client,
      adress: this.adress,
      adress_email: this.adress_email,
      telephone: this.telephone,
      description: this.description,
      type: this.type
    };

    this.missionService.createReclamation(newReclamation).subscribe({
      next: () => {
        alert('Demande envoyée avec succès !');
        // Optionnel : réinitialiser les champs
        this.description = '';
        this.adress = '';
        setTimeout(() => {
          this.router.navigate(['/client/profil']).catch(err => {
            this.errorMessage = 'Erreur de navigation : ' + err.message;
            console.error('Navigation error:', err);
          });
        }, 1000);
      },
      error: (err) => {
        console.error('Erreur lors de l\'envoi :', err);
        alert('Erreur lors de l\'envoi de la demande.');
      }
    });
  }
}
