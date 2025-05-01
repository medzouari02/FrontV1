import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { HomeComponent } from './Client/home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'client',
    component: ClientLayoutComponent, // Layout pour la partie client
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' }



      // autre routes client...
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent, // Layout pour la partie admin
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' }
      // autre routes admin...
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
