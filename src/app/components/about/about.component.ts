import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { WORK_EXPERIENCE, REFERENCE_LIST } from '../../shared/constants';
import { appearFromBottom } from '../../animations/router-transition';
import { MetaDataService } from '../../services/meta-data.service';
import { ActivatedRoute } from '@angular/router';
import {DEFAULT_BIOGRAFY_META} from '../../shared/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [appearFromBottom],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@transitionTrigger]': ''
  }
})
export class AboutComponent implements OnInit {
  jobs = WORK_EXPERIENCE;
  references = REFERENCE_LIST;
  step = 0;
  constructor(
    private meta: MetaDataService,
    private route: ActivatedRoute,
    @Inject('BaseURL') private BaseURL,
  ) { }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    const slug = `${this.BaseURL}${this.route.snapshot.url.toString()}`;
    const image = `${this.BaseURL}assets/images/jgs-300x300.jpg`;
    this.meta.createMetaData(DEFAULT_BIOGRAFY_META, 'Biografija', slug, image);
  }

}
