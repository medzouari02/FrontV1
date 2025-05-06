import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { HomeComponent } from './Client/home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { TechnicianListComponent } from './Admin/technician-list/technician-list.component';
import { ClientListComponent } from './Admin/client-list/client-list.component';
import { TechnicienLayoutComponent } from './layout/technicien-layout/technicien-layout.component';
import { DaashboardComponent } from './Technicien/dashboard/dashboard.component';
import { MissionListComponent } from './Admin/mission-list/mission-list.component';
import { AddTechnicianComponent } from './Admin/add-technician/add-technician.component';
import {  MissionListTComponent } from './Technicien/mission-list/mission-list.component';
import { MonmissionComponent } from './Technicien/monmission/monmission.component';
import { ClientProfileComponent } from './Admin/client-profile/client-profile.component';
import { TechnicienProfileComponent } from './Admin/technicien-profile/technicien-profile.component';
import { MonprofileComponent } from './Technicien/monprofile/monprofile.component';
import { AjoutMissionComponent } from './Client/ajout-mission/ajout-mission.component';
import { MonProfilClientComponent } from './Client/mon-profil-client/mon-profil-client.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientLayoutComponent, // Layout pour la partie client
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: AjoutMissionComponent, pathMatch: 'full' },
      { path: 'profil', component: MonProfilClientComponent, pathMatch: 'full' }



      // autre routes client...
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent, // Layout pour la partie admin
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
      { path: 'technicien-list', component: TechnicianListComponent, pathMatch: 'full' },
      { path: 'client-list', component: ClientListComponent, pathMatch: 'full' },
      { path: 'mission-list', component: MissionListComponent, pathMatch: 'full' },
      { path: 'add-technicien', component: AddTechnicianComponent, pathMatch: 'full' },
      { path: 'client-profile/:id', component: ClientProfileComponent, pathMatch: 'full' },
      { path: 'technicien-profile/:id', component: TechnicienProfileComponent, pathMatch: 'full' }




      // autre routes admin...
    ]
  },
  {
    path: 'technicien',
    component: TechnicienLayoutComponent, // Layout pour la partie technicien
    children: [
      { path: 'dashboard', component: DaashboardComponent, pathMatch: 'full' },
      { path: 'mission-list', component: MissionListTComponent, pathMatch: 'full' },
      { path: 'monmission', component: MonmissionComponent, pathMatch: 'full' },
      { path: 'monprofile', component: MonprofileComponent, pathMatch: 'full' }
      // autre routes technicien...
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
