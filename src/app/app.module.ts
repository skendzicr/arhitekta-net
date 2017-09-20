import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ProjectsService } from './shared/projects.service';

import {
  MdCardModule,
  MdButtonModule,
  MdIconModule,
  MdTabsModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';


import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
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
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
