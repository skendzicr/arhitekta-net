export const HOME_LABEL = 'Projekti';
export const HOME_PATH = 'projekti';
export const ABOUT_LABEL = 'Biografija';
export const ABOUT_PATH = 'biografija';
export const WORK_EXPERIENCE: Experience[] = [
  {
    year: '2011 do sad',
    position: 'Samostalna izrada idejnih i glavnih projekata',
    company: 'Samostalni arhitekta',
    description: ''
  },
  {
    year: '2008 – 2011',
    position: 'Arhitekta',
    company: 'S.P. Euro-dom CO.CO. d.o.o',
    description: `Razrada i izrada idejnih i glavnih projekata.
    Izrada projekata rekonstrukcije i adaptacije tehnička podrška gradilištima izgradnje, rekonstrukcije i adaptacije.
    Izrada 3D modela za potrebe projekatovanja i prezentacije rešenja na gradilištu.
    Priprema i izrada tekstualne dokumentacije u toku i nakon izgradnje objekata.`
  },
  {
    year: '2011 – 2013',
    position: 'Predavač',
    company: 'Centar Wizard',
    description: `Izrada literature i održavanje nastave za programe AutoCAD i 3ds Max.`
  },
];

export const REFERENCE_LIST: Reference[] = [
  {
    position: 'Tehnička podrška gradilištu',
    references: ['Alpha banka', 'Nacionalna banka Grčke', 'EFG banka', 'Piraeus banka', 'Vojvođanska banka',
      'Delta group (Nike, Aldo, Yamamay)', 'Sportina (Orsay, Celio, Six, Perfois, XYZ, Burberry, Emporio Armani)',
      'Eco Helenic (benzinska stanica)', 'Marinopoulos group (Sephora)', 'Adriatic properties (rekonstrukcija vila sv. Stefan)']
  },
  {
    position: 'Idejni i glavni projekti',
    references: ['Ambasada Republike Slovenije (rekonstrukcija)', 'Dva proizvodno poslovna objekta, Stara Pazova',
      'Proizvodno poslovni kompleks Vitex, Stara Pazova', 'Proizvodno poslovni kompleks Thrace Plastics, Stara Pazova',
      'Škola za zdravstveni menadžment, Beograd', 'Poslovni prostor Koving, Novi Beograd', 'Projekti enterijera stambenih prostora',
      'Konkursi: Višeporodnično stanovanje; Dizajn česme; Jednoporodično stanovanje']
  },
  {
    position: 'Ostalo',
    references: ['Priprema i izrada tekstualne i tehničke dokumentacije',
    '3D modela i animacija u saradnji sa inženjerima elektro-tehnike i mašinstva:',
    'Animirani prikaz funkcionisanje sistema za kontrolu energetske efikasnosti objekata',
    'Animirani prikaz rada reduktora na naftnoj platformi',
    'Trodimenzionalni prikaz šeme transporta žitarica na poljoprivrednom gazdinstvu',
    'Različiti tehnički crteži zupčanika, spiralnih konstrukcija i reduktora']
  }
];

interface Reference {
  position: string;
  references: string[];
}

interface Experience {
  year: string;
  description: string;
  position: string;
  company: string;
}

