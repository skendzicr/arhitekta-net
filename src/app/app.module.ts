import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ProjectsService } from './shared/projects.service';

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
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
