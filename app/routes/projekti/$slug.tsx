import { LoaderFunction, useLoaderData } from "remix";
import { getProject } from "../../Projects";

export let loader: LoaderFunction = async ({ params }: any) => {
  return getProject(params.slug);
};

export default function ProjectSlug() {
  const project = useLoaderData();
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <article
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: project.html }}
          ></article>
        </div>
      </div>
    </section>
  );
}
