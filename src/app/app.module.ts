import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { TechnicienLayoutComponent } from './layout/technicien-layout/technicien-layout.component';
import { HeaderComponent } from './Client/header/header.component';
import { FooterComponent } from './Client/footer/footer.component';
import { HomeComponent } from './Client/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { PasswordModule } from 'primeng/password';
import { TechnicianListComponent } from './Admin/technician-list/technician-list.component';
import { ClientListComponent } from './Admin/client-list/client-list.component';
import { TechnicianEditDialogComponent } from './Admin/technician-edit-dialog/technician-edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
import { DaashboardComponent } from './Technicien/dashboard/dashboard.component';
import { MissionListComponent } from './Admin/mission-list/mission-list.component';
import { AssignTechnicianDialogComponent } from './Admin/assign-technician-dialog/assign-technician-dialog.component';
import { AddTechnicianComponent } from './Admin/add-technician/add-technician.component';
import {  MissionListTComponent } from './Technicien/mission-list/mission-list.component';
import { MonmissionComponent } from './Technicien/monmission/monmission.component';
import { ClientProfileComponent } from './Admin/client-profile/client-profile.component';
import { TechnicienProfileComponent } from './Admin/technicien-profile/technicien-profile.component';
import { MonprofileComponent } from './Technicien/monprofile/monprofile.component';
import { AjoutMissionComponent } from './Client/ajout-mission/ajout-mission.component';
import { MonProfilClientComponent } from './Client/mon-profil-client/mon-profil-client.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    TechnicienLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    TechnicianListComponent,
    ClientListComponent,
    TechnicianEditDialogComponent,
    DaashboardComponent,
    MissionListComponent,
    AssignTechnicianDialogComponent,
    AddTechnicianComponent,
    MissionListTComponent,
    MonmissionComponent,
    ClientProfileComponent,
    TechnicienProfileComponent,
    MonprofileComponent,
    AjoutMissionComponent,
    MonProfilClientComponent,

  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    PanelModule,
    HttpClientModule,
    PasswordModule,
    FormsModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    ButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HighchartsChartModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
