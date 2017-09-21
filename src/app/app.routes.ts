import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects/:slug',
    component: SingleProjectComponent,
  },
  {
    path: '**',
    component: ProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
