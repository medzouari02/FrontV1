import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../../service/auth-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  roles = ['client', 'technicien'];
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private authApi: AuthApiService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['client', Validators.required],
      disponibilite: [''], // affichés uniquement pour technicien
      specialite: [''],
      type: ['']
    });

    this.registerForm.get('role')?.valueChanges.subscribe((role) => {
      if (role === 'technicien') {
        this.registerForm.get('disponibilite')?.setValidators([Validators.required]);
        this.registerForm.get('specialite')?.setValidators([Validators.required]);
        this.registerForm.get('type')?.setValidators([Validators.required]);
      } else {
        this.registerForm.get('disponibilite')?.clearValidators();
        this.registerForm.get('specialite')?.clearValidators();
        this.registerForm.get('type')?.clearValidators();
      }

      this.registerForm.get('disponibilite')?.updateValueAndValidity();
      this.registerForm.get('specialite')?.updateValueAndValidity();
      this.registerForm.get('type')?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const formData = this.registerForm.value;

    const isTechnicien = formData.role === 'technicien';

    const payload = {
      id: formData.id,

      name: formData.name,
      email: formData.email,
      telephone: formData.telephone,
      password: formData.password,
      role: formData.role,
      ...(isTechnicien && {
        disponibilite: formData.disponibilite,
        specialite: formData.specialite,
        type: formData.type
      })
    };

    const registerFn = isTechnicien
      ? this.authApi.registerTechnicien(payload)
      : this.authApi.registerClient(payload);

    registerFn.subscribe({
      next: () => {
        this.successMessage = `${formData.role} enregistré avec succès !`;
        this.errorMessage = '';
        this.registerForm.reset({ role: 'client' });
      },
      error: (err) => {
        this.errorMessage = `Erreur lors de l’enregistrement du ${formData.role}.`;
        this.successMessage = '';
        console.error(err);
      }
    });
  }
}
