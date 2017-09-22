import { Component, OnInit } from '@angular/core';
import { appearFromLeft } from '../../animations/router-transition';
import { MetaDataService } from '../../services/meta-data.service';
import {DEFAULT_META_DESCRIPTION} from '../../shared/constants';

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

  constructor(private meta: MetaDataService) { }

  ngOnInit() {
    this.meta.createMetaData(`${DEFAULT_META_DESCRIPTION} Kontakt: +381 (0) 63 8683394`, 'Kontakt');
  }

}
