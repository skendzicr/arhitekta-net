import { Link, MetaFunction, useLoaderData } from "remix";
import { Project } from "../../types";
import { getProjects } from "../../Projects";
import GraphImage from "@graphcms/react-image";

export let loader = () => getProjects();

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Projekti | Arhitekta.net",
    description: `Poslednji projekti na kojima smo radili zajedno sa našim klijentima i partnerima`,
    "og:image":
      "https://media.graphcms.com/output=format:webp/9n3oLaPnSFmBduPK1jNF",
    "og:description": `Poslednji projekti na kojima smo radili zajedno sa našim klijentima i partnerima`,
    "og:title": `Projekti | Arhitekta.net`,
  };
};

export default function Projects() {
  let { projects } = useLoaderData<{ projects: Project[] }>();
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-indigo-500">Projekti</span>
          </h1>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {projects?.map((project) => (
              <article key={project.title} className="group relative">
                <GraphImage
                  image={{
                    handle: project.heroImage.handle,
                    width: 800,
                    height: 800,
                  }}
                  maxWidth={800}
                  withWebp={true}
                  alt={project.description}
                  className='w-full h-full object-center object-cover rounded-lg group-hover:opacity-75  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'
                />
                <h2 className="mt-6 text-sm text-gray-500">
                  <Link to={`./${project.slug}`}>
                    <span className="absolute inset-0" />
                    {project.category}
                  </Link>
                </h2>
                <p className="text-base text-gray-900 max-w-prose truncate">
                  {project.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Imamo problem!</h1>
      <p>{error.message}</p>
      <p>{error.name}</p>
      <p>{error.stack}</p>
      <hr />
      <p>Greška je nastala u učitavanju projekata.</p>
    </div>
  );
}
