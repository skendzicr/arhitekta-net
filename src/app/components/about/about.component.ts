import { Component, OnInit, HostBinding } from '@angular/core';
import { WORK_EXPERIENCE, REFERENCE_LIST } from '../../shared/constants';
import { appearFromBottom } from '../../animations/router-transition';

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
  constructor() { }
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
  }

}
