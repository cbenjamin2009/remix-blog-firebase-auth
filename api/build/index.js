var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_stream = require("stream"), import_node = require("@remix-run/node"), import_node2 = require("@remix-run/node"), import_isbot = require("isbot"), import_server2 = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix.RemixServer, {
      context: remixContext,
      url: request.url
    })
  );
  return responseHeaders.set("Content-Type", "text/html"), new import_node2.Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix3 = __toESM(require_dist());

// app/styles/global.css
var global_default = "/build/_assets/global-LSFR4O4O.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// app/utils/firebase.js
var import_app = require("firebase/app"), import_auth = require("firebase/auth"), firebaseConfig = {
  apiKey: "AIzaSyDIOr7J-wUQrc3NF-q8hq1ys2g_zOIThxA",
  authDomain: "remix-blog-test.firebaseapp.com",
  projectId: "remix-blog-test",
  storageBucket: "remix-blog-test.appspot.com",
  messagingSenderId: "973022500535",
  appId: "1:973022500535:web:3729728efd750be88e1f32"
}, app = (0, import_app.initializeApp)(firebaseConfig), auth = (0, import_auth.getAuth)(app);

// app/root.jsx
var import_remix4 = __toESM(require_dist());

// app/sessions.server.jsx
var import_remix2 = __toESM(require_dist()), { getSession, commitSession, destroySession } = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "fb:token",
    expires: new Date(Date.now() + 600),
    httpOnly: !0,
    maxAge: 600,
    path: "/",
    sameSite: "lax",
    secrets: ["t@c0s"],
    secure: !0
  }
});

