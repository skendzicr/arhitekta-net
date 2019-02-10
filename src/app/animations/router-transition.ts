import { trigger, stagger, animate, style, query, transition } from '@angular/animations';

export const appearFromBottom = trigger('transitionTrigger', [
  transition(':enter', [
    query('mat-card', style({ opacity: 0 })),
    query('mat-card', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('mat-card', [
      style({ transform: 'translateY(0px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ]),
  ])
]);

export const appearFromLeft = trigger('transitionTrigger', [
  transition(':enter', [
    query('mat-card', style({ opacity: 0 })),
    query('mat-card', stagger(300, [
      style({ transform: 'translateX(-100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('mat-card', [
      style({ transform: 'translateX(0px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(-100px)', opacity: 0})),
    ]),
  ])
]);
