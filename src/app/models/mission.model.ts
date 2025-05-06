import { User } from './user.model';

export interface Mission {
  id?: number;
  nom_client: string;
  adress: string;
  telephone: string;
  adress_email: string;
  datedeb: string;
  datefin?: string;
  etat?: string;
  type?: string;
  commentaire?: string;
  description?: string;
  technicien_id: number;
  technicien: User;
}
