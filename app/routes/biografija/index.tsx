import Timeline from "../../components/Timeline";

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
export default function Biography() {
  return (
    <section className="w-full py-12 bg-white lg:py-24 ">
      <div className="max-w-6xl p-5 md:p-7 lg:p-9 mx-auto text-center">
        <div className="space-y-12 md:text-center">
          <div className="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
            <h2 className="relative text-4xl font-extrabold tracking-tight sm:text-5xl">
              Jelena Gutić Skendžić
            </h2>
            <p className="text-xl text-gray-500">
              Diplomirani inženjer arhitekture. Odgovorni projektant
              arhitektonskih projekata, uređenja slobodnih prostora i
              unutrašnjih instalacija vodovoda i kanalizacije -{" "}
              <span className="text-indigo-500"> Licenca 300.</span>
            </p>
          </div>
        </div>
      </div>
      <article className="prose lg:prose-xl mx-auto px-5 md:px-7 lg:px-9">
        <Timeline
          items={[
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
          ]}
        />
        <h3>Obrazovanje</h3>
        <p>
          Arhitektonski fakultet Univerziteta u Beogradu,&nbsp;
          <span className="text-indigo-500">
            smer Arhitektonsko inženjerstvo.
          </span>
        </p>
        <h3>Lista referenci</h3>
        <ul>
          {referenceList.map((reference) => {
            return (
              <li key={reference.name}>
                <h4>{reference.name}</h4>
                <ul>
                  {reference.references.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}
