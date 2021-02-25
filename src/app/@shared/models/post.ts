export interface Post {
  _id?:string; // Pour l'API
  title: string;
  description?: string;
  link: string;
  icon?: string;
}
