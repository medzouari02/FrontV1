import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/service/mission.service';
import { TechnicianService } from 'src/app/service/technician.service';



@Component({
  selector: 'app-monprofile',
  templateUrl: './monprofile.component.html',
  styleUrls: ['./monprofile.component.css']
})
export class MonprofileComponent implements OnInit{


technicien: User | null = null;
  missions: Mission[] = [];
  loading = true;
  missionsLoading = true;
  errorMessage = '';
  missionsError = '';

  constructor(
    private technicienService: TechnicianService,
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    this.fetchTechnicien();
    this.fetchMissions();
  }

  fetchTechnicien(): void {
    const id = localStorage.getItem('id');
    if (!id) {
      this.errorMessage = 'ID du technicien introuvable dans le localStorage.';
      this.loading = false;
      return;
    }

    const technicienId = Number(id);
    if (isNaN(technicienId)) {
      this.errorMessage = 'Format d\'ID invalide.';
      this.loading = false;
      return;
    }

    this.technicienService.getTechnicienById(technicienId).subscribe({
      next: (data) => {
        this.technicien = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement du profil du technicien.';
        console.error(err);
        this.loading = false;
      }
    });
  }

  fetchMissions(): void {
    const id = localStorage.getItem('id');
    if (!id) {
      this.missionsError = 'ID technicien non trouvé';
      this.missionsLoading = false;
      return;
    }

    const technicienId = Number(id);
    if (isNaN(technicienId)) {
      this.missionsError = 'Format ID technicien invalide';
      this.missionsLoading = false;
      return;
    }

    this.missionService.getMissions().subscribe({
      next: (missions) => {
        this.missions = missions.filter(m => m.technicien_id === technicienId);
        this.missionsLoading = false;
      },
      error: (err) => {
        this.missionsError = 'Erreur lors du chargement des missions.';
        console.error(err);
        this.missionsLoading = false;
      }
    });
  }
}

