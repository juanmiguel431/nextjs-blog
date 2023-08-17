export interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  content: string;
  featured: boolean;
}

export type Status = 'pending' | 'success' | 'error';

export interface Notification {
  status: Status;
  title: string;
  message: string;
}
