import { FC } from "react";
import { Project } from "../types";
import GraphImage from "@graphcms/react-image";

const ProjectsSection: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900" id="projekti">
            Poslednji projekti
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {projects?.map((project) => (
              <article key={project.title} className="group relative ">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <GraphImage
                    image={{
                      handle: project.heroImage.handle,
                      width: 800,
                      height: 800,
                    }}
                    maxWidth={800}
                    withWebp={true}
                    alt={project.description}
                  />
                </div>
                <h3 className="mt-6 text-sm text-yellow-500">
                  <a href={`projekti/${project.slug}`}>
                    <span className="absolute inset-0" />
                    {project.category}
                  </a>
                </h3>
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
};
export default ProjectsSection;
