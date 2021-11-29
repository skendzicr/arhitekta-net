import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-R5U63JRH.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/skendza/WebstormProjects/arhitekta-net/remix/arhitekta-net/app/routes/projects/index.tsx?browser
init_react();

// app/routes/projects/index.tsx
init_react();
function Projects() {
  let projects = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Projects"), /* @__PURE__ */ React.createElement("ul", null, projects.map((projects2) => /* @__PURE__ */ React.createElement("li", {
    key: projects2.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: projects2.slug
  }, projects2.title)))));
}
export {
  Projects as default
};
//# sourceMappingURL=/build/routes/projects/index-T36H3B62.js.map
