import {Link, useLoaderData} from 'remix';
import {Project} from '../../types';
import {getProjects} from '../../Projects';

export let loader = ():Project[] => {
  return getProjects()

};



export default function Projects() {
  let projects = useLoaderData<Project[]>();
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(projects => (
          <li key={projects.slug}>
            <Link to={projects.slug}>{projects.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
