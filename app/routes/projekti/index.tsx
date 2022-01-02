import { Link, useLoaderData } from "remix";
import { Project } from "../../types";
import { getProjects } from "../../Projects";

export let loader = (): Promise<Project[]> => {
  return getProjects();
};

export default function Projects() {
  let projects = useLoaderData<Project[]>();
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-green-700">Projekti</span>
          </h1>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {projects?.map((project) => (
              <article key={project.meta.title} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={project.meta.image}
                    alt={project.meta.description}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={`./${project.slug}`}>
                    <span className="absolute inset-0" />
                    {project.meta.category}
                  </Link>
                </h3>
                <p className="text-base text-gray-900 max-w-prose truncate">
                  {project.meta.title}
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
