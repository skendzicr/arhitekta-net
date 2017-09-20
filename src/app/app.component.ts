import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import * as LINKS from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navLinks = [];
  showOverlay = true;
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.navLinks = [
      {label: LINKS.HOME_LABEL, path: LINKS.HOME_PATH },
      {label: LINKS.ABOUT_LABEL, path: LINKS.ABOUT_PATH }
    ];
  }
  toggleOverlay() {
    this.showOverlay = !this.showOverlay;
  }
}
