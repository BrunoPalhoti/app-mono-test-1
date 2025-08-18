export interface Post {
  id: number;
  user: string;
  avatar?: string;
  date: string;
  content: string;
  likes?: number;
}
