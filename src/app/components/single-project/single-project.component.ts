import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project';
import { ProjectsService } from '../../shared/projects.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  project: Project;
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.project = this.projectsService.getProject(this.route.snapshot.paramMap.get('slug'));
  }

}
