import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../../shared/Project';
import { ProjectsService } from '../../shared/projects.service';

import { appearFromBottom } from '../../animations/router-transition';
import { Title } from '@angular/platform-browser';
import { MetaDataService } from '../../services/meta-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [appearFromBottom],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@transitionTrigger]': ''
  }
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    @Inject ('BaseURL') public BaseURL,
    private projectsService: ProjectsService,
    private meta: MetaDataService,
    private titleService: Title) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    this.meta.createMetaData(undefined, 'Projekti');
  }
}