// app/root.jsx
var import_jsx_runtime = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: dark_default,
    media: "(prefers-color-scheme: dark)"
  }
];
async function loader({ request }) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has("access_token")) {
    let data = { user: auth.currentUser, error: session.get("error") };
    return (0, import_remix4.json)(data, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } else
    return null;
}
var action = async ({ request }) => {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  return session.has("access_token") ? (0, import_remix3.redirect)("/", {
    headers: { "Set-Cookie": await destroySession(session) }
  }) : (auth.signOut(), (0, import_remix3.redirect)("/"));
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Outlet, {})
    })
  });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            children: "There was an error"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: error.message
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: "Hey, developer, you should replace this with what you want your users to see."
          })
        ]
      })
    })
  });
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Oops! Looks like you tried to visit a page that you do not have access to. Maybe try logging in first? ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Link, {
            to: "/login",
            children: "Login"
          })
        ]
      });
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Oops! Error 404 has been encountered"
      });
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    title: `${caught.status} ${caught.statusText}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
          children: [
            caught.status,
            ": ",
            caught.statusText
          ]
        }),
        message
      ]
    })
  });
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }),
          title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
            children: title
          }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Scripts, {}),
          !1
        ]
      })
    ]
  });
}
function Layout({ children }) {
  let data = (0, import_remix4.useLoaderData)(), loggedIn = data == null ? void 0 : data.user;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "remix-app",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
        className: "remix-app__header",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "container remix-app__header-content",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Link, {
              to: "/",
              title: "Remix",
              className: "remix-app__header-home-link",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemixLogo, {})
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
              "aria-label": "Main navigation",
              className: "remix-app__header-nav",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Link, {
                      to: "/",
                      children: "Home"
                    })
                  }),
                  loggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Form, {
                      method: "post",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        type: "submit",
                        className: "navLogoutButton",
                        children: "Logout"
                      })
                    })
                  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Link, {
                      to: "/login",
                      children: "Login"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix3.Link, {
                      to: "/blogs",
                      children: "Blogs"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                      href: "https://remix.run/docs",
                      children: "Remix Docs"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                      href: "https://github.com/remix-run/remix",
                      children: "GitHub"
                    })
                  })
                ]
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "remix-app__main",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "container remix-app__main-content",
          children
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
        className: "remix-app__footer",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "container remix-app__footer-content",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: "\xA9 You!"
          })
        })
      })
    ]
  });
}
function RemixLogo(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor",
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
        id: "remix-run-logo-title",
        children: "Remix Logo"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
      })
    ]
  });
}

// app/routes/test/cloudinary-upload.tsx
var cloudinary_upload_exports = {};
__export(cloudinary_upload_exports, {
  action: () => action2,
  default: () => Index,
  uploadImage: () => uploadImage
});
var import_node3 = require("@remix-run/node"), import_react = require("@remix-run/react"), import_cloudinary = __toESM(require("cloudinary")), import_node4 = require("@remix-run/node"), import_jsx_runtime = require("react/jsx-runtime");
import_cloudinary.default.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
async function uploadImage(data) {
  return new Promise(async (resolve, reject) => {
    let uploadStream = import_cloudinary.default.v2.uploader.upload_stream(
      {
        folder: "remix"
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result), console.log(result);
      }
    );
    await (0, import_node4.writeAsyncIterableToWritable)(data, uploadStream);
  });
}
var action2 = async ({ request }) => {
  let uploadHandler = (0, import_node3.unstable_composeUploadHandlers)(
    async ({ name, contentType, data, filename }) => name !== "img" ? void 0 : (await uploadImage(data)).secure_url,
    (0, import_node3.unstable_createMemoryUploadHandler)()
  ), formData = await (0, import_node3.unstable_parseMultipartFormData)(request, uploadHandler), imgSrc = formData.get("img"), imgDesc = formData.get("desc"), ImgTest = imgSrc.replace("h", "");
  return imgSrc ? (0, import_node3.json)({
    imgSrc,
    imgDesc,
    ImgTest
  }) : (0, import_node3.json)({
    error: "something wrong"
  });
};
function Index() {
  let data = (0, import_react.useActionData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Form, {
        method: "post",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "img-field",
            children: "Image to upload"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            id: "img-field",
            type: "file",
            name: "img",
            accept: "image/*"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "img-desc",
            children: "Image description"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            id: "img-desc",
            type: "text",
            name: "desc"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "submit",
            children: "upload to cloudinary"
          })
        ]
      }),
      (data == null ? void 0 : data.errorMsg) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: data.errorMsg
      }),
      (data == null ? void 0 : data.imgSrc) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            children: "uploaded image"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: data.imgSrc,
            alt: data.imgDesc || "Upload result",
            style: { width: "400px" }
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
            children: [
              "Image Id: ",
              data.imgSrc
            ]
          })
        ]
      })
    ]
  });
}

// app/routes/test/local-upload.tsx
var local_upload_exports = {};
__export(local_upload_exports, {
  action: () => action3,
  default: () => Index2
});
var import_node5 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), action3 = async ({ request }) => {
  let uploadHandler = (0, import_node5.unstable_composeUploadHandlers)(
    (0, import_node5.unstable_createFileUploadHandler)({
      directory: "public/uploads",
      maxPartSize: 3e4
    }),
    (0, import_node5.unstable_createMemoryUploadHandler)()
  ), image = (await (0, import_node5.unstable_parseMultipartFormData)(request, uploadHandler)).get("img");
  return !image || typeof image == "string" ? (0, import_node5.json)({
    error: "something wrong"
  }) : (0, import_node5.json)({
    imgSrc: image.name
  });
};
function Index2() {
  let data = (0, import_react2.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react2.Form, {
        method: "post",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            type: "file",
            name: "img",
            accept: "image/*"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "submit",
            children: "upload image"
          })
        ]
      }),
      (data == null ? void 0 : data.errorMsg) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: data.errorMsg
      }),
      (data == null ? void 0 : data.imgSrc) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            children: "uploaded image"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            alt: "uploaded",
            src: data.imgSrc
          })
        ]
      })
    ]
  });
}

// app/routes/test/utils.server.ts
var utils_server_exports = {};
__export(utils_server_exports, {
  uploadImage: () => uploadImage2
});
var import_cloudinary2 = __toESM(require("cloudinary")), import_node6 = require("@remix-run/node");
import_cloudinary2.default.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
async function uploadImage2(data) {
  return new Promise(async (resolve, reject) => {
    let uploadStream = import_cloudinary2.default.v2.uploader.upload_stream(
      {
        folder: "remix"
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result), console.log(result);
      }
    );
    await (0, import_node6.writeAsyncIterableToWritable)(data, uploadStream);
  });
}

// app/routes/auth/register.jsx
var register_exports = {};
__export(register_exports, {
  action: () => action4,
  default: () => Register,
  links: () => links2
});
var import_auth2 = require("@firebase/auth"), import_remix5 = __toESM(require_dist());

// app/styles/auth.css
var auth_default = "/build/_assets/auth-G2BXVUE3.css";

// app/routes/auth/register.jsx
var import_jsx_runtime = require("react/jsx-runtime"), links2 = () => [{ rel: "stylesheet", href: auth_default }], action4 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  await auth.signOut();
  let { session: sessionData, user, error: signUpError } = await (0, import_auth2.createUserWithEmailAndPassword)(auth, email, password);
  if (!signUpError) {
    let session = await getSession(request.headers.get("Cookie"));
    return session.set("access_token", auth.currentUser.access_token), (0, import_remix5.redirect)("/blogs", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return { user, signUpError };
};
function Register() {
  var _a;
  let actionData = (0, import_remix5.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "loginContainer",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "authTitle",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          children: "Register"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix5.Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "email",
            children: "Email"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            className: "loginInput",
            type: "email",
            name: "email",
            placeholder: "you@awesome.dev",
            required: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "password",
            children: "Password"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            className: "loginInput",
            type: "password",
            name: "password",
            required: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: "loginButton",
            type: "submit",
            children: "Register"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "additionalLinks",
        children: [
          "Already Registered?  ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix5.Link, {
            to: "/login",
            children: "Login"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "errors",
        children: actionData != null && actionData.error ? (_a = actionData == null ? void 0 : actionData.error) == null ? void 0 : _a.message : null
      })
    ]
  });
}

// app/routes/demos/actions.jsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action5,
  default: () => ActionsDemo,
  meta: () => meta
});
var import_react3 = require("react"), import_remix6 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime");
function meta() {
  return { title: "Actions Demo" };
}
var action5 = async ({ request }) => {
  let answer = (await request.formData()).get("answer");
  return typeof answer != "string" ? (0, import_remix6.json)("Come on, at least try!", { status: 400 }) : answer !== "egg" ? (0, import_remix6.json)(`Sorry, ${answer} is not right.`, { status: 400 }) : (0, import_remix6.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix6.useActionData)(), answerRef = (0, import_react3.useRef)(null);
  return (0, import_react3.useEffect)(() => {
    actionMessage && answerRef.current && answerRef.current.select();
  }, [actionMessage]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "remix__page",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            children: "Actions!"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix6.Form, {
            method: "post",
            className: "remix__form",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                children: "Post an Action"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                  children: "What is more useful when it is broken?"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    children: "Answer:"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    ref: answerRef,
                    name: "answer",
                    type: "text"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  children: "Answer!"
                })
              }),
              actionMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
                  children: actionMessage
                })
              }) : null
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            children: "Additional Resources"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                children: [
                  "Guide:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: "https://remix.run/guides/data-writes",
                    children: "Data Writes"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                children: [
                  "API:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: "https://remix.run/api/conventions#action",
                    children: "Route Action Export"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                children: [
                  "API:",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: "https://remix.run/api/remix#useactiondata",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                      children: "useActionData"
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

// app/routes/demos/correct.jsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
var import_jsx_runtime = require("react/jsx-runtime");
function NiceWork() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
    children: "You got it right!"
  });
}

// app/routes/demos/params.jsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
var import_remix7 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime");
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "remix__page",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix7.Outlet, {})
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            children: "Click these Links"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix7.Link, {
                  to: ".",
                  children: "Start over"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix7.Link, {
                  to: "one",
                  children: [
                    "Param: ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                      children: "one"
                    })
                  ]
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix7.Link, {
                  to: "two",
                  children: [
                    "Param: ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                      children: "two"
                    })
                  ]
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix7.Link, {
                  to: "this-record-does-not-exist",
                  children: "This will be a 404"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix7.Link, {
                  to: "shh-its-a-secret",
                  children: "And this will be 401 Unauthorized"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix7.Link, {
                  to: "kaboom",
                  children: "This one will throw an error"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}

// app/routes/demos/params/index.jsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
var import_jsx_runtime = require("react/jsx-runtime");
function Boundaries2() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Params"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "When you name a route segment with $ like",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "routes/users/$userId.js"
          }),
          ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Errors"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "So be as granular as you want with your error handling."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Not Found"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "(and other",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses",
            children: "client errors"
          }),
          ")"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Loaders and Actions can throw a ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "Response"
          }),
          " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."
        ]
      })
    ]
  });
}

// app/routes/demos/params/$id.jsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader2,
  meta: () => meta3
});
var import_remix8 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime"), loader2 = async ({ params }) => {
  if (params.id === "this-record-does-not-exist")
    throw new Response("Not Found", { status: 404 });
  if (params.id === "shh-its-a-secret")
    throw (0, import_remix8.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  return params.id === "kaboom" && lol(), { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
    children: [
      "The param is ",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
        style: { color: "red" },
        children: data.param
      })
    ]
  });
}
function CatchBoundary2() {
  let caught = (0, import_remix8.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (",
          caught.data.webmasterEmail,
          ") for access."
        ]
      });
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Looks like you tried to visit a page that does not exist."
      });
    default:
      message = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "There was a problem with your request!",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          caught.status,
          " ",
          caught.statusText
        ]
      });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Oops!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"
      })
    ]
  });
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Error!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: error.message
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"
      })
    ]
  });
}
var meta3 = ({ data }) => ({
  title: data ? `Param: ${data.param}` : "Oops..."
});

// app/routes/auth/forgot.jsx
var forgot_exports = {};
__export(forgot_exports, {
  action: () => action6,
  default: () => Login,
  links: () => links3
});
var import_auth4 = require("@firebase/auth"), import_remix9 = __toESM(require_dist());
var import_jsx_runtime = require("react/jsx-runtime"), links3 = () => [{ rel: "stylesheet", href: auth_default }], action6 = async ({ request }) => {
  let email = (await request.formData()).get("email");
  try {
    await (0, import_auth4.sendPasswordResetEmail)(auth, email);
  } catch (err) {
    console.log("Error: ", err.message);
  }
  return (0, import_remix9.redirect)("/login");
};
function Login() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "loginContainer",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "authTitle",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          children: "Forgot Password?"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix9.Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: "Enter the email address associated with your account"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            className: "loginInput",
            type: "email",
            name: "email",
            placeholder: "you@awesome.dev",
            required: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: "loginButton",
            type: "submit",
            children: "Submit"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "additionalLinks",
        children: [
          "Not Yet Registered?  ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix9.Link, {
            to: "/auth/register",
            children: "Register"
          })
        ]
      })
    ]
  });
}

// app/routes/blogs/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  links: () => links4,
  loader: () => loader3
});
var import_remix10 = __toESM(require_dist()), import_tiny_invariant = require("tiny-invariant");

// app/post.js
var import_client = require("@prisma/client"), import_marked = require("marked"), prisma = new import_client.PrismaClient();
async function getPost(slug) {
  await prisma.$connect();
  let foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  }), id = foundSlug.id, title = foundSlug.title, html = (0, import_marked.marked)(foundSlug.markdown), imgSrc = foundSlug.imgSrc;
  return prisma.$disconnect(), { id, slug, title, imgSrc, html };
}
async function getPostEdit(slug) {
  await prisma.$connect();
  let foundSlug = await prisma.posts.findFirst({
    where: {
      slug
    }
  }), id = foundSlug.id, title = foundSlug.title, markdown = foundSlug.markdown, imgSrc = foundSlug.imgSrc;
  return prisma.$disconnect(), { id, slug, title, imgSrc, markdown };
}
async function createPost(post) {
  return await prisma.$connect(), await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown,
      imgSrc: post.imgSrc
    }
  }), prisma.$disconnect(), getPost(post.slug);
}
async function updatePost(post) {
  return await prisma.$connect(), console.log("updatePost id", post.id), await prisma.posts.update({
    where: {
      id: post.id
    },
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown,
      imgSrc: post.imgSrc
    }
  }), prisma.$disconnect(), getPost(post.slug);
}
async function deletePost(post) {
  return await prisma.$connect(), await prisma.posts.delete({
    where: {
      id: post
    }
  }), prisma.$disconnect(), post;
}
async function getPosts() {
  await prisma.$connect();
  let allPosts = await prisma.posts.findMany();
  return prisma.$disconnect(), allPosts;
}

// app/styles/posts.css
var posts_default = "/build/_assets/posts-ZDQT6MXY.css";

// app/routes/blogs/$slug.jsx
var import_jsx_runtime = require("react/jsx-runtime"), links4 = () => [{ rel: "stylesheet", href: posts_default }], loader3 = ({ params }) => getPost(params.slug);
function PostSlug() {
  let post = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "postDisplay",
        dangerouslySetInnerHTML: { __html: post.html }
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
        height: "600",
        src: "https://res.cloudinary.com/ositaka/image/upload/v1668881326/remix/hf4bj3tg5hsdt5uefslb.jpg"
      }),
      post.html,
      post.imgSrc,
      post.image
    ]
  });
}

// app/routes/blogs/index.jsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => Posts,
  links: () => links5,
  loader: () => loader4
});
var import_remix11 = __toESM(require_dist());
var import_jsx_runtime = require("react/jsx-runtime"), links5 = () => [{ rel: "stylesheet", href: posts_default }], loader4 = () => getPosts();
function Posts() {
  let posts = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        children: "My Remix Blog"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Click on the post name to read the post"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix11.Link, {
          to: "/admin",
          children: "Blog Admin (Edit/Create)"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
          className: "postList",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix11.Link, {
            className: "postTitle",
            to: post.slug,
            children: post.title
          })
        }, post.slug))
      })
    ]
  });
}

// app/routes/demos/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => Index3,
  links: () => links6,
  meta: () => meta4
});
var import_remix12 = __toESM(require_dist());

// app/styles/demos/about.css
var about_default = "/build/_assets/about-GGM5BPB3.css";

// app/routes/demos/about.jsx
var import_jsx_runtime = require("react/jsx-runtime"), meta4 = () => ({
  title: "About Remix"
}), links6 = () => [{ rel: "stylesheet", href: about_default }];
function Index3() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "about",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "about__intro",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          children: "About Us"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          children: [
            "Ok, so this page isn't really ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
              children: "about us"
            }),
            ", but we did want to show you a few more things Remix can do."
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          children: [
            "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
              children: "links"
            }),
            " export is only included on this route and its children."
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          children: [
            "Wait a sec...",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
              children: "its children"
            }),
            "? To understand what we mean by this,",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "https://remix.run/tutorial/4-nested-routes-params",
              children: "read all about nested routes in the docs"
            }),
            "."
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix12.Outlet, {})
      ]
    })
  });
}

// app/routes/demos/about/index.jsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
var import_remix13 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime");
function AboutIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "You are looking at the index route for the ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "/about"
          }),
          " URL segment, but there are nested routes as well!"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix13.Link, {
            to: "whoa",
            children: "Check out one of them here."
          })
        })
      })
    ]
  });
}

// app/routes/demos/about/whoa.jsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
var import_remix14 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime");
function AboutIndex2() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Whoa, this is a nested route! We render the ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "/about"
          }),
          " layout route component, and its ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "Outlet"
          }),
          " renders our route component. \u{1F92F}"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix14.Link, {
            to: "..",
            children: [
              "Go back to the ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                children: "/about"
              }),
              " index."
            ]
          })
        })
      })
    ]
  });
}

// app/routes/admin.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  links: () => links7,
  loader: () => loader5
});
var import_remix15 = __toESM(require_dist());

// app/styles/admin.css
var admin_default = "/build/_assets/admin-BRWJOEDC.css";

// app/routes/admin.jsx
var import_jsx_runtime = require("react/jsx-runtime"), links7 = () => [{ rel: "stylesheet", href: admin_default }];
async function loader5({ request }) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (!session.has("access_token"))
    return (0, import_remix15.redirect)("/login");
  let data = { error: session.get("error") };
  return (0, import_remix15.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }), getPosts();
}
function Admin() {
  let posts = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "admin",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "adminTitle",
        children: "Admin"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: "Click on a post to edit the blog post"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix15.Link, {
                to: post.slug,
                children: post.title
              })
            }, post.slug))
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix15.Outlet, {})
          })
        ]
      })
    ]
  });
}

// app/routes/admin/$edit.jsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action7,
  default: () => PostSlug2,
  loader: () => loader6
});
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_remix16 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime"), loader6 = async ({ params }) => ((0, import_tiny_invariant2.default)(params.edit, "expected params.edit"), getPostEdit(params.edit)), action7 = async ({ request }) => {
  let formData = await request.formData(), title = formData.get("title"), slug = formData.get("slug"), markdown = formData.get("markdown"), imgSrc = formData.get("imgSrc"), id = formData.get("id");
  if (request.method == "DELETE")
    return await deletePost(id), (0, import_remix16.redirect)("/admin");
  let errors = {};
  return title || (errors.title = !0), slug || (errors.slug = !0), imgSrc || (errors.imgSrc = !0), markdown || (errors.markdown = !0), Object.keys(errors).length ? errors : (await updatePost({ id, title, slug, imgSrc, markdown }), (0, import_remix16.redirect)("/admin"));
};
function PostSlug2() {
  let errors = (0, import_remix16.useActionData)(), transition = (0, import_remix16.useTransition)(), post = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix16.Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              className: "hiddenBlogID",
              name: "id",
              defaultValue: post.id
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
              htmlFor: "",
              children: [
                "Post Image: ",
                (errors == null ? void 0 : errors.imgSrc) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "Image is required"
                }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: post.imgSrc,
                  alt: post.imgDesc || "Upload result",
                  style: { width: "400px" }
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
              htmlFor: "",
              children: [
                "Post Title: ",
                (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "Title is required"
                }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  type: "text",
                  name: "title",
                  defaultValue: post.title
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
              htmlFor: "",
              children: [
                " ",
                "Post Slug: ",
                (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "Slug is required"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  defaultValue: post.slug,
                  id: "slugInput",
                  type: "text",
                  name: "slug"
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                htmlFor: "markdown",
                children: "Markdown:"
              }),
              " ",
              (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                children: "Markdown is required"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                defaultValue: post.markdown,
                name: "markdown",
                id: "",
                rows: 20,
                cols: 50
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              type: "submit",
              className: "adminButton updateButton",
              children: transition.submission ? "Updating..." : "Update Post"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix16.Form, {
        method: "delete",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
              className: "hiddenBlogID",
              name: "id",
              defaultValue: post.id
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              className: "adminButton deleteButton",
              type: "submit",
              children: "Delete"
            })
          })
        ]
      })
    ]
  });
}

// app/routes/admin/index.jsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => AdminIndex
});
var import_remix17 = __toESM(require_dist()), import_jsx_runtime = require("react/jsx-runtime");
function AdminIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "adminNewPostLink",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix17.Link, {
      to: "new",
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          className: "adminNewPostButton",
          children: "Create a New Post"
        })
      ]
    })
  });
}

// app/routes/admin/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action8,
  default: () => NewPost,
  uploadImage: () => uploadImage3
});
var import_remix18 = __toESM(require_dist()), import_node7 = require("@remix-run/node"), import_node8 = require("@remix-run/node"), import_cloudinary3 = __toESM(require("cloudinary")), import_node9 = require("@remix-run/node");
var import_jsx_runtime = require("react/jsx-runtime");
import_cloudinary3.default.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
async function uploadImage3(data) {
  return new Promise(async (resolve, reject) => {
    let uploadStream = import_cloudinary3.default.v2.uploader.upload_stream(
      {
        folder: "remix"
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result), console.log(result);
      }
    );
    await (0, import_node9.writeAsyncIterableToWritable)(data, uploadStream);
  });
}
var action8 = async ({ request }) => {
  let uploadHandler = (0, import_node8.unstable_composeUploadHandlers)(
    async ({ name, contentType, data, filename }) => name !== "img" ? void 0 : (await uploadImage3(data)).secure_url,
    (0, import_node8.unstable_createMemoryUploadHandler)()
  ), formData = await (0, import_node8.unstable_parseMultipartFormData)(request, uploadHandler), imgSrc = formData.get("img"), imgDesc = formData.get("desc"), ImgTest = imgSrc.replace("h", "");
  if (!imgSrc)
    return (0, import_node8.json)({
      error: "something wrong"
    });
  let title = formData.get("title"), slug = formData.get("slug"), markdown = formData.get("markdown"), errors = {};
  if (title || (errors.title = !0), slug || (errors.slug = !0), markdown || (errors.markdown = !0), Object.keys(errors).length)
    return errors;
  return await createPost({ title, slug, imgSrc, imgDesc, ImgTest, markdown }), (0, import_node8.json)({
    imgSrc,
    imgDesc,
    ImgTest,
    title,
    slug,
    markdown
  });
  return (0, import_remix18.redirect)("/admin");
};
function NewPost() {
  let errors = (0, import_remix18.useActionData)(), transition = (0, import_remix18.useTransition)(), slug = "", imgSrc = "", handleChange = (e) => {
    slug = e.target.value.replace(/\s/g, "-"), document.getElementById("slugInput").value = slug.toLowerCase(), console.log("hello");
  }, data = (0, import_remix18.useActionData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      (data == null ? void 0 : data.errorMsg) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: data.errorMsg
      }),
      (data == null ? void 0 : data.imgSrc) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
            children: "uploaded image"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: data.imgSrc,
            alt: data.imgDesc || "Upload result",
            style: { width: "400px" }
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
            children: [
              "Image Id: ",
              data.imgSrc
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix18.Form, {
        method: "post",
        encType: "multipart/form-data",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "img-field",
            children: "Image to upload"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            id: "img-field",
            type: "file",
            name: "img",
            accept: "image/*"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "img-desc",
            children: "Image description"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            id: "img-desc",
            type: "text",
            name: "desc"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            id: "imgSrc",
            type: "hidden",
            name: "imgSrc",
            value: imgSrc
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            type: "submit",
            children: "upload to cloudinary"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
              htmlFor: "",
              children: [
                "Post Title: ",
                (errors == null ? void 0 : errors.title) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "Title is required"
                }),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  onChange: handleChange,
                  type: "text",
                  name: "title"
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
              htmlFor: "",
              children: [
                " ",
                "Post Slug: ",
                (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "Slug is required"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                  placeholder: slug,
                  id: "slugInput",
                  type: "text",
                  name: "slug"
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                htmlFor: "markdown",
                children: "Markdown:"
              }),
              " ",
              (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                children: "Markdown is required"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                name: "markdown",
                id: "",
                rows: 20,
                cols: 30
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              type: "submit",
              children: transition.submission ? "Creating..." : "Create Post"
            })
          })
        ]
      })
    ]
  });
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index4,
  loader: () => loader7,
  meta: () => meta5
});
var import_remix19 = __toESM(require_dist());
var import_jsx_runtime = require("react/jsx-runtime");
async function loader7({ request }) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has("access_token")) {
    let data = { user: auth.currentUser, error: session.get("error") };
    return (0, import_remix19.json)(data, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return null;
}
var meta5 = () => ({
  title: "Remix Starter",
  description: "Welcome to remix!"
});
function Index4() {
  var _a;
  let data = (0, import_remix19.useLoaderData)(), greeting = (_a = data == null ? void 0 : data.user) != null && _a.email ? data.user.email : "friend";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "remix__page",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
            children: [
              "Welcome ",
              greeting,
              " to Remix Blog Auth Tutorial!"
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
            children: [
              "This blog was created by ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                children: "Chris Benjamin"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            children: "This tutorial will show you how firebase authentication functionality works in Remix"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
            children: "Tutorial Links"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://github.com/cbenjamin2009/remix-blog-firebase-auth",
                  target: "_blank",
                  children: "Github"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://dev.to/chrisbenjamin",
                  target: "_blank",
                  children: "Tutorial"
                })
              })
            ]
          })
        ]
      })
    ]
  });
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action9,
  default: () => Login2,
  links: () => links8,
  loader: () => loader8
});
var import_auth6 = require("@firebase/auth"), import_remix20 = __toESM(require_dist());
var import_jsx_runtime = require("react/jsx-runtime"), links8 = () => [{ rel: "stylesheet", href: auth_default }];
async function loader8({ request }) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  if (session.has("access_token"))
    return (0, import_remix20.redirect)("/blogs");
  let data = { error: session.get("error") };
  return (0, import_remix20.json)(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
var action9 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), { user, error } = await (0, import_auth6.signInWithEmailAndPassword)(auth, email, password);
  if (user) {
    let session = await getSession(request.headers.get("Cookie"));
    return session.set("access_token", await user.getIdToken()), (0, import_remix20.redirect)("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return { user, error };
};
function Login2() {
  var _a;
  let actionData = (0, import_remix20.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "loginContainer",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "authTitle",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          children: "Login"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_remix20.Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "email",
            children: "Email"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            className: "loginInput",
            type: "email",
            name: "email",
            placeholder: "you@awesome.dev",
            required: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
            htmlFor: "password",
            children: "Password"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            className: "loginInput",
            type: "password",
            name: "password",
            required: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            className: "loginButton",
            type: "submit",
            children: "Login"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "additionalLinks",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix20.Link, {
            to: "/auth/register",
            children: "Register"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix20.Link, {
            to: "/auth/forgot",
            children: "Forgot Password?"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "errors",
        children: actionData != null && actionData.error ? (_a = actionData == null ? void 0 : actionData.error) == null ? void 0 : _a.message : null
      })
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "e1592cbe", entry: { module: "/build/entry.client-DFOXBYWR.js", imports: ["/build/_shared/chunk-SS6I32OP.js", "/build/_shared/chunk-QLGJ34BP.js", "/build/_shared/chunk-YATONCDO.js", "/build/_shared/chunk-242LWQVT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LINWYMUT.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-E5MMOOHB.js", imports: ["/build/_shared/chunk-TFSXTCAV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/$edit": { id: "routes/admin/$edit", parentId: "routes/admin", path: ":edit", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/$edit-MTG4OZBR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-PA53MRIX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/new": { id: "routes/admin/new", parentId: "routes/admin", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/new-RWHNJJ7H.js", imports: ["/build/_shared/chunk-IAF7EPID.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/forgot": { id: "routes/auth/forgot", parentId: "root", path: "auth/forgot", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/forgot-GP5JI767.js", imports: ["/build/_shared/chunk-DRDCVCZ6.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/register": { id: "routes/auth/register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/register-GCHZKGLY.js", imports: ["/build/_shared/chunk-DRDCVCZ6.js", "/build/_shared/chunk-TFSXTCAV.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/$slug": { id: "routes/blogs/$slug", parentId: "root", path: "blogs/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/$slug-AH6GLDMN.js", imports: ["/build/_shared/chunk-6VIQGBBM.js", "/build/_shared/chunk-TFSXTCAV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-HABUZ2GB.js", imports: ["/build/_shared/chunk-6VIQGBBM.js", "/build/_shared/chunk-TFSXTCAV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about": { id: "routes/demos/about", parentId: "root", path: "demos/about", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/about-4B3QMEAQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about/index": { id: "routes/demos/about/index", parentId: "routes/demos/about", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/demos/about/index-2Z6AOBSP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/about/whoa": { id: "routes/demos/about/whoa", parentId: "routes/demos/about", path: "whoa", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/about/whoa-RP3INJ26.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/actions": { id: "routes/demos/actions", parentId: "root", path: "demos/actions", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/actions-6SDPEIXK.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/correct": { id: "routes/demos/correct", parentId: "root", path: "demos/correct", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/correct-FBPI7ITT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/params": { id: "routes/demos/params", parentId: "root", path: "demos/params", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/params-LEGKQVNZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demos/params/$id": { id: "routes/demos/params/$id", parentId: "routes/demos/params", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/demos/params/$id-O6PL2XBZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/demos/params/index": { id: "routes/demos/params/index", parentId: "routes/demos/params", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/demos/params/index-MMUPQIJH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IFIDTPNM.js", imports: ["/build/_shared/chunk-TFSXTCAV.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-B2RYN64Q.js", imports: ["/build/_shared/chunk-DRDCVCZ6.js", "/build/_shared/chunk-TFSXTCAV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test/cloudinary-upload": { id: "routes/test/cloudinary-upload", parentId: "root", path: "test/cloudinary-upload", index: void 0, caseSensitive: void 0, module: "/build/routes/test/cloudinary-upload-2OJHMSTR.js", imports: ["/build/_shared/chunk-IAF7EPID.js", "/build/_shared/chunk-NZN5273X.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test/local-upload": { id: "routes/test/local-upload", parentId: "root", path: "test/local-upload", index: void 0, caseSensitive: void 0, module: "/build/routes/test/local-upload-FC6CD5L3.js", imports: ["/build/_shared/chunk-NZN5273X.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test/utils.server": { id: "routes/test/utils.server", parentId: "root", path: "test/utils/server", index: void 0, caseSensitive: void 0, module: "/build/routes/test/utils.server-LBC6S7NE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-E1592CBE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/test/cloudinary-upload": {
    id: "routes/test/cloudinary-upload",
    parentId: "root",
    path: "test/cloudinary-upload",
    index: void 0,
    caseSensitive: void 0,
    module: cloudinary_upload_exports
  },
  "routes/test/local-upload": {
    id: "routes/test/local-upload",
    parentId: "root",
    path: "test/local-upload",
    index: void 0,
    caseSensitive: void 0,
    module: local_upload_exports
  },
  "routes/test/utils.server": {
    id: "routes/test/utils.server",
    parentId: "root",
    path: "test/utils/server",
    index: void 0,
    caseSensitive: void 0,
    module: utils_server_exports
  },
  "routes/auth/register": {
    id: "routes/auth/register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
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
    index: !0,
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
  "routes/auth/forgot": {
    id: "routes/auth/forgot",
    parentId: "root",
    path: "auth/forgot",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_exports
  },
  "routes/blogs/$slug": {
    id: "routes/blogs/$slug",
    parentId: "root",
    path: "blogs/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "root",
    path: "blogs",
    index: !0,
    caseSensitive: void 0,
    module: blogs_exports
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
    index: !0,
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
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/$edit": {
    id: "routes/admin/$edit",
    parentId: "routes/admin",
    path: ":edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/admin/new": {
    id: "routes/admin/new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
