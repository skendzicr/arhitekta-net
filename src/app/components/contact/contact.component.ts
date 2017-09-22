import { Component, OnInit } from '@angular/core';
import { appearFromLeft } from '../../animations/router-transition';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [appearFromLeft],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@transitionTrigger]': ''
  }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
