import Timeline from "../../components/Timeline";
import { Biography } from "../../types";
import { useLoaderData } from "remix";
import { getBiography } from "../../Biography";

export let loader = (): Promise<Biography> => {
  return getBiography();
};

export default function Biography() {
  let biography = useLoaderData<Biography>();

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
              <span className="text-yellow-500"> Licenca 300.</span>
            </p>
          </div>
        </div>
      </div>
      <article className="prose lg:prose-xl mx-auto px-5 md:px-7 lg:px-9">
        <Timeline items={biography.workExperience} />
        <h3>Obrazovanje</h3>
        <p>
          Arhitektonski fakultet Univerziteta u Beogradu,&nbsp;
          <span className="text-yellow-500">
            smer Arhitektonsko inženjerstvo.
          </span>
        </p>
        <h3>Lista referenci</h3>
        <ul>
          {biography.referenceList.map((reference) => {
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
