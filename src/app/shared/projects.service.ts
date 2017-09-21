import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.const';
import { Project } from './project';


@Injectable()
export class ProjectsService {
  constructor() {}
  getProjects() {
    this.shuffleArray(PROJECTS);
    return PROJECTS;
  }
  getProject(slug: string): Project {
    return PROJECTS.filter(project => project.slug === slug)[0];
  }

  shuffleArray = arr => arr.sort(() => (Math.random() - 0.5));
}
