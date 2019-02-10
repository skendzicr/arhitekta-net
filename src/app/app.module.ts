import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { TransferHttpCacheModule } from "@nguniversal/common";

import { AppRoutingModule } from "./app.routes";
import { HttpModule } from "@angular/http";

import { BASE_URL } from "./shared/constants";

import { ProjectsService } from "./shared/projects.service";
import { MetaDataService } from "./services/meta-data.service";

import { NgxGalleryModule } from "ngx-gallery";

import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatExpansionModule,
  MatListModule
} from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { ProjectsComponent } from "./components/projects/projects.component";
import { AboutComponent } from "./components/about/about.component";
import { SingleProjectComponent } from "./components/single-project/single-project.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    SingleProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    NgxGalleryModule,
    TransferHttpCacheModule
  ],
  providers: [
    ProjectsService,
    MetaDataService,
    { provide: "BaseURL", useValue: BASE_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
