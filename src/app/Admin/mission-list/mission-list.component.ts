import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/service/mission.service';
import { AssignTechnicianDialogComponent } from '../assign-technician-dialog/assign-technician-dialog.component';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  missions: Mission[] = [];

  constructor(
    private missionService: MissionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    this.missionService.getMissions().subscribe({
      next: (data: Mission[]) => {
        this.missions = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des missions :', err);
      }
    });
  }

  openAssignTechnicianDialog(missionId: number | undefined): void {
    if (missionId === undefined) {
      console.error('Mission ID is undefined');
      return;
    }

    const dialogRef = this.dialog.open(AssignTechnicianDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(technicienId => {
      if (technicienId) {
        this.missionService.addTechnicianToMission(missionId, technicienId).subscribe({
          next: (response) => {
            console.log('Technicien assigné avec succès :', response);
            this.fetchMissions(); // Refresh the mission list
          },
          error: (err) => {
            console.error('Erreur lors de l\'assignation du technicien :', err);
          }
        });
      }
    });
  }
}