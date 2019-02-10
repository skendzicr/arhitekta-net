import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.const';
import { Project } from './Project';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {
  constructor() { }
  getProjects() {
    this.shuffleArray(PROJECTS);
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
