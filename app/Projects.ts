import { Project } from "~/types";
import { gql, GraphQLClient } from "graphql-request";

const GetProjectsQuery = gql`
  query ProjectsQuery {
    projects {
      id
      title
      category
      heroImage {
        url
      }
      slug
      createdAt
    }
  }
`;

const GetFeaturedProjectsQuery = gql`
  query FeaturedProjectsQuery($featured: Boolean) {
    projects(where: { featured: $featured }) {
      id
      title
      category
      heroImage {
        url
      }
      slug
      createdAt
    }
  }
`;

const GetSingleProjectBySlug = gql`
  query ProjectPageQuery($slug: String!) {
    project(where: { slug: $slug }) {
      id
      body
      title
      category
      description
      heroImage {
        id
        url
      }
      images {
        id
        url
      }
    }
  }
`;

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cky92fy3e3d3p01z63svu6183/master"
);

export const getProjects = async (
): Promise<{ projects: Project[] }> =>
  graphcms.request(GetProjectsQuery);

export const getFeaturedProjects = async (
    featured: boolean | null = null
): Promise<{ projects: Project[] }> =>
    graphcms.request(GetFeaturedProjectsQuery, { featured });

export const getProject = async (slug: string): Promise<{ project: Project }> =>
  graphcms.request(GetSingleProjectBySlug, { slug });
