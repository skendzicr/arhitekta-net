import { Project } from './project';

export const PROJECTS: Project[] =
  [
    {
      id: 0,
      name: 'StartIT centar Inđija',
      image: '../../assets/images/start-it-indjija-4.jpg',
      images: [
        {
          big: '../../assets/images/start-it-indjija-1.jpg',
          medium: '../../assets/images/start-it-indjija-1.jpg',
          small: '../../assets/images/start-it-indjija-1.jpg',
        },
        {
          big: '../../assets/images/start-it-indjija-2.jpg',
          medium: '../../assets/images/start-it-indjija-2.jpg',
          small: '../../assets/images/start-it-indjija-2.jpg',

        },
        {
          big: '../../assets/images/start-it-indjija-3.jpg',
          medium: '../../assets/images/start-it-indjija-3.jpg',
          small: '../../assets/images/start-it-indjija-3.jpg',

        },
        {
          big: '../../assets/images/start-it-indjija-4.jpg',
          medium: '../../assets/images/start-it-indjija-4.jpg',
          small: '../../assets/images/start-it-indjija-4.jpg',

        },
        {
          big: '../../assets/images/start-it-indjija-5.jpg',
          medium: '../../assets/images/start-it-indjija-5.jpg',
          small: '../../assets/images/start-it-indjija-5.jpg',

        },
        {
          big: '../../assets/images/start-it-indjija-6.jpg',
          medium: '../../assets/images/start-it-indjija-6.jpg',
          small: '../../assets/images/start-it-indjija-6.jpg',

        },
        {
          big: '../../assets/images/start-it-indjija-7.jpg',
          medium: '../../assets/images/start-it-indjija-7.jpg',
          small: '../../assets/images/start-it-indjija-7.jpg',

        }
      ],
      // tslint:disable-next-line:max-line-length
      description: `Startit Centar Indjija je zamišljen kao coworking prostor za umrežavanje, saradnju i razmenu prakse i znanja. Startit Centar Inđija je prostor od 250m2 u samom centru grada i nalazi se u “inđijskoj Knez Mihajlovoj” — Vojvode Stepe 4. Centar je prvi projekat koji je finansiran donacijama iz Kickstarter kampanje koju je izgurala domaća IT zajednica.`,
      category: 'Enterior design',
      slug: 'startit-centar-indjija'
    },
    {
      id: 1,
      name: 'Enterijer BNB',
      image: '../../assets/images/enterijer-bnb-1.jpg',
      images: [],
      description: 'Za uređenje stana je najbitnije da stvorite prostor u kome ćete se osećati onako kako vi to želite, kao kod kuće. Arhitekta je tu da vam pomogne u kreiranju i realizaciji ideje. Ovde je prikazano nekoliko ideja uređenje stana, koje su rađene zahtevima vlasnika.',
      category: 'Enterior design',
      slug: 'enterijer-bnb'
    },
    {
      id: 2,
      name: 'Poslovni prostor Koving',
      image: '../../assets/images/office-enterior-design-1.jpg',
      images: [],
      description: 'Savremeno poslovno okruženje zahteva pouzdanog strateškog partnera koji će učiniti poslovanje bezbednim, temeljnim, a samim tim i uspešnim. Poslovni prostor mora da prati uređenje koje mora da bude u skladu sa namenom istog. Za poslovni prostor firme Koving iskorišćeni su odgovarajući elementi da bi se na određen način predstavila i delatnost same firme.',
      category: 'Enterior design',
      slug: 'poslovni-prostor-koving'
    },
  ];
