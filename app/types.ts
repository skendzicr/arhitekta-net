export interface Project {
  time: number;
  meta: {
    id: number;
    image: string;
    images: Image[];
    description: string;
    title: string;
    category: string;
  };
  slug: string;
}

export interface Biography {
  referenceList: {
    name: string;
    references: string[];
  }[];
  workExperience: {
    description: string;
    position: string;
    companyName: string;
    endYear: number;
    startYear: number;
  }[];
}

interface Image {
  small?: string;
  medium?: string;
  big?: string;
}
