import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project';
import { ProjectsService } from '../../shared/projects.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { GALLERY_OPTIONS } from '../../shared/gallery.constants';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  project: Project;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private projectsService: ProjectsService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.project = this.projectsService.getProject(this.route.snapshot.paramMap.get('slug'));
    this.galleryOptions = GALLERY_OPTIONS;
    this.galleryImages = this.project.images;
  }

}
