import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-R5U63JRH.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/skendza/WebstormProjects/arhitekta-net/app/routes/projects/index.tsx?browser
init_react();

// app/routes/projects/index.tsx
init_react();

// components/BlogCard.tsx
init_react();
var BlogCard = ({ blogPost }) => /* @__PURE__ */ React.createElement("div", {
  className: "overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
}, /* @__PURE__ */ React.createElement("a", {
  href: "#",
  className: "w-full block h-full"
}, /* @__PURE__ */ React.createElement("img", {
  alt: "blog photo",
  src: blogPost.image,
  className: "max-h-40 w-full object-cover"
}), /* @__PURE__ */ React.createElement("div", {
  className: "bg-white dark:bg-gray-800 w-full p-4"
}, /* @__PURE__ */ React.createElement("p", {
  className: "text-indigo-500 text-md font-medium"
}, blogPost.category), /* @__PURE__ */ React.createElement("p", {
  className: "text-gray-800 dark:text-white text-xl font-medium mb-2"
}, blogPost.title), /* @__PURE__ */ React.createElement("p", {
  className: "text-gray-400 dark:text-gray-300 font-light text-md"
}, blogPost.description))));
var BlogCard_default = BlogCard;

// app/routes/projects/index.tsx
var import_react = __toModule(require_react());
function Projects() {
  let projects = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Projects"), /* @__PURE__ */ React.createElement("ul", null, projects.map((project) => /* @__PURE__ */ React.createElement(import_react.Fragment, {
    key: project.slug
  }, /* @__PURE__ */ React.createElement(BlogCard_default, {
    blogPost: project
  }), /* @__PURE__ */ React.createElement(Link, {
    to: projects.slug
  }, projects.title)))));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Imamo problem!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Gre\u0161ka je nastala u u\u010Ditavanju projekata."));
}
export {
  ErrorBoundary,
  Projects as default
};
//# sourceMappingURL=/build/routes/projects/index-4ORHXPAE.js.map
