export interface Post {
  _id?:string; // Pour l'API
  id: string; //Gérer en local
  title: string;
  description?: string;
  link: string;
  icon?: string;
}
