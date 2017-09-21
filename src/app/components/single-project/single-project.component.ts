import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project';
import { ProjectsService } from '../../shared/projects.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { GALLERY_OPTIONS } from '../../shared/gallery.constants';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  project: Project;
  slugs;
  prev: number;
  next: number;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.project = this.projectsService.getProject(this.route.snapshot.paramMap.get('slug'));
    this.galleryOptions = GALLERY_OPTIONS;
    this.galleryImages = this.project.images;
    this.slugs = this.projectsService.getSlugs();

    this.route.params.switchMap((params: Params) => {
      return Observable.of(this.projectsService.getProject(params.slug));
    }).subscribe(project => {
      this.project = project;
      this.galleryImages = project.images;
      this.setPrevNext(project.id);
    });

  }

  setPrevNext(projectId: number) {
    let prevIndex = projectId;
    let nextIndex = projectId;
    if (projectId < 1) {
      prevIndex = this.slugs.length;
      nextIndex = 1;
    } else if (projectId === this.slugs.length - 1 ) {
      nextIndex = -1;
    }

    this.prev = this.slugs[prevIndex - 1].slug;
    this.next = this.slugs[nextIndex + 1].slug;
  }

}
