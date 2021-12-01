var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-2DVEKASP.css";

// app/components/Footer.tsx
var import_react = __toModule(require("react"));
var Footer = () => {
  return /* @__PURE__ */ import_react.default.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ import_react.default.createElement("p", null, "\xA9 arhitekta.net 2021.")));
};
var Footer_default = Footer;

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: global_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children, /* @__PURE__ */ React.createElement(Footer_default, null));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/projects/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => ProjectSlug,
  loader: () => loader
});
var import_remix3 = __toModule(require("remix"));

// app/Projects.ts
var path = __toModule(require("path"));
var fs = __toModule(require("fs/promises"));
var import_front_matter = __toModule(require("front-matter"));
var import_marked = __toModule(require("marked"));
var postsPath = path.join(__dirname, "..", "projects");
var getProjects = async () => {
  const dir = await fs.readdir(postsPath);
  return Promise.all(dir.map(async (filename) => {
    const file = await fs.readFile(path.join(postsPath, filename));
    const { attributes } = (0, import_front_matter.default)(file.toString());
    return __spreadProps(__spreadValues({}, attributes), {
      slug: filename.replace(/\.md$/, ""),
      title: attributes.meta.title
    });
  }));
};
var getProject = async (slug) => {
  const filepath = path.join(postsPath, slug + ".md");
  const file = await fs.readFile(filepath);
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  const html = (0, import_marked.marked)(body);
  return { slug, html, title: attributes.meta.title };
};

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/projects/$slug.tsx
var loader = async ({ params }) => {
  return getProject(params.slug);
};
function ProjectSlug() {
  const project = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: project.html }
  });
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/projects/index.tsx
var projects_exports = {};
__export(projects_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Projects,
  loader: () => loader2
});
var import_remix4 = __toModule(require("remix"));
var import_react2 = __toModule(require("react"));

// app/components/BlogCard.tsx
var BlogCard = ({ blogPost }) => /* @__PURE__ */ React.createElement("figure", {
  className: "overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
}, /* @__PURE__ */ React.createElement("a", {
  href: "#",
  className: "w-full block h-full"
}, /* @__PURE__ */ React.createElement("img", {
  alt: "blog photo",
  src: blogPost.meta.image,
  className: "max-h-40 w-full object-cover"
}), /* @__PURE__ */ React.createElement("div", {
  className: "bg-white dark:bg-gray-800 w-full p-4"
}, /* @__PURE__ */ React.createElement("p", {
  className: "text-indigo-500 text-md font-medium"
}, blogPost.meta.category), /* @__PURE__ */ React.createElement("p", {
  className: "text-gray-800 dark:text-white text-xl font-medium mb-2"
}, blogPost.meta.title), /* @__PURE__ */ React.createElement("p", {
  className: "text-gray-400 dark:text-gray-300 font-light text-md"
}, blogPost.meta.description))));
var BlogCard_default = BlogCard;

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/projects/index.tsx
var loader2 = () => {
  return getProjects();
};
function Projects() {
  let projects = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Projects"), projects.map((project) => /* @__PURE__ */ React.createElement(import_react2.Fragment, {
    key: project.slug
  }, /* @__PURE__ */ React.createElement(BlogCard_default, {
    blogPost: project
  }))));
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Imamo problem!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, error.name), /* @__PURE__ */ React.createElement("p", null, error.stack), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Gre\u0161ka je nastala u u\u010Ditavanju projekata."));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta
});
var import_react3 = __toModule(require("react"));
var import_remix5 = __toModule(require("remix"));
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix5.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix5.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix5.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix5.useActionData)();
  let answerRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
var import_remix6 = __toModule(require("remix"));
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => ParamDemo,
  loader: () => loader3,
  meta: () => meta3
});
var import_remix7 = __toModule(require("remix"));
var loader3 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix7.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix7.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary3({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  meta: () => meta4
});
var import_remix8 = __toModule(require("remix"));
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null)));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_remix9 = __toModule(require("remix"));
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
var import_remix10 = __toModule(require("remix"));
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader4,
  meta: () => meta5
});
var import_remix13 = __toModule(require("remix"));

