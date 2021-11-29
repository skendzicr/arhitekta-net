export interface Project {
  meta: {
    id: number;
    image: string
    images: Image[];
    description: string;
    title: string;
    category: string;
  };
  slug: string;
}

interface Image {
  small?: string;
  medium?: string;
  big?: string;
}
