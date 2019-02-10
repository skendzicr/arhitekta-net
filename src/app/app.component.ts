import { Component, OnInit } from "@angular/core";
import * as LINKS from "./shared/constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  navLinks = [];
  showOverlay = false;
  constructor() {}
  ngOnInit() {
    this.navLinks = [
      { label: LINKS.HOME_LABEL, path: LINKS.HOME_PATH },
      { label: LINKS.ABOUT_LABEL, path: LINKS.ABOUT_PATH },
      { label: LINKS.CONTACT_LABEL, path: LINKS.CONTACT_PATH }
    ];
  }
  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }
}
