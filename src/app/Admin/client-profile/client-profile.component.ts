import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ClientService } from 'src/app/service/client-list.service';
import { MissionService } from 'src/app/service/mission.service';
import { Mission } from 'src/app/models/mission.model';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
  clientId!: number;
  client!: User;
  loading = true;
  errorMessage = '';
  missions: Mission[] = [];
  missionsLoading = true;
  missionsError = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private missionService: MissionService
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(this.clientId)) {
      this.clientService.getClientById(this.clientId).subscribe({
        next: (data) => {
          this.client = data;
          this.loading = false;

          // Vérifier si le téléphone est valide avant d'appeler la méthode
          if (this.client.telephone) {
            this.missionService.getMissionsByTelephone(this.client.telephone).subscribe({
              next: (missionsData) => {
                this.missions = missionsData;
                this.missionsLoading = false;
              },
              error: (error) => {
                this.missionsError = 'Erreur lors de la récupération des missions.';
                this.missionsLoading = false;
              }
            });
          } else {
            this.missionsError = 'Le téléphone du client est introuvable.';
            this.missionsLoading = false;
          }
        },
        error: (error) => {
          this.errorMessage = 'Client non trouvé.';
          this.loading = false;
        }
      });
    } else {
      this.errorMessage = 'ID invalide.';
      this.loading = false;
    }
  }
}
