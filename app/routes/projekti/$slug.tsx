import { json, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getProject } from "../../Projects";
import Artwork from "../../components/Artwork";
import { Project } from "~/types";
import { marked } from "marked";

export let loader: LoaderFunction = async ({ params }: any) => {
  let { project } = await getProject(params.slug);
  return json({ project: { ...project, body: marked(project.body) } });
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = ({ data }) => {
  const { project } = data;
  return {
    title: `${project.title} | Arhitekta.net`,
    description: project.description,
    "og:image": project.heroImage.url,
    "og:description": project.description,
    "og:title": `${project.title} | Arhitekta.net`,
  };
};

export default function ProjectSlug() {
  const { project } = useLoaderData<{ project: Project }>();
  return (
    <section className="bg-white rounded p-6 md:p-7 lg:p-9">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:max-w-5xl">
        <h2 className="font-bold text-yellow-500">{project.category}</h2>
        <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2">
          {project.title}
        </h1>
        <article
          className="prose lg:prose-xl mx-auto mt-4 md:mt-6"
          dangerouslySetInnerHTML={{ __html: project.body }}
        ></article>
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {project.images.map((image) => (
                <div
                  className="flex flex-wrap w-1/3 cursor-pointer"
                  key={image.id}
                >
                  <div className="w-full aspect-video p-1 md:p-2">
                    <Artwork source={image.url}>
                      <img
                          loading='lazy'
                        alt={image.url}
                        className="block object-fill object-center w-full h-full rounded-lg hover:scale-110 hover:opacity-50"
                        src={image.url}
                      />
                    </Artwork>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
