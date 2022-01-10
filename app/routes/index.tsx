import type { LoaderFunction, MetaFunction } from "remix";
import { json, useLoaderData } from "remix";
import ProjectsSection from "../components/ProjectsSection";
import { getFeaturedProjects } from "../Projects";
import { Project } from "../types";
import FeaturesSection from "../components/FeaturesSection";

type IndexData = {
  projects: Project[];
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  let { projects } = await getFeaturedProjects(true);

  // https://remix.run/api/remix#json
  return json({
    projects,
  });
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Arhitekta.net",
    description: `Arhitekta.net će vam pomoći u izgradnji od ideje i sna, preko
                crteža i 3D modela do stvarnosti. Mi smo umetnici sa licencom
                inženjera.`,
    "og:image": "https://media.graphcms.com/9n3oLaPnSFmBduPK1jNF",
    "og:description": `Arhitekta.net će vam pomoći u izgradnji od ideje i sna, preko crteža i 3D modela do stvarnosti. Mi smo umetnici sa licencom inženjera.`,
    "og:title": `Arhitekta.net`,
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <>
      <div className="relative z-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8  bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">{`Mi projektujemo kuće, od kojih Vi `}</span>
                  <span className="block text-yellow-500 xl:inline">
                    pravite dom.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Arhitekta.net će vam pomoći u izgradnji od ideje i sna, preko
                  crteža i 3D modela do stvarnosti. Mi smo umetnici sa licencom
                  inženjera.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-left">
                  <div className="rounded-md shadow">
                    <a
                      href=" mailto:jelena@arhitekta.net?subject=Konsultacije%20u%20vezi%20konstrukcije&body=%5Bunesite%20vase%20pitanje%2C%20broj%20parcele%20ili%20zeljenu%20kvadraturu%5D"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                    >
                      Zakažite konsultaciju
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://media.graphcms.com/9n3oLaPnSFmBduPK1jNF"
            alt="Prizemna kuća"
          />
        </div>
      </div>
      <ProjectsSection projects={data?.projects} />
      <FeaturesSection />
    </>
  );
}
