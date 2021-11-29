import {
  useLoaderData
} from "/build/_shared/chunk-R5U63JRH.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/skendza/WebstormProjects/arhitekta-net/remix/arhitekta-net/app/routes/projects/$slug.tsx?browser
init_react();

// app/routes/projects/$slug.tsx
init_react();
function ProjectSlug() {
  let project = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: project.html }
  });
}
export {
  ProjectSlug as default
};
//# sourceMappingURL=/build/routes/projects/$slug-HI5ZPVFP.js.map
