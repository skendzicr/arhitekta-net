import { sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

export const slideToTop = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      query(':leave', animateChild()),
      group([
        query(':leave',
          [style({ transform: 'translateX(0%)', opacity: 0 }),
          animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
          ]),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in', style({ transform: 'translateX(0%)' })),
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);

export const appearFromBottom = trigger('transitionTrigger', [
  transition(':enter', [
    query('md-card', style({ opacity: 0 })),
    query('md-card', stagger(300, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('md-card', [
      style({ transform: 'translateY(0px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ]),
  ])
]);

export const appearFromLeft = trigger('transitionTrigger', [
  transition(':enter', [
    query('md-card', style({ opacity: 0 })),
    query('md-card', stagger(300, [
      style({ transform: 'translateX(-100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(0px)', opacity: 1})),
    ])),
  ]),
  transition(':leave', [
    query('md-card', [
      style({ transform: 'translateX(0px)', opacity: 0 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateX(-100px)', opacity: 0})),
    ]),
  ])
]);
