export interface User {
  name: string;
  id: number;
  email: string;
  password: string;
  role: 'client' | 'admin' | 'technicien';
  telephone?: string;
  type?: string;             // Pour technicien uniquement
  specialite?: string;       // Pour technicien uniquement
  disponibilite?: boolean;   // Pour technicien uniquement
}