// app/components/Header.tsx
var import_react5 = __toModule(require("react"));

// app/components/Logo.tsx
var import_react4 = __toModule(require("react"));
var Logo = () => /* @__PURE__ */ import_react4.default.createElement("svg", {
  viewBox: "0 0 659 165",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-labelledby": "remix-run-logo-title",
  role: "img",
  width: "106",
  height: "30",
  fill: "currentColor"
}, /* @__PURE__ */ import_react4.default.createElement("title", {
  id: "remix-run-logo-title"
}, "Arhitekta.net Logo"), /* @__PURE__ */ import_react4.default.createElement("svg", {
  id: "Layer_1",
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 381.8 75.84"
}, /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-a",
  className: "cls-1",
  d: "M106.42,68.13a0.63,0.63,0,0,1,.3.55,1.65,1.65,0,0,1-.6,1,43.82,43.82,0,0,0-5.92,8.28A57.36,57.36,0,0,0,95.79,88.1,78.25,78.25,0,0,0,92,112.28a19.31,19.31,0,0,0,1.15,7.47,4.1,4.1,0,0,0,4.06,2.66q4,0,7.62-5.62a0.5,0.5,0,0,1,.6,0,0.51,0.51,0,0,1,.2.6,27.49,27.49,0,0,1-5.77,6.82q-3.16,2.61-5.87,2.61a6.81,6.81,0,0,1-6.07-3.11q-2.06-3.11-2.06-8.83a77,77,0,0,1,1.81-16.35q-4.72,0-9.28.1t-8.88.3q-3.31,3.51-6.37,6.62t-6,5.72a69.87,69.87,0,0,1-16.5,11.44,42.05,42.05,0,0,1-18.61,4.11,14.27,14.27,0,0,1-8.68-2.41,11.28,11.28,0,0,1-4.31-6.12,15.57,15.57,0,0,1,.05-8.13,22.2,22.2,0,0,1,4.41-8.53,0.61,0.61,0,0,1,.7,0,0.88,0.88,0,0,1,.3,1A9.38,9.38,0,0,0,12,108.41a10.36,10.36,0,0,0,1.4,6.12,13.15,13.15,0,0,0,5.17,4.82,18,18,0,0,0,8.83,2,37.16,37.16,0,0,0,16-3.51,56.94,56.94,0,0,0,14.1-9.53q2.31-2,4.61-4.31l4.82-4.81q-3.51.2-6.62,0.45t-5.82.65c-0.34-.07-0.4-0.23-0.2-0.5a4.53,4.53,0,0,1,.9-0.85,6.58,6.58,0,0,1,1.45-.8,6.49,6.49,0,0,1,1.66-.45q1.3-.1,4.06-0.15t6.27-.15q5.62-5.82,12.49-12.59a196.18,196.18,0,0,1,16.3-14.2A123,123,0,0,0,83.5,66.88,69.48,69.48,0,0,0,69.7,65.43q-7.52,0-12.34,4.16T51.44,82.68a0.47,0.47,0,0,1-.55.4,0.68,0.68,0,0,1-.45-0.6q1.2-9.83,7.32-15t15.85-5.22a71.44,71.44,0,0,1,8.63.55q4.51,0.55,8.88,1.4t8.33,1.91Q103.41,67.13,106.42,68.13ZM88,97.23a79.79,79.79,0,0,1,4.51-14A62.12,62.12,0,0,1,99.6,70.64q-8.83,7.12-15.75,13.84T71.11,97.33q4.81-.1,9.48-0.1H88Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-r",
  className: "cls-1",
  d: "M119.46,104a22.1,22.1,0,0,1-.3,3.41q-0.3,1.91-.8,3.91a26.88,26.88,0,0,1,4.41-7.52,7,7,0,0,1,5.22-2.71,3.41,3.41,0,0,1,2.31.7,2.29,2.29,0,0,1,.8,1.81,6.55,6.55,0,0,1-.75,2.61,11.18,11.18,0,0,1-1.25,2.21,0.36,0.36,0,0,1-.4,0,0.43,0.43,0,0,1-.2-0.35,1.58,1.58,0,0,0-.55-1.2,2.39,2.39,0,0,0-1.66-.5q-3.51,0-6.37,4.77a55.54,55.54,0,0,0-5.27,13.69,1.31,1.31,0,0,1-.7.85,7.09,7.09,0,0,1-1.35.6,11.73,11.73,0,0,1-1.56.4,7.74,7.74,0,0,1-1.4.15q-1.11,0-.6-1.2,0.9-2.11,1.76-4.56t1.56-5q0.7-2.51,1.2-4.87t0.8-4.36a12.84,12.84,0,0,0,.15-2.31,0.76,0.76,0,0,0-.85-0.8,3.3,3.3,0,0,0-2.06.85,10.31,10.31,0,0,0-2,2.16,0.59,0.59,0,0,1-.75,0,0.46,0.46,0,0,1-.15-0.65,15.71,15.71,0,0,1,1.46-1.66,15.06,15.06,0,0,1,1.91-1.6,12.08,12.08,0,0,1,2.21-1.25,5.87,5.87,0,0,1,2.36-.5,2.7,2.7,0,0,1,2.21.75A3.38,3.38,0,0,1,119.46,104Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-h",
  className: "cls-1",
  d: "M129.5,125.92a227.22,227.22,0,0,1,10.38-31.1,142.07,142.07,0,0,1,12.39-23.58q6.52-9.73,13.19-15T178.15,51a6.22,6.22,0,0,1,4,1.15,6,6,0,0,1,2,2.81,6.74,6.74,0,0,1,.15,3.56,8.75,8.75,0,0,1-1.5,3.41,0.57,0.57,0,0,1-.6.2,0.46,0.46,0,0,1-.3-0.5,4,4,0,0,0-1.1-3.81Q179.15,56,175.64,56a19.73,19.73,0,0,0-10.28,2.91q-4.87,2.91-9.48,9.68a92.82,92.82,0,0,0-9,18,283.89,283.89,0,0,0-9,27.84,35.27,35.27,0,0,1,3.46-5.12,26.64,26.64,0,0,1,4.26-4.21,20.25,20.25,0,0,1,4.92-2.86,14.34,14.34,0,0,1,5.42-1.05,2.28,2.28,0,0,1,1.76.6,2,2,0,0,1,.55,1.41,6,6,0,0,1-.9,2.91,42.84,42.84,0,0,0-3.41,7.62,22.71,22.71,0,0,0-1.3,7.12,7.42,7.42,0,0,0,.3,2.31,1.12,1.12,0,0,0,1.1.9,3.52,3.52,0,0,0,2.21-1.05,10.31,10.31,0,0,0,2-2.36,0.46,0.46,0,0,1,.6,0,0.49,0.49,0,0,1,.2.55,13.06,13.06,0,0,1-3.66,3.91,7.53,7.53,0,0,1-4.26,1.71,3.62,3.62,0,0,1-3.91-4.21,22.94,22.94,0,0,1,.35-3.86q0.35-2.06.9-4.06a41.72,41.72,0,0,1,1.3-4,27.07,27.07,0,0,1,1.66-3.56,5.34,5.34,0,0,0,.5-1.71,0.85,0.85,0,0,0-1-.9,7.6,7.6,0,0,0-4.11,1.45,19,19,0,0,0-4.31,4.11,41.23,41.23,0,0,0-4.06,6.37,48.52,48.52,0,0,0-3.36,8.23,2.85,2.85,0,0,1-1.6,1.4,6.85,6.85,0,0,1-3.11.7Q129.29,126.82,129.5,125.92Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-i",
  className: "cls-1",
  d: "M164.81,108.16a0.31,0.31,0,0,1-.5-0.15,0.78,0.78,0,0,1-.1-0.65,54.35,54.35,0,0,1,10.33-6.22,0.76,0.76,0,0,1,.8.9q-1.3,2.31-2.56,5t-2.21,5.37a51.45,51.45,0,0,0-1.56,5.12,17.8,17.8,0,0,0-.6,4.06q0,2,1.4,2a3.21,3.21,0,0,0,2.16-1q1.05-1,2.46-2.46a0.34,0.34,0,0,1,.5,0,0.61,0.61,0,0,1,.1.75,26.71,26.71,0,0,1-4.36,4.21,7,7,0,0,1-4.16,1.61q-3.51,0-3.51-3.31a19.81,19.81,0,0,1,.55-4.26,38.24,38.24,0,0,1,1.5-5q1-2.56,2.11-5a32.76,32.76,0,0,1,2.36-4.26q-1.11.6-2.46,1.5A20.83,20.83,0,0,0,164.81,108.16Zm10.73-11.34a0.43,0.43,0,0,1-.65,0,2,2,0,0,1-.55-0.85,3.46,3.46,0,0,1-.2-1.2,2.2,2.2,0,0,1,.3-1.15,42.78,42.78,0,0,1,3.26-3.56,27.84,27.84,0,0,1,4.46-3.66,0.48,0.48,0,0,1,.5.15,0.39,0.39,0,0,1,.2.45,28.59,28.59,0,0,0-4,4.56A48.56,48.56,0,0,0,175.54,96.83Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-t",
  className: "cls-1",
  d: "M198.51,101.64a0.47,0.47,0,0,1,.4.55,1.13,1.13,0,0,1-.9.55q-1.51,0-3.46.1t-4.16.3a87.83,87.83,0,0,0-3.31,9.58,29.54,29.54,0,0,0-1.3,7.58q0,3.41,2.61,3.41t5.82-4.51a0.43,0.43,0,0,1,.55,0,0.68,0.68,0,0,1,.15.7,18.15,18.15,0,0,1-4.31,4.87,8.31,8.31,0,0,1-5.12,2.06,5.26,5.26,0,0,1-3.86-1.25,4.67,4.67,0,0,1-1.25-3.46,32.47,32.47,0,0,1,1.4-8,87.9,87.9,0,0,1,3.61-10.43,45.28,45.28,0,0,0-4.82.8q-0.5-.1-0.25-0.5a3.2,3.2,0,0,1,.9-0.85,7.57,7.57,0,0,1,1.56-.8,4.72,4.72,0,0,1,1.71-.35h0.8a3.28,3.28,0,0,0,.8-0.1q1.3-2.91,2.71-5.62t2.81-4.92a5.54,5.54,0,0,1,1.66-1.25,11.75,11.75,0,0,1,2.06-.85,8.25,8.25,0,0,1,1.66-.35q0.65,0,.55.35A65.38,65.38,0,0,0,194.15,95q-1.66,3.21-3.16,6.72,1.9-.1,3.86-0.1h3.66Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-e",
  className: "cls-1",
  d: "M218.78,106.16q0,5.72-15.15,7.83-0.1,1-.15,2c0,0.67-.05,1.37-0.05,2.11a6,6,0,0,0,1.2,4,4.75,4.75,0,0,0,3.81,1.4,8.09,8.09,0,0,0,3.91-1.1,9.37,9.37,0,0,0,3.21-2.81,0.4,0.4,0,0,1,.6.15,1,1,0,0,1,.1.75,18.22,18.22,0,0,1-5.07,4.46,12.44,12.44,0,0,1-6.57,1.86q-3.51,0-5.07-1.76a7.23,7.23,0,0,1-1.55-5,17.85,17.85,0,0,1,1.3-6.47,26.75,26.75,0,0,1,3.36-6.17,18.46,18.46,0,0,1,4.71-4.56,9.66,9.66,0,0,1,5.37-1.76,6.12,6.12,0,0,1,4.36,1.55A4.67,4.67,0,0,1,218.78,106.16Zm-8.73-2.41a4.88,4.88,0,0,0-4,2.16,14.12,14.12,0,0,0-2.26,6.67,18.36,18.36,0,0,0,7.12-1.86,3.91,3.91,0,0,0,2.31-3.36,3.79,3.79,0,0,0-.9-2.56A2.9,2.9,0,0,0,210.05,103.75Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-k",
  className: "cls-1",
  d: "M236.44,113.58a26,26,0,0,0,2.86,8.18q1.75,2.86,4.26,2.86a4,4,0,0,0,2-.5,7.34,7.34,0,0,0,2-1.91,0.58,0.58,0,0,1,.7.7,9.6,9.6,0,0,1-7.83,3.91,6.28,6.28,0,0,1-5.77-3.36q-2-3.36-3.16-10.08a0.65,0.65,0,0,1,.4-1,9.39,9.39,0,0,0,3.61.1,10.14,10.14,0,0,0,3.26-1.1,6.38,6.38,0,0,0,2.31-2.11,5.21,5.21,0,0,0,.85-2.91,2.22,2.22,0,0,0-2.51-2.51q-3.51,0-6.52,3.36t-4.41,9.88q-0.5,1.71-.9,3.56l-0.7,3.26a4.91,4.91,0,0,1-.4,1.15,2.4,2.4,0,0,1-.9.75,10,10,0,0,1-2,.7,8.26,8.26,0,0,1-1.81.3q-0.7,0-.6-1a164.62,164.62,0,0,1,5.37-21,150.55,150.55,0,0,1,7.27-18.21,111.71,111.71,0,0,1,8.58-14.95,77.91,77.91,0,0,1,9.18-11.19,41.31,41.31,0,0,1,9.13-7A17.92,17.92,0,0,1,269.24,51a6.89,6.89,0,0,1,4,1,4.9,4.9,0,0,1,2,2.56,6.67,6.67,0,0,1,.15,3.36,8.19,8.19,0,0,1-1.46,3.31q-0.7.7-.9-0.3A4.38,4.38,0,0,0,272,57q-1.5-1.9-5-1.91a19.55,19.55,0,0,0-10.48,3.16,35.4,35.4,0,0,0-9.78,9.83,86.91,86.91,0,0,0-9,17.06,191.28,191.28,0,0,0-8,24.83,19.3,19.3,0,0,1,5.07-6.27,11.51,11.51,0,0,1,7.47-2.56q2.91,0,3.86,1.46a5.21,5.21,0,0,1,1,2.86,6.66,6.66,0,0,1-3,5.47A14.53,14.53,0,0,1,236.44,113.58Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-t2",
  className: "cls-1",
  d: "M270.24,101.64a0.47,0.47,0,0,1,.4.55,1.13,1.13,0,0,1-.9.55q-1.51,0-3.46.1t-4.16.3a87.83,87.83,0,0,0-3.31,9.58,29.54,29.54,0,0,0-1.3,7.58q0,3.41,2.61,3.41t5.82-4.51a0.43,0.43,0,0,1,.55,0,0.68,0.68,0,0,1,.15.7,18.13,18.13,0,0,1-4.31,4.87,8.31,8.31,0,0,1-5.12,2.06,5.26,5.26,0,0,1-3.86-1.25,4.67,4.67,0,0,1-1.25-3.46,32.44,32.44,0,0,1,1.4-8,87.89,87.89,0,0,1,3.61-10.43,45.32,45.32,0,0,0-4.82.8q-0.5-.1-0.25-0.5a3.19,3.19,0,0,1,.9-0.85,7.58,7.58,0,0,1,1.55-.8,4.73,4.73,0,0,1,1.71-.35H257a3.29,3.29,0,0,0,.8-0.1q1.3-2.91,2.71-5.62t2.81-4.92A5.56,5.56,0,0,1,265,90.05,11.73,11.73,0,0,1,267,89.2a8.27,8.27,0,0,1,1.66-.35c0.43,0,.62.08,0.55,0.35A65.49,65.49,0,0,0,265.88,95q-1.66,3.21-3.16,6.72,1.91-.1,3.86-0.1h3.66Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-a2",
  className: "cls-1",
  d: "M297.23,120.5a0.36,0.36,0,0,1,.5,0,0.51,0.51,0,0,1,.2.6,16.48,16.48,0,0,1-4,4.16,7.39,7.39,0,0,1-4.21,1.55q-2.31,0-3-3.26a16.58,16.58,0,0,1,.65-7.77,39.26,39.26,0,0,1-5.87,7.37,12.71,12.71,0,0,1-6.67,3.66,4.09,4.09,0,0,1-3.71-2.21,9.86,9.86,0,0,1-1.3-5.12,14.75,14.75,0,0,1,1.6-6.57,21.46,21.46,0,0,1,4.26-5.87,23.77,23.77,0,0,1,5.92-4.26,14.38,14.38,0,0,1,6.57-1.66,8.26,8.26,0,0,1,5.52,1.71,9.62,9.62,0,0,1,2.56-1.2,9.14,9.14,0,0,1,2.76-.5,0.41,0.41,0,0,1,.4.5,31.83,31.83,0,0,0-4,6.17,40.67,40.67,0,0,0-2.56,6.42,27.65,27.65,0,0,0-1.1,5.47,5.56,5.56,0,0,0,.4,3.31,1.64,1.64,0,0,0,1.71.35Q295.12,123.11,297.23,120.5ZM278,123.11a5,5,0,0,0,3-1.5,26.08,26.08,0,0,0,3.66-4,60.84,60.84,0,0,0,3.76-5.62,56.67,56.67,0,0,0,3.26-6.32,3.65,3.65,0,0,0-1.86-2.11,6.86,6.86,0,0,0-3.36-.8,8.52,8.52,0,0,0-4.31,1.15,10.87,10.87,0,0,0-3.46,3.21,16.68,16.68,0,0,0-2.31,4.92,21.84,21.84,0,0,0-.85,6.27,7,7,0,0,0,.75,3.51A2.12,2.12,0,0,0,278,123.11Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "dot",
  className: "cls-1",
  d: "M304.55,126.82a2.07,2.07,0,0,1-1.46-.5,2.54,2.54,0,0,1-.55-1.91,3.23,3.23,0,0,1,.4-1.4,6.63,6.63,0,0,1,1.1-1.55,6.47,6.47,0,0,1,1.61-1.25,3.69,3.69,0,0,1,1.81-.5,1.62,1.62,0,0,1,1.1.45,1.49,1.49,0,0,1,.5,1.15,4.94,4.94,0,0,1-.4,1.81,6.24,6.24,0,0,1-1.1,1.81,8,8,0,0,1-1.5,1.35A2.7,2.7,0,0,1,304.55,126.82Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-n",
  className: "cls-1",
  d: "M343.08,119.8a0.34,0.34,0,0,1,.5,0,0.6,0.6,0,0,1,.2.65,22.67,22.67,0,0,1-4.16,4.41,7.45,7.45,0,0,1-4.67,1.91,3.32,3.32,0,0,1-2.66-1.1,4.29,4.29,0,0,1-1-2.91,26.24,26.24,0,0,1,1.25-7.62,53.53,53.53,0,0,1,3.36-8.33,3.78,3.78,0,0,0,.3-1.5,0.85,0.85,0,0,0-.9-1q-3.71,0-8.23,5.07t-8.33,16.1a1.12,1.12,0,0,1-.65.55,6.14,6.14,0,0,1-1.25.4c-0.47.1-.94,0.19-1.41,0.25a8.23,8.23,0,0,1-1.1.1,1.18,1.18,0,0,1-.75-0.2,0.57,0.57,0,0,1,0-.7q1.7-4.31,3.46-9.48t3.06-10.38a2.27,2.27,0,0,0,.1-1.46,0.71,0.71,0,0,0-.7-0.45,3,3,0,0,0-2.11,1,15.11,15.11,0,0,0-1.81,2.06,0.37,0.37,0,0,1-.55-0.1,0.6,0.6,0,0,1-.15-0.6,15.6,15.6,0,0,1,1.35-1.61,16.84,16.84,0,0,1,2-1.76,11.89,11.89,0,0,1,2.31-1.4,5.75,5.75,0,0,1,2.41-.55,2.31,2.31,0,0,1,2.26,1.05,3.8,3.8,0,0,1,.25,2.56q-0.5,2.21-1.05,4.16T323,113.28a28.8,28.8,0,0,1,3-4.36,27,27,0,0,1,3.91-3.91,19.07,19.07,0,0,1,4.67-2.81,13.59,13.59,0,0,1,5.32-1.05,2.64,2.64,0,0,1,1.86.6,1.86,1.86,0,0,1,.65,1.41,4.57,4.57,0,0,1-.7,2.51,53.56,53.56,0,0,0-3.56,7.88,21.88,21.88,0,0,0-1.45,7.27q0,2.61,1.71,2.61a3.49,3.49,0,0,0,2.21-.9A17.21,17.21,0,0,0,343.08,119.8Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-e2",
  className: "cls-1",
  d: "M367.66,106.16q0,5.72-15.15,7.83-0.1,1-.15,2c0,0.67-.05,1.37-0.05,2.11a6,6,0,0,0,1.2,4,4.75,4.75,0,0,0,3.81,1.4,8.09,8.09,0,0,0,3.91-1.1,9.37,9.37,0,0,0,3.21-2.81,0.4,0.4,0,0,1,.6.15,1,1,0,0,1,.1.75,18.22,18.22,0,0,1-5.07,4.46,12.44,12.44,0,0,1-6.57,1.86q-3.51,0-5.07-1.76a7.24,7.24,0,0,1-1.55-5,17.87,17.87,0,0,1,1.3-6.47,26.77,26.77,0,0,1,3.36-6.17,18.46,18.46,0,0,1,4.71-4.56,9.66,9.66,0,0,1,5.37-1.76,6.12,6.12,0,0,1,4.36,1.55A4.67,4.67,0,0,1,367.66,106.16Zm-8.73-2.41a4.88,4.88,0,0,0-4,2.16,14.12,14.12,0,0,0-2.26,6.67,18.36,18.36,0,0,0,7.12-1.86,3.91,3.91,0,0,0,2.31-3.36,3.79,3.79,0,0,0-.9-2.56A2.9,2.9,0,0,0,358.93,103.75Z",
  transform: "translate(-8.54 -50.98)"
}), /* @__PURE__ */ import_react4.default.createElement("path", {
  id: "letter-t3",
  className: "cls-1",
  d: "M389.93,101.64a0.47,0.47,0,0,1,.4.55,1.13,1.13,0,0,1-.9.55q-1.51,0-3.46.1t-4.16.3a87.83,87.83,0,0,0-3.31,9.58,29.54,29.54,0,0,0-1.3,7.58q0,3.41,2.61,3.41t5.82-4.51a0.43,0.43,0,0,1,.55,0,0.68,0.68,0,0,1,.15.7,18.13,18.13,0,0,1-4.31,4.87,8.31,8.31,0,0,1-5.12,2.06,5.26,5.26,0,0,1-3.86-1.25,4.67,4.67,0,0,1-1.25-3.46,32.44,32.44,0,0,1,1.4-8,87.89,87.89,0,0,1,3.61-10.43,45.32,45.32,0,0,0-4.82.8q-0.5-.1-0.25-0.5a3.19,3.19,0,0,1,.9-0.85,7.58,7.58,0,0,1,1.55-.8,4.73,4.73,0,0,1,1.71-.35h0.8a3.29,3.29,0,0,0,.8-0.1q1.3-2.91,2.71-5.62T383,91.31a5.56,5.56,0,0,1,1.66-1.25,11.73,11.73,0,0,1,2.06-.85,8.27,8.27,0,0,1,1.66-.35c0.43,0,.62.08,0.55,0.35A65.49,65.49,0,0,0,385.56,95q-1.66,3.21-3.16,6.72,1.91-.1,3.86-0.1h3.66Z",
  transform: "translate(-8.54 -50.98)"
})));
var Logo_default = Logo;

