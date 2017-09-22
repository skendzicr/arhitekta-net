import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BASE_URL } from './shared/constants';

import { ProjectsService } from './shared/projects.service';
import { MetaDataService } from './services/meta-data.service';

import { NgxGalleryModule } from 'ngx-gallery';

import {
  MdCardModule,
  MdButtonModule,
  MdIconModule,
  MdTabsModule,
  MdExpansionModule,
  MdListModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';


import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    SingleProjectComponent,
    ContactComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdTabsModule,
    MdExpansionModule,
    NgxGalleryModule
  ],
  providers: [ProjectsService, MetaDataService, { provide: 'BaseURL', useValue: BASE_URL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
