import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.const';


@Injectable()
export class ProjectsService {
  constructor() {}
  getProjects() {
    return PROJECTS;
  }
}