// app/components/TailwindLink.tsx
var import_remix11 = __toModule(require("remix"));
var TailwindLink = ({
  to,
  linkText
}) => {
  return /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to,
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
  }, linkText);
};
var TailwindLink_default = TailwindLink;

// app/components/Header.tsx
var import_react6 = __toModule(require("@headlessui/react"));
var import_remix12 = __toModule(require("remix"));
var Header = () => /* @__PURE__ */ import_react5.default.createElement("header", null, /* @__PURE__ */ import_react5.default.createElement(import_react6.Popover, null, /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "relative pt-6 px-4 sm:px-6 lg:px-8"
}, /* @__PURE__ */ import_react5.default.createElement("nav", {
  className: "relative flex items-center justify-between sm:h-10 lg:justify-start",
  "aria-label": "Main navigation"
}, /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
}, /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "flex items-center justify-between w-full md:w-auto"
}, /* @__PURE__ */ import_react5.default.createElement(import_remix12.Link, {
  to: "/"
}, /* @__PURE__ */ import_react5.default.createElement("span", {
  className: "sr-only"
}, "Arhitekta.net"), /* @__PURE__ */ import_react5.default.createElement(Logo_default, null)), /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "-mr-2 flex items-center md:hidden"
}, /* @__PURE__ */ import_react5.default.createElement(import_react6.Popover.Button, {
  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
}, /* @__PURE__ */ import_react5.default.createElement("span", {
  className: "sr-only"
}, "Open main menu"))))), /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "hidden md:flex md:ml-10 md:pr-4 md:space-x-8"
}, /* @__PURE__ */ import_react5.default.createElement(TailwindLink_default, {
  to: "/projects",
  linkText: "Projekti"
}), /* @__PURE__ */ import_react5.default.createElement(TailwindLink_default, {
  to: "/biography",
  linkText: "Biografija"
}), /* @__PURE__ */ import_react5.default.createElement(TailwindLink_default, {
  to: "/contact",
  linkText: "Kontakt"
})))), /* @__PURE__ */ import_react5.default.createElement(import_react6.Transition, {
  as: import_react5.Fragment,
  enter: "duration-150 ease-out",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "duration-100 ease-in",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95"
}, /* @__PURE__ */ import_react5.default.createElement(import_react6.Popover.Panel, {
  focus: true,
  className: "absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
}, /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
}, /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "px-5 pt-4 flex items-center justify-between"
}, /* @__PURE__ */ import_react5.default.createElement(Logo_default, null), /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "-mr-2"
}, /* @__PURE__ */ import_react5.default.createElement(import_react6.Popover.Button, {
  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
}, /* @__PURE__ */ import_react5.default.createElement("span", {
  className: "sr-only"
}, "Close main menu")))), /* @__PURE__ */ import_react5.default.createElement("div", {
  className: "px-2 pt-2 pb-3 space-y-1"
}, /* @__PURE__ */ import_react5.default.createElement(TailwindLink_default, {
  to: "/projects",
  linkText: "Projekti"
}), /* @__PURE__ */ import_react5.default.createElement(TailwindLink_default, {
  to: "/biography",
  linkText: "Biografija"
}), /* @__PURE__ */ import_react5.default.createElement(TailwindLink_default, {
  to: "/contact",
  linkText: "Kontakt"
})))))));
var Header_default = Header;

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/index.tsx
var loader4 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_remix13.json)(data);
};
var meta5 = () => {
  return {
    title: "Arhitekta.net",
    description: "Welcome to remix!"
  };
};
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-white overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",
    fill: "currentColor",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("polygon", {
    points: "50,0 100,0 50,100 0,100"
  })), /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:text-center lg:text-left"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block xl:inline"
  }, `Mi pravimo ku\u0107e, od kojih Vi `), /* @__PURE__ */ React.createElement("span", {
    className: "block text-indigo-600 xl:inline"
  }, "pravite dom.")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
  }, "Arhitekta.net \u0107e vam pomo\u0107i u izgradnji od ideje i sna, preko crte\u017Ea i 3D modela do stvarnosti. Mi smo umetnici sa licencom in\u017Eenjera."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 sm:mt-8 sm:flex sm:justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
  }, "Zaka\u017Eite konsultaciju"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Cara_Du%C5%A1ana_street_in_In%C4%91ija.jpg",
    alt: ""
  })));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/projects/$slug": {
    id: "routes/projects/$slug",
    parentId: "root",
    path: "projects/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/projects/index": {
    id: "routes/projects/index",
    parentId: "root",
    path: "projects",
    index: true,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
