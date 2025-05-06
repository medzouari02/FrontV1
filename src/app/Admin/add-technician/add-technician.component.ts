import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnicianService } from '../../service/technician.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add-technician',
  templateUrl: './add-technician.component.html',
  styleUrls: ['./add-technician.component.css']
})
export class AddTechnicianComponent {
  technicianForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private technicianService: TechnicianService,
    private router: Router
  ) {
    this.technicianForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.technicianForm.valid) {
      const technicianData: User = this.technicianForm.value;
      this.technicianService.registerTechnicien(technicianData).subscribe({
        next: () => {
          this.successMessage = 'Technicien ajouté avec succès !';
          this.errorMessage = null;
          this.resetForm();
          // Navigate to technician list after a brief delay to show success message
          setTimeout(() => {
            this.router.navigate(['/admin/technicien-list']).catch(err => {
              this.errorMessage = 'Erreur de navigation : ' + err.message;
              console.error('Navigation error:', err);
            });
          }, 1000);
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de l\'ajout du technicien : ' + (err.error?.message || err.message);
          this.successMessage = null;
        }
      });
    }
  }

  resetForm(): void {
    this.technicianForm.reset();
    this.successMessage = null;
    this.errorMessage = null;
  }
}
