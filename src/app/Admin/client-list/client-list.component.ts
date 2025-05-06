import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ClientService } from 'src/app/service/client-list.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: User[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des clients:', error);
      }
    });
  }



  deleteClient(client: User): void {
    if (confirm(`Voulez-vous vraiment supprimer ${client.name} ?`)) {
      this.clientService.deleteClient(client.id!).subscribe({
        next: () => {
          this.clients = this.clients.filter(c => c.id !== client.id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
    }
  }
}
