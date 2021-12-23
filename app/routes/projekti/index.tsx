import { Link, useLoaderData } from "remix";
import { Project } from "../../types";
import { getProjects } from "../../Projects";
import { Fragment } from "react";
import BlogCard from "~/components/BlogCard";

export let loader = (): Promise<Project[]> => {
  return getProjects();
};

export default function Projects() {
  let projects = useLoaderData<Project[]>();
  return (
    <div>
      <h1>Projects</h1>
        {projects.map((project) => (
          <Fragment key={project.slug}>
            <BlogCard blogPost={project} />
          </Fragment>
        ))}
    </div>
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
