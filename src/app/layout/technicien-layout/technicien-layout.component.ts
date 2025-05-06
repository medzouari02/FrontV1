import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-technicien-layout',
  templateUrl: './technicien-layout.component.html',
  styleUrls: ['./technicien-layout.component.css']
})
export class TechnicienLayoutComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
      }
}
