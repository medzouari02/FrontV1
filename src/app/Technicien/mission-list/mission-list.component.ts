import { Component, OnInit } from '@angular/core';
import { Mission } from 'src/app/models/mission.model';
import { MissionService } from 'src/app/service/mission.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListTComponent implements OnInit{
  missions: Mission[] = [];

  constructor(
    private missionService: MissionService,
  ) {}

  ngOnInit(): void {
    this.fetchMissions();
  }

  fetchMissions(): void {
    this.missionService.getMissions().subscribe({
      next: (data: Mission[]) => {
        this.missions = data.filter(mission =>
          mission.etat !== 'en cours' && mission.technicien_id == null
        );
      },
      error: (err) => {
        console.error('Erreur lors du chargement des missions :', err);
      }
    });
  }

  AssignTechnician(missionId: number | undefined, technicien_id?: number): void {
    if (!missionId) {
      console.error('Mission ID is undefined');
      return;
    }

    // If technicien_id is not provided (e.g., from dialog), get from localStorage
    const techId = technicien_id || localStorage.getItem('id');
    if (!techId) {
      console.error('Technicien ID is not found in localStorage or dialog');
      return;
    }

    const technicienIdNumber = Number(techId);
    if (isNaN(technicienIdNumber)) {
      console.error('Invalid technicien_id format:', techId);
      return;
    }

    this.missionService.addTechnicianToMission(missionId, technicienIdNumber).subscribe({
      next: (response) => {
        console.log('Technician assigned successfully:', response);
        // Refresh the mission list to reflect the updated data
        this.ngOnInit();
      },
      error: (err) => {
        console.error('Error assigning technician:', err);
      }
    });
  }
}
