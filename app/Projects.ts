import { Project } from "./types";
import * as path from "path";
import * as fs from "fs/promises";
import parseFrontMatter from "front-matter";
import { marked } from "marked";

// relative to the server output not the source!
const postsPath = path.join(__dirname, "..", "projects");
const imagesPath = path.join(__dirname, "..", "public", "assets", "images");

export const getProjects = async (): Promise<Project[]> => {
  const projects = await fs.readdir(postsPath);
  return Promise.all(
    projects.map(async (filename) => {
      const fileLocation = path.join(postsPath, filename);
      const file = await fs.readFile(fileLocation);
      const time = await fs.stat(fileLocation);
      const { attributes } = parseFrontMatter<Project>(file.toString());
      return {
        ...attributes,
        slug: filename.replace(/\.md$/, ""),
        title: attributes.meta.title,
        time: time.mtime,
      };
    })
  );
};

export const getProject = async (slug: string) => {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter<Project>(file.toString());
  const html = marked(body);
  const images = await getProjectImages(slug);
  return {
    slug,
    html,
    title: attributes.meta.title,
    images,
    category: attributes.meta.category,
  };
};

export const getProjectImages = async (slug: string) => {
  const files = await fs.readdir(imagesPath);
  return files.filter((file) => file.includes(slug));
};

