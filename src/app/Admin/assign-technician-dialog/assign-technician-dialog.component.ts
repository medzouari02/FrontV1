import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TechnicianService } from '../../service/technician.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-assign-technician-dialog',
  templateUrl: './assign-technician-dialog.component.html',
  styleUrls: ['./assign-technician-dialog.component.css']
})
export class AssignTechnicianDialogComponent implements OnInit {
  form: FormGroup;
  technicians: User[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AssignTechnicianDialogComponent>,
    private technicianService: TechnicianService
  ) {
    this.form = this.fb.group({
      technicien_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTechnicians();
  }

  loadTechnicians(): void {
    this.technicianService.getTechnicians().subscribe({
      next: (technicians) => {
        this.technicians = technicians;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des techniciens :', error);
      }
    });
  }

  save(): void {
    if (this.form.valid) {
      const technicienId = this.form.value.technicien_id;
      this.dialogRef.close(technicienId);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}