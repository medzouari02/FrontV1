import { Component, OnInit } from '@angular/core';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/service/mission.service';
@Component({
  selector: 'app-monmission',
  templateUrl: './monmission.component.html',
  styleUrls: ['./monmission.component.css']
})
export class MonmissionComponent  implements OnInit {
  missions: Mission[] = [];

  constructor(
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    const technicienId = localStorage.getItem('id');
    if (!technicienId) {
      console.error('Technicien ID not found in localStorage');
      this.missions = [];
      return;
    }

    const technicienIdNumber = Number(technicienId);
    if (isNaN(technicienIdNumber)) {
      console.error('Invalid technicien_id format:', technicienId);
      this.missions = [];
      return;
    }

    this.missionService.getMissions().subscribe({
      next: (data: Mission[]) => {
        this.missions = data.filter(mission =>
          mission.technicien_id === technicienIdNumber
        );
      },
      error: (err) => {
        console.error('Erreur lors du chargement des missions :', err);
        this.missions = [];
      }
    });
  }
  terminerReclamation(id: number): void {
    if (confirm('Es-tu sûr de vouloir terminer cette réclamation ?')) {
      this.missionService.terminerReclamation(id).subscribe({
        next: (res) => {
          console.log('Réclamation terminée avec succès :', res);
          this.fetchMissions(); // Recharge les missions pour mettre à jour l'état
        },
        error: (err) => {
          console.error('Erreur lors de la terminaison de la réclamation :', err);
          alert('Une erreur est survenue.');
        }
      });
    }
  }

}
