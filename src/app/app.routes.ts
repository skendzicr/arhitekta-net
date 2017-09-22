import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projekti',
    pathMatch: 'full'
  },
  {
    path: 'projekti',
    component: ProjectsComponent,
    data: { animation: 'projekti' }
  },
  {
    path: 'biografija',
    component: AboutComponent,
    data: { animation: 'biografija' }
  },
  {
    path: 'kontakt',
    component: ContactComponent,
    data: { animation: 'kontakt' }
  },
  {
    path: 'projekti/:slug',
    component: SingleProjectComponent,
    data: { animation: 'projekat' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
