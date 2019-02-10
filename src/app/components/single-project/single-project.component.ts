import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../../shared/Project';
import { ProjectsService } from '../../shared/projects.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { GALLERY_OPTIONS } from '../../shared/gallery.constants';
import { MetaDataService } from '../../services/meta-data.service';
import { Observable, of, from } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';


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
  constructor(
    @Inject('BaseURL') private BaseURL,
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private meta: MetaDataService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.getProject(this.route.snapshot.paramMap.get('slug'));
    this.meta.createMetaData(
      this.project.description,
      this.project.name,
      `${this.BaseURL}projekti/${this.project.slug}`,
      `${this.BaseURL}${this.project.image}`
    );
    this.galleryOptions = GALLERY_OPTIONS;
    this.galleryImages = this.project.images;
    this.slugs = this.projectsService.getSlugs();

    this.route.params.pipe(
      switchMap((params: Params) => of(this.projectsService.getProject(params.slug))),
      map(
        project => {
          this.project = project;
          this.meta.createMetaData(
            this.project.description,
            this.project.name,
            `${this.BaseURL}projekti/${this.project.slug}`,
            `${this.BaseURL}${this.project.image}`
          );
          this.galleryImages = project.images;
          this.setPrevNext(project.id);
        }
      )
    ).subscribe();

  }

  setPrevNext(projectId: number) {
    let prevIndex = projectId;
    let nextIndex = projectId;
    if (projectId < 1) {
      prevIndex = this.slugs.length;
      nextIndex = 1;
    } else if (projectId === this.slugs.length - 1) {
      nextIndex = -1;
    }

    this.prev = this.slugs[prevIndex - 1].slug;
    this.next = this.slugs[nextIndex + 1] ? this.slugs[nextIndex + 1].slug : this.slugs[0].slug ;
  }
}
