import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TechnicianService } from '../../service/technician.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-technician-edit-dialog',
  templateUrl: './technician-edit-dialog.component.html',
  styleUrls: ['./technician-edit-dialog.component.css']
})
export class TechnicianEditDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TechnicianEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private technicianService: TechnicianService
  ) {
    this.form = this.fb.group({
      name: [data?.name || '', Validators.required],
      email: [data?.email || '', [Validators.required, Validators.email]],
      telephone: [data?.telephone || '', Validators.required]
    });
  }

  ngOnInit(): void {}

  save(): void {
    if (this.form.valid) {
      const updatedTechnician: Partial<User> = {
        name: this.form.value.name,
        email: this.form.value.email,
        telephone: this.form.value.telephone
      };
      this.technicianService.updateTechnician(this.data.id!, updatedTechnician).subscribe({
        next: () => {
          this.dialogRef.close(updatedTechnician); // Return updated data
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour :', error);
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
