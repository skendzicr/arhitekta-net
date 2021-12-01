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
var import_remix3 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-UAMBLTUS.css";

// app/components/Header.tsx
var import_react2 = __toModule(require("react"));

// app/components/Logo.tsx
var import_react = __toModule(require("react"));
var Logo = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  viewBox: "0 0 659 165",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-labelledby": "remix-run-logo-title",
  role: "img",
  width: "106",
  height: "30",
  fill: "currentColor"
}, /* @__PURE__ */ import_react.default.createElement("title", {
  id: "remix-run-logo-title"
}, "Remix Logo"), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
}), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
}), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
}), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
}), /* @__PURE__ */ import_react.default.createElement("path", {
  d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
}));
var Logo_default = Logo;

// app/components/TailwindLink.tsx
var import_remix2 = __toModule(require("remix"));
var TailwindLink = ({
  to,
  linkText
}) => {
  return /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to,
    className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
  }, linkText);
};
var TailwindLink_default = TailwindLink;

// app/components/Header.tsx
var Header = () => /* @__PURE__ */ import_react2.default.createElement("header", null, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "relative pt-6 px-4 sm:px-6 lg:px-8"
}, /* @__PURE__ */ import_react2.default.createElement("nav", {
  className: "relative flex items-center justify-between sm:h-10 lg:justify-start",
  "aria-label": "Main navigation"
}, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
}, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "flex items-center justify-between w-full md:w-auto"
}, /* @__PURE__ */ import_react2.default.createElement("a", {
  href: "#"
}, /* @__PURE__ */ import_react2.default.createElement("span", {
  className: "sr-only"
}, "Arhitekta.net"), /* @__PURE__ */ import_react2.default.createElement(Logo_default, null)), /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "-mr-2 flex items-center md:hidden"
}, /* @__PURE__ */ import_react2.default.createElement("button", {
  type: "button",
  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
  "aria-expanded": "false"
}, /* @__PURE__ */ import_react2.default.createElement("span", {
  className: "sr-only"
}, "Otvori glavni meni"), /* @__PURE__ */ import_react2.default.createElement("svg", {
  className: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react2.default.createElement("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h16M4 18h16"
})))))), /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "hidden md:block md:ml-10 md:pr-4 md:space-x-8"
}, /* @__PURE__ */ import_react2.default.createElement(TailwindLink_default, {
  to: "/",
  linkText: "Home"
}), /* @__PURE__ */ import_react2.default.createElement(TailwindLink_default, {
  to: "/projects",
  linkText: "Projekti"
})))), /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
}, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
}, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "px-5 pt-4 flex items-center justify-between"
}, /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "-mr-2"
}, /* @__PURE__ */ import_react2.default.createElement("button", {
  type: "button",
  className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
}, /* @__PURE__ */ import_react2.default.createElement("span", {
  className: "sr-only"
}, "Close main menu"), /* @__PURE__ */ import_react2.default.createElement("svg", {
  className: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react2.default.createElement("path", {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2",
  d: "M6 18L18 6M6 6l12 12"
}))))), /* @__PURE__ */ import_react2.default.createElement("div", {
  className: "px-2 pt-2 pb-3 space-y-1"
}, /* @__PURE__ */ import_react2.default.createElement(TailwindLink_default, {
  to: "/",
  linkText: "Home"
}), /* @__PURE__ */ import_react2.default.createElement(TailwindLink_default, {
  to: "/projects",
  linkText: "Projekti"
})))));
var Header_default = Header;

// app/components/Footer.tsx
var import_react3 = __toModule(require("react"));
var Footer = () => {
  return /* @__PURE__ */ import_react3.default.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ import_react3.default.createElement("p", null, "\xA9 arhitekta.net 2021.")));
};
var Footer_default = Footer;

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: global_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
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
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative bg-white overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
  }, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement(Footer_default, null))));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/projects/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => ProjectSlug,
  loader: () => loader
});
var import_remix4 = __toModule(require("remix"));

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
  const project = (0, import_remix4.useLoaderData)();
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
var import_remix5 = __toModule(require("remix"));
var import_react4 = __toModule(require("react"));

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
  let projects = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Projects"), projects.map((project) => /* @__PURE__ */ React.createElement(import_react4.Fragment, {
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
var import_react5 = __toModule(require("react"));
var import_remix6 = __toModule(require("remix"));
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix6.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix6.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix6.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix6.useActionData)();
  let answerRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix6.Form, {
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
var import_remix7 = __toModule(require("remix"));
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
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
var import_remix8 = __toModule(require("remix"));
var loader3 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix8.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix8.useCatch)();
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
var import_remix9 = __toModule(require("remix"));
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
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix9.Outlet, null)));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_remix10 = __toModule(require("remix"));
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/Users/skendza/WebstormProjects/arhitekta-net-old/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
var import_remix11 = __toModule(require("remix"));
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix11.Link, {
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
var import_remix12 = __toModule(require("remix"));
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
  return (0, import_remix12.json)(data);
};
var meta5 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  let data = (0, import_remix12.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(import_remix12.Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))));
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
