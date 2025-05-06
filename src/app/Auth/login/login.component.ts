import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../service/auth-api.service'; // <-- le nouveau service HTTP
import { AuthService } from '../../service/auth.service';        // <-- service pour gérer session
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authApi: AuthApiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value; // contient email et password

      this.authApi.login(credentials).subscribe({
        next: (response) => {
          console.log('Réponse login:', response);

          // Stocker token et utilisateur via le service de session
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('id', response.user.id);
          localStorage.setItem('role', response.user.role);
          localStorage.setItem('name', response.user.name);
          localStorage.setItem('telephone', response.user.telephone);
          localStorage.setItem('email', response.user.email);


          const role = response.user.role;

          // Redirection selon le rôle
          if (role === 'admin') {
            this.router.navigate(['admin/dashboard']);
          } else if (role === 'technicien') {
            this.router.navigate(['technicien/dashboard']);
          } else if (role === 'client') {
            this.router.navigate(['client/home']);
          } else {
            console.error('Rôle inconnu:', role);
          }
        },
        error: (error) => {
          console.error('Erreur login:', error);
          alert('Email ou mot de passe incorrect.');
        }
      });
    }
  }
}
