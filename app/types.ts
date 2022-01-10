export interface Project {
  time: number;
  id: number;
  heroImage: { url:string };
  images: { url:string, id:string }[];
  description: string;
  title: string;
  category: string;
  slug: string;
  body:string;
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
