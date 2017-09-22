import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import * as LINKS from './shared/constants';
import { slideToTop } from './animations/router-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideToTop],
})
export class AppComponent implements OnInit {
  navLinks = [];
  showOverlay = false;
  constructor(private router: Router, private _route: ActivatedRoute) {
  }
  ngOnInit() {
    this.navLinks = [
      {label: LINKS.HOME_LABEL, path: LINKS.HOME_PATH },
      {label: LINKS.ABOUT_LABEL, path: LINKS.ABOUT_PATH },
      {label: LINKS.CONTACT_LABEL, path: LINKS.CONTACT_PATH }
    ];
  }
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }
}
