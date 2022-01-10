import { Project } from "~/types";
import * as path from "path";
import * as fs from "fs/promises";
import parseFrontMatter from "front-matter";
import { marked } from "marked";

// relative to the server output not the source!
const postsPath = path.join(__dirname, "../../../..", "projects");
const imagesPath = path.join(__dirname, "../../../..", "public","assets","images")

export const getProjects = async (): Promise<Project[]> => {
  const projects = await fs.readdir(postsPath);
  return Promise.all(
    projects.map(async (filename) => {
      const fileLocation = path.join(postsPath, filename);
      const file = await fs.readFile(fileLocation);
      const time = await fs.stat(fileLocation);
      const { attributes } = parseFrontMatter<Project>(file.toString());
      return {
        ...attributes,
        slug: filename.replace(/\.md$/, ""),
        title: attributes.meta.title,
        time: time.mtime.getTime(),
      };
    })
  );
};

export const getProject = async (slug: string) => {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter<Project>(file.toString());
  const html = marked(body);
  const images = await getProjectImages(slug);
  return {
    slug,
    html,
    title: attributes.meta.title,
    description: attributes.meta.description,
    heroImage: attributes.meta.image,
    images,
    category: attributes.meta.category,
      imagesPath
  };
};

export const getProjectImages = async (slug: string) => {
    try {
        const files = await fs.readdir(imagesPath);
        return files.filter((file) => file.includes(slug));
    } catch (e) {
        return []
    }
};

