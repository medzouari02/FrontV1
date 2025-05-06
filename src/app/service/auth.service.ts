import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) as User : null;
  }

  getUserRole(): string | null {
    const user = this.getUser();
    return user?.role ?? null;
  }

  isClient(): boolean {
    return this.getUserRole() === 'client';
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  isTechnicien(): boolean {
    return this.getUserRole() === 'technicien';
  }
}
