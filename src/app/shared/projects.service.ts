import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.const';
import { Project } from './Project';

@Injectable()
export class ProjectsService {
  constructor() { }
  getProjects() {
    return PROJECTS;
  }
  getProject(slug: string): Project {
    return PROJECTS.filter(project => project.slug === slug)[0];
  }

  getSlugs() {
    return PROJECTS.map(projects => {
      return {id: projects.id, slug: projects.slug};
    }
    );
  }

  shuffleArray = arr => arr.sort(() => (Math.random() - 0.5));
}
