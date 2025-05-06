import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { TechnicianService } from '../../service/technician.service';
import { MatDialog } from '@angular/material/dialog';
import { TechnicianEditDialogComponent } from '../technician-edit-dialog/technician-edit-dialog.component';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {
  technicians: User[] = [];

  constructor(private technicianService: TechnicianService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchTechnicians();
  }

  openEditDialog(technician: User): void {
    const dialogRef = this.dialog.open(TechnicianEditDialogComponent, {
      width: '400px',
      data: { ...technician } // Pass a copy to avoid direct mutation
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the technician in the list
        this.fetchTechnicians(); // Refresh the list after update
      }
    });
  }

  fetchTechnicians(): void {
    this.technicianService.getTechnicians().subscribe({
      next: (data) => {
        this.technicians = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des techniciens :', error);
      }
    });
  }

  viewTechnician(technician: User): void {
    console.log('Voir le technicien :', technician);
    // Implement view logic (e.g., modal or navigation)
  }

  deleteTechnician(technician: User): void {
    if (confirm(`Voulez-vous vraiment supprimer ${technician.name} ?`)) {
      this.technicianService.deleteTechnician(technician.id!).subscribe({
        next: () => {
          this.technicians = this.technicians.filter(t => t.id !== technician.id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression :', error);
        }
      });
    }
  }
}
