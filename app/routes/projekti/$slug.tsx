import { LoaderFunction, useLoaderData } from "remix";
import { getProject } from "../../Projects";

export let loader: LoaderFunction = async ({ params }: any) => {
  return getProject(params.slug);
};

export default function ProjectSlug() {
  const project = useLoaderData();
  return (
    <section className="bg-white rounded p-6 md:p-7 lg:p-9">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:max-w-5xl">
        <h2 className="font-bold text-purple-500">{project.category}</h2>
        <h1 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl mt-2">
          {project.title}
        </h1>
        <article
          className="prose lg:prose-xl mx-auto mt-4 md:mt-6"
          dangerouslySetInnerHTML={{ __html: project.html }}
        ></article>
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {project.images.map((image: string) => (
                <div
                  className="flex flex-wrap w-1/3 hover:scale-110 cursor-pointer"
                  key={image}
                >
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt={image}
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={`/assets/images/${image}`}
                    />
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