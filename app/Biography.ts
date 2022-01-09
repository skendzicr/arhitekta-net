import { Biography } from "./types";

export const getBiography = async (): Promise<Biography> => {
  const referenceList = [
    {
      name: "Tehnička podrška gradilištu",
      references: [
        "Alpha banka Nacionalna banka Grčke",
        "EFG banka ",
        "Piraeus banka",
        "Vojvođanska banka",
        "Delta group (Nike, Aldo, Yamamay)",
        "Sportina (Orsay, Celio, Six, Perfois, XYZ, Burberry, Emporio Armani)",
        "Eco Helenic (benzinska stanica)",
        "Marinopoulos group (Sephora)",
        "Adriatic properties (rekonstrukcija vila sv. Stefan)",
      ],
    },
    {
      name: "Idejni i glavni projekti",
      references: [
        "Ambasada Republike Slovenije (rekonstrukcija)",
        "Dva proizvodno poslovna objekta",
        "Stara Pazova Proizvodno poslovni kompleks Vitex",
        "Stara Pazova Proizvodno poslovni kompleks Thrace Plastics",
        "Stara Pazova Škola za zdravstveni menadžment",
        "Beograd Poslovni prostor Koving",
        "Novi Beograd Projekti enterijera stambenih prostora",
      ],
    },
    {
      name: "Konkursi",
      references: [
        "Višeporodnično stanovanje",
        "Dizajn česme",
        "Jednoporodično stanovanje",
      ],
    },
    {
      name: "Priprema i izrada tekstualne i tehničke dokumentacije 3D modela i animacija u saradnji sa inženjerima elektro-tehnike i mašinstva",
      references: [
        "Animirani prikaz funkcionisanje sistema za kontrolu energetske efikasnosti objekata",
        "Animirani prikaz rada reduktora na naftnoj platformi",
        "Trodimenzionalni prikaz šeme",
        "transporta žitarica na poljoprivrednom gazdinstvu",
        "Različiti tehnički crteži zupčanika, spiralnih konstrukcija i reduktora",
      ],
    },
  ];

  const workExperience = [
    {
      description: `Razrada i izrada idejnih i glavnih projekata.
    Izrada projekata rekonstrukcije i adaptacije tehnička podrška gradilištima izgradnje, rekonstrukcije i adaptacije.
    Izrada 3D modela za potrebe projekatovanja i prezentacije rešenja na gradilištu.
    Priprema i izrada tekstualne dokumentacije u toku i nakon izgradnje objekata.`,
      position: "Arhitekta",
      companyName: "S.P. Euro-dom CO.CO. d.o.o ",
      endYear: 2011,
      startYear: 2008,
    },
    {
      description: `Izrada literature i održavanje nastave za programe AutoCAD i 3ds Max.`,
      position: "Predavač",
      companyName: "Centar Wizard",
      endYear: 2013,
      startYear: 2011,
    },
    {
      description: `Samostalna izrada idejnih i glavnih projekata`,
      position: "Samostalni Arhitekta",
      companyName: "Arhitekta.net",
      endYear: new Date().getFullYear(),
      startYear: 2011,
    },
  ];

  return { referenceList, workExperience };
};
