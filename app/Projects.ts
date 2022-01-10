import { Project } from "~/types";
import * as path from "path";
import * as fs from "fs/promises";
import parseFrontMatter from "front-matter";
import { marked } from "marked";
import { gql, GraphQLClient } from "graphql-request";

const GetProjectsQuery = gql`
  {
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

export const getProjects = async (): Promise<{ projects: Project[] }> =>
  graphcms.request(GetProjectsQuery);

export const getProject = async (slug: string): Promise<{project:Project}> => graphcms.request(GetSingleProjectBySlug,{slug})

