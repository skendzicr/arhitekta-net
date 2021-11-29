import {LoaderFunction, useLoaderData} from 'remix';
import { getProject } from "../../Projects";

export let loader:LoaderFunction = async ({ params }: any) => {
  return getProject(params.slug);
};

export default function ProjectSlug() {
  const project = useLoaderData();
  return <div dangerouslySetInnerHTML={{ __html: project.html }}></div>;
}
