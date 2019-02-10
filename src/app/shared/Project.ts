export interface Project {
  id: number;
  image: string;
  images: Image[];
  description: string;
  name: string;
  category: string;
  slug: string;
}

interface Image {
  small?: string;
  medium?: string;
  big?: string;
}