const PROJECTS = [
  {
    id: 0,
    title: "StartIT centar Inđija",
    image: "assets/images/startit-indjija-4.jpg",
    // tslint:disable-next-line:max-line-length
    description: `Startit Centar Indjija je zamišljen kao coworking prostor za umrežavanje, saradnju i razmenu prakse i znanja. Startit Centar Inđija je prostor od 250m2 u samom centru grada i nalazi se u “inđijskoj Knez Mihajlovoj” — Vojvode Stepe 4. Centar je prvi projekat koji je finansiran donacijama iz Kickstarter kampanje koju je izgurala domaća IT zajednica.`,
    category: "Dizajn enterijera",
    slug: "startit-indjija",
    images: [
      {
        big: "assets/images/startit-indjija-1.jpg",
        medium: "assets/images/startit-indjija-1.jpg",
        small: "assets/images/startit-indjija-1.jpg",
      },
      {
        big: "assets/images/startit-indjija-2.jpg",
        medium: "assets/images/startit-indjija-2.jpg",
        small: "assets/images/startit-indjija-2.jpg",
      },
      {
        big: "assets/images/startit-indjija-3.jpg",
        medium: "assets/images/startit-indjija-3.jpg",
        small: "assets/images/startit-indjija-3.jpg",
      },
      {
        big: "assets/images/startit-indjija-4.jpg",
        medium: "assets/images/startit-indjija-4.jpg",
        small: "assets/images/startit-indjija-4.jpg",
      },
      {
        big: "assets/images/startit-indjija-5.jpg",
        medium: "assets/images/startit-indjija-5.jpg",
        small: "assets/images/startit-indjija-5.jpg",
      },
      {
        big: "assets/images/startit-indjija-6.jpg",
        medium: "assets/images/startit-indjija-6.jpg",
        small: "assets/images/startit-indjija-6.jpg",
      },
      {
        big: "assets/images/startit-indjija-7.jpg",
        medium: "assets/images/startit-indjija-7.jpg",
        small: "assets/images/startit-indjija-7.jpg",
      },
    ],
    // tslint:disable-next-line:max-line-length
  },
  {
    id: 1,
    title: "Enterijer BNB",
    image: "assets/images/enterijer-bnb-1.jpg",
    description:
      "Za uređenje stana je najbitnije da stvorite prostor u kome ćete se osećati onako kako vi to želite, kao kod kuće. Arhitekta je tu da vam pomogne u kreiranju i realizaciji ideje. Ovde je prikazano nekoliko ideja uređenje stana, koje su rađene zahtevima vlasnika.",
    category: "Dizajn enterijera",
    slug: "enterijer-bnb",
    images: [
      {
        big: "assets/images/enterijer-bnb-1.jpg",
        medium: "assets/images/enterijer-bnb-1.jpg",
        small: "assets/images/enterijer-bnb-1.jpg",
      },
      {
        big: "assets/images/enterijer-bnb-2.jpg",
        medium: "assets/images/enterijer-bnb-2.jpg",
        small: "assets/images/enterijer-bnb-2.jpg",
      },
      {
        big: "assets/images/enterijer-bnb-3.jpg",
        medium: "assets/images/enterijer-bnb-3.jpg",
        small: "assets/images/enterijer-bnb-3.jpg",
      },
      {
        big: "assets/images/enterijer-bnb-4.jpg",
        medium: "assets/images/enterijer-bnb-4.jpg",
        small: "assets/images/enterijer-bnb-4.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Poslovni prostor Koving",
    image: "assets/images/poslovni-prostor-koving-1.jpg",
    description:
      "Savremeno poslovno okruženje zahteva pouzdanog strateškog partnera koji će učiniti poslovanje bezbednim, temeljnim, a samim tim i uspešnim. Poslovni prostor mora da prati uređenje koje mora da bude u skladu sa namenom istog. Za poslovni prostor firme Koving iskorišćeni su odgovarajući elementi da bi se na određen način predstavila i delatnost same firme.",
    category: "Dizajn enterijera",
    slug: "poslovni-prostor-koving",
    images: [
      {
        big: "assets/images/poslovni-prostor-koving-1.jpg",
        medium: "assets/images/poslovni-prostor-koving-1.jpg",
        small: "assets/images/poslovni-prostor-koving-1.jpg",
      },
      {
        big: "assets/images/poslovni-prostor-koving-2.jpg",
        medium: "assets/images/poslovni-prostor-koving-2.jpg",
        small: "assets/images/poslovni-prostor-koving-2.jpg",
      },
      {
        big: "assets/images/poslovni-prostor-koving-3.jpg",
        medium: "assets/images/poslovni-prostor-koving-3.jpg",
        small: "assets/images/poslovni-prostor-koving-3.jpg",
      },
      {
        big: "assets/images/poslovni-prostor-koving-4.jpg",
        medium: "assets/images/poslovni-prostor-koving-4.jpg",
        small: "assets/images/poslovni-prostor-koving-4.jpg",
      },
      {
        big: "assets/images/poslovni-prostor-koving-5.jpg",
        medium: "assets/images/poslovni-prostor-koving-5.jpg",
        small: "assets/images/poslovni-prostor-koving-5.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Dizajn nameštaja",
    image: "assets/images/furniture-design-1.jpg",
    description:
      "Svaki komad nameštaja koji je ovde prikazan predstavlja jedinstven dizajn za potrebe konkretnog korisnika. Da bi prostor bio odraz korisnika i funkcije koja se u njemu odvija najbolje rešenje je dizajn nameštaja, koji će biti maksimalno ukljopljen sa postojećim prostorom. Idealno rešenje je projektovanje celokupnog enterijera, zajedno sa dizajnom nameštaja, ali sigurno bi i samo dizajn nameštaj značajno uticao na formiranje određenog ambijenta",
    category: "Dizajn nameštaja",
    slug: "dizajn-namestaja",
    images: [
      {
        big: "assets/images/furniture-design-1.jpg",
        medium: "assets/images/furniture-design-1.jpg",
        small: "assets/images/furniture-design-1.jpg",
      },
      {
        big: "assets/images/furniture-design-2.jpg",
        medium: "assets/images/furniture-design-2.jpg",
        small: "assets/images/furniture-design-2.jpg",
      },
      {
        big: "assets/images/furniture-design-3.jpg",
        medium: "assets/images/furniture-design-3.jpg",
        small: "assets/images/furniture-design-3.jpg",
      },
      {
        big: "assets/images/furniture-design-4.jpg",
        medium: "assets/images/furniture-design-4.jpg",
        small: "assets/images/furniture-design-4.jpg",
      },
      {
        big: "assets/images/furniture-design-5.jpg",
        medium: "assets/images/furniture-design-5.jpg",
        small: "assets/images/furniture-design-5.jpg",
      },
      {
        big: "assets/images/furniture-design-6.jpg",
        medium: "assets/images/furniture-design-6.jpg",
        small: "assets/images/furniture-design-6.jpg",
      },
      {
        big: "assets/images/furniture-design-7.jpg",
        medium: "assets/images/furniture-design-7.jpg",
        small: "assets/images/furniture-design-7.jpg",
      },
      {
        big: "assets/images/furniture-design-8.jpg",
        medium: "assets/images/furniture-design-8.jpg",
        small: "assets/images/furniture-design-8.jpg",
      },
      {
        big: "assets/images/furniture-design-9.jpg",
        medium: "assets/images/furniture-design-9.jpg",
        small: "assets/images/furniture-design-9.jpg",
      },
      {
        big: "assets/images/furniture-design-10.jpg",
        medium: "assets/images/furniture-design-10.jpg",
        small: "assets/images/furniture-design-10.jpg",
      },
      {
        big: "assets/images/furniture-design-11.jpg",
        medium: "assets/images/furniture-design-11.jpg",
        small: "assets/images/furniture-design-11.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Enterijer restorana",
    image: "assets/images/restaurant-enterijer-bnb-5.jpg",
    description:
      "Enterijer  restorana u kome bi posetioci trebali da se osete prijatno bilo da su došli na poslovni ručak ili na večeru sa prijateljima. Svaki enterijer restorana treba da se uredi tako da je posetiocima jasno kakav je knocept tog restorana. Tako u ovom idejnom rešenju može da se primeti izbor boja koje će osvežiti prostor, a njihova kombinacija čini prostor dovoljno elegantnim da je restoran pogoadan i za priajtnu večeru.",
    category: "Dizajn enterijera",
    slug: "enterijer-restorana",
    images: [
      {
        big: "assets/images/restaurant-enterijer-bnb-5.jpg",
        medium: "assets/images/restaurant-enterijer-bnb-5.jpg",
        small: "assets/images/restaurant-enterijer-bnb-5.jpg",
      },
      {
        big: "assets/images/restaurant-enterijer-bnb-6.jpg",
        medium: "assets/images/restaurant-enterijer-bnb-6.jpg",
        small: "assets/images/restaurant-enterijer-bnb-6.jpg",
      },
      {
        big: "assets/images/restaurant-enterijer-bnb-7.jpg",
        medium: "assets/images/restaurant-enterijer-bnb-7.jpg",
        small: "assets/images/restaurant-enterijer-bnb-7.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Kolektivno stanovanje",
    image: "assets/images/construction-building-concept-3.jpg",
    description:
      "Koncept idejnog rešenja za kompleks objekata za kolektivno stanovanje predstavlja pojednostavljenu predstavu kuće. To je postignuto isticanjem linijskih elemenata na objektu koji čine konturu kuće. Asocijacija na kolektivno stanovanje jeste kuća tako da je ovde ceo objekat prikazan kao jedna velika kuća. Prostori u prizmelju su uređeni sa privilegijom da imaju direktan kontakt sa okruženjem, što celom objektu daje određenu toplinu. Kako samo prizemlje ne bi bilo u neskladu sa višim etaža ponovljeni su određeni linijski elementi spratova na drvenim pregradama prizemlja koncepta za kolektivno stanovanje",
    category: "Konstrukcija",
    slug: "kolektivno-stanovanje-lazarevac",
    images: [
      {
        big: "assets/images/construction-building-concept-3.jpg",
        medium: "assets/images/construction-building-concept-3.jpg",
        small: "assets/images/construction-building-concept-3.jpg",
      },
      {
        big: "assets/images/construction-building-concept-2.jpg",
        medium: "assets/images/construction-building-concept-2.jpg",
        small: "assets/images/construction-building-concept-2.jpg",
      },
      {
        big: "assets/images/construction-building-concept-1.jpg",
        medium: "assets/images/construction-building-concept-1.jpg",
        small: "assets/images/construction-building-concept-1.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Idejno rešenje kuće za odmor",
    image: "assets/images/kuca-za-odmor-1.jpg",
    description:
      "Koncept blizak aktivnoj kući. Pošto nije određena lokacija ovog objekta, ono što je sigurno moguće iskoristiti od obnovljivih izvora energije je sunčeva energija. Zbog toga je i forma kuće usklađena upotrebi klasičnijih oblika solarnih ćelija. Deo krovne konstrukcije u isto vreme čini i nosače za solarne ploče. Takođe je predviđeno da se ove ploče po potrebi koriste i kao zaštita od sunca. Desno od ulaza se nalazi ostava na čijem kraju je moguće pristupiti i rezervoaru atmosferske vode. Sa druge strane rezervora se nalazi uređen kutak sa zelenilom tako da se ovim elementom ne narušava estetika objekta. Idejno rešenje kuće za odmor bi ukratko moglo da se opiše kao lakoća odmora",
    category: "Konstrukcija",
    slug: "kuca-za-odmor-koncept",
    images: [
      {
        big: "assets/images/kuca-za-odmor-2.jpg",
        medium: "assets/images/kuca-za-odmor-2.jpg",
        small: "assets/images/kuca-za-odmor-2.jpg",
      },
      {
        big: "assets/images/kuca-za-odmor-1.jpg",
        medium: "assets/images/kuca-za-odmor-1.jpg",
        small: "assets/images/kuca-za-odmor-1.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Uređenje stana",
    image: "assets/images/enterijer-bnb-5.jpg",
    description:
      "Za uređenje stana je najbitnije da stvorite prostor u kome ćete se osećati onako kako vi to želite, kao kod kuće. Arhitekta je tu da vam pomogne u kreiranju i realizaciji ideje. Ovde je prikazano nekoliko ideja uređenje stana, koje su rađene zahtevima vlasnika.",
    category: "Dizajn enterijera",
    slug: "uredjenje-stana",
    images: [
      {
        big: "assets/images/enterijer-bnb-6.jpg",
        medium: "assets/images/enterijer-bnb-6.jpg",
        small: "assets/images/enterijer-bnb-6.jpg",
      },
      {
        big: "assets/images/enterijer-bnb-5.jpg",
        medium: "assets/images/enterijer-bnb-5.jpg",
        small: "assets/images/enterijer-bnb-5.jpg",
      },
      {
        big: "assets/images/enterijer-bnb-7.jpg",
        medium: "assets/images/enterijer-bnb-7.jpg",
        small: "assets/images/enterijer-bnb-7.jpg",
      },
      {
        big: "assets/images/enterijer-bnb-8.jpg",
        medium: "assets/images/enterijer-bnb-8.jpg",
        small: "assets/images/enterijer-bnb-8.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Ostali projekti",
    image: "assets/images/construction-building-concept.jpg",
    description:
      "Ostali projekti obuhvataju tehničke crteže i 3D modele za razne struke. Razne tehničke dokumentacije su rađene u saradnji sa elektro i mašinskim inženjerima.",
    category: "Razno",
    slug: "ostali-projekti",
    images: [
      {
        big: "assets/images/construction-building-concept.jpg",
        medium: "assets/images/construction-building-concept.jpg",
        small: "assets/images/construction-building-concept.jpg",
      },
      {
        big: "assets/images/railway.jpg",
        medium: "assets/images/railway.jpg",
        small: "assets/images/railway.jpg",
      },
      {
        big: "assets/images/recreation-concept.jpg",
        medium: "assets/images/recreation-concept.jpg",
        small: "assets/images/recreation-concept.jpg",
      },
      {
        big: "assets/images/silos.jpg",
        medium: "assets/images/silos.jpg",
        small: "assets/images/silos.jpg",
      },
      {
        big: "assets/images/reductor.jpg",
        medium: "assets/images/reductor.jpg",
        small: "assets/images/reductor.jpg",
      },
      {
        big: "assets/images/airport-student-work.jpg",
        medium: "assets/images/airport-student-work.jpg",
        small: "assets/images/airport-student-work.jpg",
      },
    ],
  },
];
