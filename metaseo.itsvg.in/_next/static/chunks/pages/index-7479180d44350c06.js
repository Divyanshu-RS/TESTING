(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(9975);
        },
      ]);
    },
    7048: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(5893),
        r = a(7294);
      function n() {
        var e = (0, r.useState)(!0),
          t = e[0],
          a = e[1];
        return (
          (0, r.useEffect)(function () {
            "false" === localStorage.getItem("isDark")
              ? (a(!1), document.documentElement.classList.remove("dark"))
              : (a(!0), document.documentElement.classList.add("dark"));
          }, []),
          (0, s.jsx)("div", {
            className:
              "absolute right-0 sm:right-4 cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200",
            onClick: function () {
              document.documentElement.classList.toggle("dark"),
                a(!t),
                localStorage.setItem("isDark", !t);
            },
            children: t
              ? (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-8 w-8 sm:h-10 sm:w-10",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, s.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
                  }),
                })
              : (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-10 w-10",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, s.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                  }),
                }),
          })
        );
      }
      function l() {
        return (0, s.jsxs)("div", {
          className:
            "w-full flex justify-start items-center relative text-4xl sm:text-5xl font-bold text-zinc-500 dark:text-cyan-200 text-cyan-900",
          children: [
            (0, s.jsx)("a", {
              href: "https://main--myseo-drs.netlify.app/",
              className: "",
              children: "mySEO",
            }),
            (0, s.jsx)(n, {}),
          ],
        });
      }
    },
    1376: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(5893);
      a(7294);
      function r(e) {
        var t = e.name,
          a = e.content;
        return (0, s.jsxs)("p", {
          className: " whitespace-pre-wrap",
          children: [
            "<",
            (0, s.jsx)("p", {
              className: "text-rose-600 dark:text-rose-300 inline",
              children: "meta",
            }),
            "\xa0",
            (0, s.jsx)("p", {
              className: "text-amber-600 dark:text-amber-300 inline",
              children: "name",
            }),
            " =",
            (0, s.jsx)("p", {
              className: "text-green-600 dark:text-green-300 inline",
              children: '"' + t + '"',
            }),
            "\xa0",
            (0, s.jsx)("p", {
              className: "text-amber-600 dark:text-amber-300 inline",
              children: "content",
            }),
            " =",
            (0, s.jsx)("p", {
              className: "text-green-600 dark:text-green-300 inline",
              children: '"' + a + '"',
            }),
            "/>",
          ],
        });
      }
    },
    7372: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(5893);
      a(7294);
      function r(e) {
        var t = e.property,
          a = e.content;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("p", {
            className: "whitespace-pre-wrap",
            children: [
              "<",
              (0, s.jsx)("p", {
                className: "text-rose-600 dark:text-rose-300 inline",
                children: "meta",
              }),
              "\xa0",
              (0, s.jsx)("p", {
                className: "text-amber-600 dark:text-amber-300 inline",
                children: "property",
              }),
              " =",
              (0, s.jsx)("p", {
                className: "text-green-600 dark:text-green-300 inline",
                children: '"' + t + '"',
              }),
              "\xa0",
              (0, s.jsx)("p", {
                className: "text-amber-600 dark:text-amber-300 inline",
                children: "content",
              }),
              " =",
              (0, s.jsx)("p", {
                className: "text-green-600 dark:text-green-300 inline",
                children: '"' + a + '"',
              }),
              "/>",
            ],
          }),
        });
      }
    },
    9975: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return y;
          },
        });
      var s = a(5893),
        r = a(9008),
        n = a(9669),
        l = a.n(n),
        o = a(7294);
      function i() {
        var e = (0, o.useState)(!1),
          t = e[0],
          a = e[1],
          r = (0, o.useState)(""),
          n = r[0],
          i = r[1],
          c = (0, o.useState)(""),
          d = c[0],
          m = c[1];
        return (
          (0, o.useEffect)(function () {}, []),
          (0, s.jsx)(s.Fragment, {
            children:
              t &&
              (0, s.jsx)("div", {
                className: "h-8",
                children: (0, s.jsx)("div", {
                  className:
                    "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute w-full h-8 top-0 left-0 text-white text-xs sm:text-sm md:text-base ease-in-out transition-all",
                  children: (0, s.jsx)("a", {
                    href: d,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n,
                  }),
                }),
              }),
          })
        );
      }
      function c() {
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col w-full justify-center items-center pt-6 pb-2",
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-row flex-wrap space-x-2",
              children: [
                (0, s.jsx)("a", {
                  className:
                    "bg-blue-500 text-blue-50 mt-3 hover:bg-blue-600 font-semibold uppercase text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square",
                  href: "https://x.com/DivyanshuRS999?s=09",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-4 h-4",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                    }),
                  }),
                }),
                (0, s.jsx)("a", {
                  className:
                    "bg-violet-500 text-violet-50 mt-3 hover:bg-violet-600 font-semibold uppercase text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square",
                  href: "https://github.com/Divyanshu-RS",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-4 h-4",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                    }),
                  }),
                }),
                (0, s.jsx)("a", {
                  className:
                    "bg-blue-600 text-blue-50 mt-3 hover:bg-blue-700 font-semibold uppercase text-lg p-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center w-max aspect-square",
                  href: "https://www.linkedin.com/in/divyanshu-ranjan-singh/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-4 h-4",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                    }),
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "w-full flex justify-center items-center text-gray-400",
              children: (0, s.jsxs)("a", {
                href: "https://divyanshu0212.github.io/Divyanshu_Ranjan_Singh.github.io/",
                className: "opacity-75 hover:opacity-95 mt-2",
                target: "_blank",
                rel: "noopener noreferrer",
                children: ["</>", " Developed by Divyanshu Ranjan Singh"],
              }),
            }),
          ],
        });
      }
      var d = a(7048),
        m = a(6368),
        x = a(7411);
      function h() {
        return (0, s.jsxs)("div", {
          className: "w-full flex flex-col items-center opacity-90",
          children: [
            (0, s.jsx)("p", { className: "", children: "Official Debuggers" }),
            (0, s.jsxs)("a", {
              href: "https://developers.facebook.com/tools/debug/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold mt-2",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  className: "w-6 h-6 sm:w-8 sm:h-8 mr-2",
                  viewBox: "0 0 16 16",
                  children: (0, s.jsx)("path", {
                    d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
                  }),
                }),
                "Facebook",
              ],
            }),
            (0, s.jsxs)("a", {
              href: "https://cards-dev.twitter.com/validator",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold sm:mt-2",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  className: "w-6 h-6 sm:w-8 sm:h-8 mr-2",
                  viewBox: "0 0 16 16",
                  children: (0, s.jsx)("path", {
                    d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                  }),
                }),
                "Twitter",
              ],
            }),
            (0, s.jsxs)("a", {
              href: "https://www.linkedin.com/post-inspector/inspect/",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold sm:mt-2",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  className: "w-6 h-6 sm:w-8 sm:h-8 mr-2",
                  viewBox: "0 0 16 16",
                  children: (0, s.jsx)("path", {
                    d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                  }),
                }),
                "LinkedIn",
              ],
            }),
            (0, s.jsxs)("a", {
              href: "https://developers.google.com/search/docs/advanced/structured-data",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold sm:mt-2",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  className: "w-6 h-6 sm:w-8 sm:h-8 mr-2",
                  viewBox: "0 0 16 16",
                  children: (0, s.jsx)("path", {
                    d: "M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z",
                  }),
                }),
                "Google",
              ],
            }),
            (0, s.jsx)("p", { className: "mt-6", children: "Extra Resources" }),
            (0, s.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, s.jsx)("a", {
                  href: "https://medium.com/@divyanshuranjan.9999/list-of-all-meta-tags-7242e417cfb5",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold sm:mt-2 underline-offset-8 underline hover:decoration-wavy",
                  children: "List of all Meta Tags",
                }),
                (0, s.jsx)("a", {
                  href: "https://developers.google.com/search/docs/beginner/seo-starter-guide",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold sm:mt-2 underline-offset-8 underline hover:decoration-wavy",
                  children: "Google SEO Starter Guide",
                }),
                (0, s.jsx)("a", {
                  href: "https://en.wikipedia.org/wiki/Search_engine_optimization",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex flex-row items-center px-6 p-2 text-lg sm:text-xl font-semibold sm:mt-2 underline-offset-8 underline hover:decoration-wavy",
                  children: "SEO Wikipedia Page",
                }),
              ],
            }),
          ],
        });
      }
      var p = a(1376),
        u = a(7372);
      function g(e) {
        var t = e.onClose,
          a = (0, x.H)(),
          r = (0, o.useState)(!1),
          n = r[0],
          l = r[1];
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col my-6 items-start text-zinc-600 dark:text-cyan-100 fade-in",
          children: [
            (0, s.jsxs)("button", {
              onClick: t,
              className:
                "flex justify-center items-center sm:text-lg opacity-80 hover:opacity-100",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, s.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1,
                    d: "M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z",
                  }),
                }),
                "Go Back",
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col md:flex-row w-full",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col w-full md:w-7/12 ",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-lg sm:text-xl md:text-2xl my-1 sm:my-4",
                      children: "Your Meta Tags are ready to Rock !",
                    }),
                    (0, s.jsxs)("div", {
                      id: "codezone",
                      className:
                        "flex flex-col text-xs sm:text-sm md:text-base outline-none",
                      contentEditable: "true",
                      "data-gramm": "false",
                      "data-gramm_editor": "false",
                      "data-enable-grammarly": "false",
                      children: [
                        (0, s.jsx)(p.Z, {
                          name: "title",
                          content: a.data[0].name,
                        }),
                        (0, s.jsx)(p.Z, {
                          name: "description",
                          content: a.data[0].desc,
                        }),
                        a.data[0].author &&
                          (0, s.jsx)(p.Z, {
                            name: "copyright",
                            content: a.data[0].author,
                          }),
                        a.data[0].keywrd &&
                          (0, s.jsx)(p.Z, {
                            name: "keywords",
                            content: a.data[0].keywrd,
                          }),
                        (0, s.jsx)(u.Z, {
                          property: "og:type",
                          content: "website",
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "og:url",
                          content: a.data[0].url,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "og:title",
                          content: a.data[0].name,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "og:description",
                          content: a.data[0].desc,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "og:image",
                          content: a.data[0].imgUrl,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "twitter:card",
                          content: "summary_large_image",
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "twitter:url",
                          content: a.data[0].url,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "twitter:title",
                          content: a.data[0].name,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "twitter:description",
                          content: a.data[0].desc,
                        }),
                        (0, s.jsx)(u.Z, {
                          property: "twitter:image",
                          content: a.data[0].imgUrl,
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "opacity-50 my-4 text-sm sm:text-base",
                      children: "* Paste these tags inside head tag",
                    }),
                    (0, s.jsx)("p", {
                      className: "flex justify-center items-center",
                      children: (0, s.jsxs)("button", {
                        onClick: function () {
                          return (
                            navigator.clipboard.writeText(
                              (function (e) {
                                for (
                                  var t = "", a = 0;
                                  a < e.childNodes.length;
                                  a++
                                )
                                  e.childNodes[a].textContent
                                    ? ((t += e.childNodes[a].textContent),
                                      (t += "\n"))
                                    : (t += "\n");
                                return t;
                              })(document.getElementById("codezone"))
                            ) &&
                            void (
                              n ||
                              (l(!0),
                              (document.getElementById(
                                "alertcopied"
                              ).style.display = "flex"),
                              setTimeout(function () {
                                l(!1),
                                  (document.getElementById(
                                    "alertcopied"
                                  ).style.display = "none");
                              }, 3e3))
                            )
                          );
                        },
                        className:
                          "flex flex-row z-10 border-zinc-500 dark:border-cyan-400 border-2 m-2 p-2 px-8 rounded-lg text-xl justify-center items-center opacity-75 transition-all transform ease-in-out duration-300 hover:opacity-95 hover:text-zinc-100 dark:hover:text-cyan-100 hover:bg-zinc-500 dark:hover:bg-cyan-400 font-semibold hover:scale-[0.98] active:scale-95 shadow-lg hover:shadow-zinc-500/20 dark:hover:shadow-cyan-400/20",
                        children: [
                          "Copy",
                          (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 ml-1",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, s.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex w-full justify-center items-center py-2",
                      children: (0, s.jsx)("a", {
                        href: "https://buymeacoffee.com/divyanshu0212",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: (0, s.jsx)("img", {
                          src: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
                          alt: "Buy Me A Coffee",
                          className: "w-40",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "flex w-full md:w-5/12 h-full items-center justify-center",
                  children: (0, s.jsx)("img", {
                    src: "/hqp.svg",
                    alt: "",
                    className: "w-full",
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              id: "alertcopied",
              className:
                "fixed top-6 z-50 w-max fade-in-out hidden left-1/2 transform -translate-x-1/2 items-center bg-green-400 dark:bg-green-600 p-2 px-4 sm:px-6 md:px-8 text-lg sm:text-xl rounded-lg text-white",
              children: [
                (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "h-6 w-6 mr-1",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, s.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                  }),
                }),
                "Meta tags copied successfully!",
              ],
            }),
          ],
        });
      }
      function w(e) {
        var t = e.userUrl,
          a = function () {
            M("");
          },
          r = (0, x.H)(),
          n = (0, o.useState)(60),
          i = n[0],
          c = n[1],
          d = (0, o.useState)(160),
          p = d[0],
          u = d[1],
          w = (0, o.useState)(60),
          f = w[0],
          v = w[1],
          j = (0, o.useState)("mySEO - Meta tags for best SEO"),
          y = j[0],
          b = j[1],
          k = (0, o.useState)(
            "Generate meta tags in one click for the best SEO of your website, rank high in search results, and appear unique when someone shares your link!"
          ),
          N = k[0],
          z = k[1],
          C = (0, o.useState)(
            "https://github.com/Divyanshu-RS/mySEO/blob/main/webimage.png?raw=true"
          ),
          E = C[0],
          M = C[1],
          B = (0, o.useState)(!1),
          S = B[0],
          L = B[1],
          _ = (0, o.useState)(t),
          A = _[0],
          V = _[1];
        return (
          (0, o.useEffect)(function () {
            t.includes("https://") && V(t.replace("https://", "")),
              t.includes("http://") && V(t.replace("http://", ""));
          }, []),
          (0, m.SZ)(function () {
            return (0, s.jsx)(s.Fragment, {
              children: S
                ? (0, s.jsx)(g, {
                    onClose: function () {
                      return L(!1);
                    },
                    url: t,
                    title: y,
                    description: N,
                    imgurl: E,
                    keywords: document.getElementById("sitekeywords").value,
                    copyright: document.getElementById("sitecopy").value,
                  })
                : (0, s.jsxs)("div", {
                    className:
                      "flex flex-col my-6 text-zinc-600 dark:text-cyan-100 items-center fade-in",
                    children: [
                      (0, s.jsxs)("p", {
                        className: "text-xl",
                        children: [
                          "We need some details in order to generate meta tags for your awesome website ",
                          ":)",
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        id: "formbox",
                        className: "w-full flex flex-col md:flex-row mt-6",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "w-full md:w-5/12 h-max flex flex-col items-center",
                            children: [
                              (0, s.jsxs)("p", {
                                className:
                                  "flex flex-col relative w-full md:w-10/12",
                                children: [
                                  "Website name:",
                                  (0, s.jsx)("input", {
                                    type: "text",
                                    name: "",
                                    id: "sitename",
                                    maxLength: "60",
                                    value: r.data[0].name,
                                    onChange: function (e) {
                                      return (
                                        c(
                                          60 -
                                            document.getElementById("sitename")
                                              .value.length
                                        ),
                                        void (0 !=
                                        document.getElementById("sitename")
                                          .value.length
                                          ? b(
                                              document.getElementById(
                                                "sitename"
                                              ).value
                                            )
                                          : b(
                                              "mySEO - Meta tags for best SEO"
                                            )) &
                                          r.editData(e.target.value, "name")
                                      );
                                    },
                                    placeholder: "Your Website Name",
                                    className:
                                      " mt-2 ml-4 h-10 text-lg rounded-lg shadow-lg dark:shadow-md bg-zinc-300 dark:bg-zinc-700 outline-none px-3 focus:ring-2 ring-zinc-500/20 dark:ring-cyan-100/20 placeholder-zinc-500 dark:placeholder-cyan-50 placeholder-opacity-70 dark:placeholder-opacity-50",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "absolute right-0 mt-1.5 mr-1.5 opacity-50",
                                    children: i,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("p", {
                                className:
                                  "flex flex-col relative w-full md:w-10/12 mt-4",
                                children: [
                                  "Website Description:",
                                  (0, s.jsx)("textarea", {
                                    type: "text",
                                    name: "",
                                    id: "sitedesc",
                                    maxLength: "160",
                                    value: r.data[0].desc,
                                    onChange: function (e) {
                                      return (
                                        u(
                                          160 -
                                            document.getElementById("sitedesc")
                                              .value.length
                                        ),
                                        void (0 !=
                                        document.getElementById("sitedesc")
                                          .value.length
                                          ? z(
                                              document.getElementById(
                                                "sitedesc"
                                              ).value
                                            )
                                          : z(
                                              "Create meta descriptions with only one click for optimal search engine optimization (SEO), excellent search engine ranking, and a distinctive look when someone shares your link!"
                                            )) &
                                          r.editData(e.target.value, "desc")
                                      );
                                    },
                                    placeholder:
                                      "A brief and straightforward description of your website that will draw visitors. It is among the most crucial things.",
                                    className:
                                      "no-scrollbar mt-2 ml-4 h-36 text-lg rounded-lg shadow-md bg-zinc-300 dark:bg-zinc-700 outline-none p-4 resize-none focus:ring-2 ring-zinc-500/20 dark:ring-cyan-100/20 placeholder-zinc-500 dark:placeholder-cyan-50 placeholder-opacity-70 dark:placeholder-opacity-50",
                                    "data-gramm": "false",
                                    "data-gramm_editor": "false",
                                    "data-enable-grammarly": "false",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "absolute right-0 mt-1.5 mr-1.5 opacity-50",
                                    children: p,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("p", {
                                className:
                                  "flex flex-col relative w-full md:w-10/12 mt-4",
                                children: [
                                  "Preview Image URL:",
                                  (0, s.jsx)("textarea", {
                                    type: "text",
                                    name: "",
                                    id: "siteweburl",
                                    maxLength: "5000",
                                    value: r.data[0].imgUrl,
                                    onChange: function (e) {
                                      return (
                                        void (0 !=
                                        document.getElementById("siteweburl")
                                          .value.length
                                          ? M(
                                              document.getElementById(
                                                "siteweburl"
                                              ).value
                                            )
                                          : M(
                                              "https://github.com/Divyanshu-RS/mySEO/blob/main/webimage.png?raw=true"
                                            )) &
                                        r.editData(e.target.value, "imgUrl")
                                      );
                                    },
                                    placeholder:
                                      "This image will appear when someone shares your website on social media, such as Facebook, Instagram, LinkedIn, X, WhatsApp, or any such platform's.",
                                    className:
                                      "no-scrollbar mt-2 ml-4 h-24 text-lg rounded-lg shadow-md bg-zinc-300 dark:bg-zinc-700 outline-none p-2 px-4 resize-none focus:ring-2 ring-zinc-500/20 dark:ring-cyan-100/20 placeholder-zinc-500 dark:placeholder-cyan-50 placeholder-opacity-70 dark:placeholder-opacity-50",
                                    "data-gramm": "false",
                                    "data-gramm_editor": "false",
                                    "data-enable-grammarly": "false",
                                  }),
                                  (0, s.jsxs)("p", {
                                    className:
                                      "absolute right-0 mt-1.5 mr-1.5 opacity-50 text-xs",
                                    children: [
                                      "Recommended 1200x627px, ",
                                      "<",
                                      "2 Mb",
                                    ],
                                  }),
                                  (0, s.jsx)("input", {
                                    type: "file",
                                    accept: "image/png, image/jpeg",
                                    className: "pt-2 self-start ml-4",
                                    onChange: function (e) {
                                      !(function (e) {
                                        if (e[0].size < 2097153) {
                                          document.getElementById(
                                            "uploading-alert"
                                          ).style.display = "flex";
                                          var t = new FormData();
                                          t.append("file", e[0]),
                                            t.append(
                                              "upload_preset",
                                              "ql20afgb"
                                            ),
                                            l()
                                              .post(
                                                "https://api.cloudinary.com/v1_1/dpu5ywrox/image/upload",
                                                t
                                              )
                                              .then(function (e) {
                                                M(e.data.url),
                                                  r.editData(
                                                    e.data.url,
                                                    "imgUrl"
                                                  ),
                                                  (document.getElementById(
                                                    "uploading-alert"
                                                  ).style.display = "none");
                                              });
                                        } else
                                          alert(
                                            "Sorry, Image size can't be over 2 Mb for uploading"
                                          );
                                      })(e.target.files);
                                    },
                                  }),
                                ],
                              }),
                              (0, s.jsx)("p", {
                                id: "uploading-alert",
                                className:
                                  "hidden fixed top-4 left-1/2 -translate-x-1/2 text-xl bg-cyan-200/95 text-cyan-900 px-4 py-2 rounded-md ring-2 ring-cyan-200/30",
                                children: "Uploading...",
                              }),
                              (0, s.jsxs)("p", {
                                className:
                                  "flex flex-col relative w-full md:w-10/12 mt-4",
                                children: [
                                  "Keywords:",
                                  (0, s.jsx)("textarea", {
                                    type: "text",
                                    name: "",
                                    id: "sitekeywords",
                                    maxLength: "500",
                                    value: r.data[0].keywrd,
                                    onChange: function (e) {
                                      return r.editData(
                                        e.target.value,
                                        "keywrd"
                                      );
                                    },
                                    placeholder:
                                      "Keywords (separated by commas). This property is not used by Google now. You may leave this empty.",
                                    className:
                                      "no-scrollbar mt-2 ml-4 h-36 text-lg rounded-lg shadow-md bg-zinc-300 dark:bg-zinc-700 outline-none p-4 resize-none focus:ring-2 ring-zinc-500/20 dark:ring-cyan-100/20 placeholder-zinc-500 dark:placeholder-cyan-50 placeholder-opacity-70 dark:placeholder-opacity-50",
                                    "data-gramm": "false",
                                    "data-gramm_editor": "false",
                                    "data-enable-grammarly": "false",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "absolute right-0 mt-1.5 mr-1.5 opacity-50 text-xs",
                                    children: "Recommended less than 10",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("p", {
                                className:
                                  "flex flex-col relative w-full md:w-10/12 mt-4",
                                children: [
                                  "Copyright / Author:",
                                  (0, s.jsx)("input", {
                                    type: "text",
                                    name: "",
                                    id: "sitecopy",
                                    maxLength: "60",
                                    value: r.data[0].author,
                                    onChange: function (e) {
                                      return (
                                        void v(
                                          60 -
                                            document.getElementById("sitecopy")
                                              .value.length
                                        ) & r.editData(e.target.value, "author")
                                      );
                                    },
                                    placeholder:
                                      "Company Name / Name of Author",
                                    className:
                                      " mt-2 ml-4 h-10 text-lg rounded-lg shadow-md bg-zinc-300 dark:bg-zinc-700 outline-none px-3 focus:ring-2 ring-zinc-500/20 dark:ring-cyan-100/20 placeholder-zinc-500 dark:placeholder-cyan-50 placeholder-opacity-70 dark:placeholder-opacity-50",
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "absolute right-0 mt-1.5 mr-1.5 opacity-50",
                                    children: f,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("button", {
                                onClick: function () {
                                  return (
                                    L(!0) &
                                    ((document.body.scrollTop = 0),
                                    void (document.documentElement.scrollTop = 0))
                                  );
                                },
                                className:
                                  "flex flex-row z-10 border-zinc-400 dark:border-cyan-400 border-2 m-4 mt-8 p-2 px-6 rounded-lg text-xl justify-center items-center opacity-75 transition-all transform ease-in-out duration-300 hover:opacity-95 hover:text-zinc-100 dark:hover:text-cyan-100 hover:bg-zinc-400 dark:hover:bg-cyan-400 font-semibold hover:scale-[0.98] active:scale-95 shadow-lg hover:shadow-zinc-400/20 dark:hover:shadow-cyan-400/20",
                                children: [
                                  "Generate",
                                  (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6 ml-1",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, s.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "hidden md:flex mt-4",
                                children: (0, s.jsx)(h, {}),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "w-full md:w-6/12",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "flex justify-center items-center mt-4 md:mt-0 text-2xl md:text-3xl font-semibold opacity-90",
                                children: "Preview",
                              }),
                              (0, s.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "text-md opacity-70",
                                    children:
                                      "This is how your website will appear on Google",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mt-4 text-zinc-600 dark:text-zinc-300",
                                    children: [
                                      (0, s.jsxs)("p", {
                                        className: "text-sm flex items-center",
                                        children: [
                                          t,
                                          " \xa0",
                                          (0, s.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-4 w-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: (0, s.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "text-lg text-blue-700 dark:text-blue-400 font-medium",
                                        children: y,
                                      }),
                                      (0, s.jsx)("p", {
                                        className: "text-sm",
                                        children: N,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "text-md opacity-70",
                                    children:
                                      "This is how your website will appear on Facebook",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mt-4 text-zinc-800 dark:text-zinc-300 w-full ring-1 ring-zinc-200/50 dark:ring-zinc-700/50",
                                    children: [
                                      (0, s.jsx)("img", {
                                        src: E,
                                        alt: "",
                                        className: " w-full web-aspect",
                                        onError: a,
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "px-2 p-1 bg-zinc-200 dark:bg-zinc-700",
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "uppercase opacity-70 mt-1 text-sm",
                                            children: A,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "font-semibold opacity-90 text-lg",
                                            children: y,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "opacity-75 text-base pb-2",
                                            children: N,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "text-md opacity-70",
                                    children:
                                      "This is how your website will appear on Twitter",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mt-4 text-zinc-800 dark:text-zinc-300 w-full ring-1 ring-zinc-200/50 dark:ring-zinc-700/50 rounded-2xl overflow-hidden",
                                    children: [
                                      (0, s.jsx)("img", {
                                        src: E,
                                        alt: "",
                                        className: " w-full web-aspect",
                                        onError: a,
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "px-2 p-1 bg-zinc-200 dark:bg-zinc-700",
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "opacity-70 mt-1 text-base",
                                            children: A,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "font-semibold opacity-90 text-lg",
                                            children: y,
                                          }),
                                          (0, s.jsx)("p", {
                                            className:
                                              "opacity-75 text-base pb-2",
                                            children: N,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "text-md opacity-70",
                                    children:
                                      "This is how your website will appear on Mobile Apps",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-col sm:flex-row w-full items-center",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex flex-col w-full md:w-6/12 p-1",
                                        children: (0, s.jsxs)("div", {
                                          className:
                                            "mt-4 text-zinc-800 dark:text-zinc-300 w-full ring-1 ring-zinc-200/50 dark:ring-zinc-700/50 rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-700",
                                          children: [
                                            (0, s.jsx)("p", {
                                              className:
                                                "opacity-70 mt-1 text-base px-3 pb-1 overflow-hidden",
                                              children: A,
                                            }),
                                            (0, s.jsx)("img", {
                                              src: E,
                                              alt: "",
                                              className: " w-full web-aspect",
                                              onError: a,
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "px-2 p-1 bg-zinc-200 dark:bg-zinc-700",
                                              children: [
                                                (0, s.jsx)("p", {
                                                  className:
                                                    "font-semibold opacity-90 text-base",
                                                  children: y,
                                                }),
                                                (0, s.jsx)("p", {
                                                  className:
                                                    "opacity-75 text-sm pb-2",
                                                  children: N,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex flex-col w-full md:w-6/12 p-1",
                                        children: (0, s.jsxs)("div", {
                                          className:
                                            "mt-4 text-zinc-800 dark:text-zinc-300 w-full ring-1 ring-zinc-200/50 dark:ring-zinc-700/50 rounded-lg overflow-hidden",
                                          children: [
                                            (0, s.jsx)("img", {
                                              src: E,
                                              alt: "",
                                              className: " w-full web-aspect",
                                              onError: a,
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "px-2 p-1 bg-zinc-200 dark:bg-zinc-700",
                                              children: [
                                                (0, s.jsx)("p", {
                                                  className:
                                                    "font-semibold opacity-90 text-base",
                                                  children: y,
                                                }),
                                                (0, s.jsx)("p", {
                                                  className:
                                                    "opacity-75 text-sm h-5 overflow-hidden",
                                                  children: N,
                                                }),
                                                (0, s.jsx)("p", {
                                                  className:
                                                    "opacity-50 text-sm pb-1",
                                                  children: A,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "md:hidden flex mt-4",
                                children: (0, s.jsx)(h, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
            });
          })
        );
      }
      function f() {
        return (0, s.jsx)("div", {
          className:
            "flex text-zinc-500 dark:text-cyan-200 justify-center items-center mt-20",
          children: (0, s.jsxs)("p", {
            className:
              "text-xl sm:text-2xl md:text-3xl w-full md:w-6/12 text-center flex flex-col justify-center items-center",
            children: [
              (0, s.jsxs)("p", {
                className:
                  "flex flex-col sm:flex-row items-center my-3 opacity-80",
                children: [
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 1.5,
                      d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                    }),
                  }),
                  "\xa0Generate meta tags in one click",
                ],
              }),
              (0, s.jsxs)("p", {
                className:
                  "flex flex-col sm:flex-row items-center my-3 opacity-80",
                children: [
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 1.5,
                      d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                    }),
                  }),
                  "\xa0Rank high in search results",
                ],
              }),
              (0, s.jsxs)("p", {
                className:
                  "flex flex-col sm:flex-row items-center my-3 opacity-80",
                children: [
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 1.5,
                      d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                    }),
                  }),
                  "\xa0Appear unique when shared",
                ],
              }),
              (0, s.jsx)("p", {
                className: "text-sm mt-6 opacity-80",
                children: "Supported by ",
              }),
              (0, s.jsxs)("p", {
                className: "flex flex-row my-3 mb-4 opacity-80",
                children: [
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
                    }),
                  }),
                  (0, s.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: [
                      (0, s.jsx)("path", {
                        d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z",
                      }),
                      (0, s.jsx)("path", {
                        d: "M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z",
                      }),
                    ],
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    className: "w-6 h-6 mx-2 md:mx-3",
                    viewBox: "0 0 16 16",
                    children: (0, s.jsx)("path", {
                      d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function v(e) {
        var t = e.topFunction,
          a = e.setUrlEntered,
          r = (0, x.H)(),
          n = (0, o.useState)(""),
          l = n[0],
          i = n[1];
        return (
          (0, o.useEffect)(function () {
            document
              .getElementById("urlinput")
              .addEventListener("keyup", function (e) {
                13 === e.keyCode &&
                  (e.preventDefault(),
                  document.getElementById("proceedbutton").click());
              });
          }, []),
          (0, s.jsx)("div", {
            className:
              "flex w-full justify-center items-center my-8 mt-10 sm:mt-12 md:mt-16",
            children: (0, s.jsxs)("div", {
              className:
                " w-full md:w-6/12 relative flex flex-col items-center rounded-xl url-card hover:scale-[1.01] transition-all ease-in-out duration-300",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "w-full h-60 rounded-xl bg-cyan-100 dark:bg-cyan-200 z-30 p-4 px-6",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-cyan-500 dark:text-cyan-800",
                      children: "Enter Website URL",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "ml-0.5 text-lg md:text-xl mt-1 text-cyan-500 dark:text-cyan-800 opacity-70",
                      children: "We make your Website Extra Ordinary",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col justify-center items-center my-4 mt-6",
                      children: [
                        (0, s.jsx)("input", {
                          type: "text",
                          name: "",
                          id: "urlinput",
                          value: l,
                          onChange: function (e) {
                            return i(e.target.value);
                          },
                          placeholder: "https://myseo.in",
                          className:
                            "outline-none bg-cyan-500 dark:bg-cyan-800 w-10/12 focus:w-[86%] h-12 rounded-lg shadow-xl shadow-cyan-500/20 dark:shadow-cyan-800/20 px-4 text-cyan-50 dark:text-cyan-100 placeholder-cyan-50 dark:placeholder-cyanplaceholder placeholder-opacity-70 text-base sm:text-xl transition-all ease-in-out duration-300 text-center",
                        }),
                        (0, s.jsxs)("p", {
                          id: "proceedbutton",
                          className:
                            "flex text-xl justify-center items-center mt-4 sm:mt-6 text-cyan-500 dark:text-cyan-800 font-semibold w-max cursor-pointer select-none",
                          onClick: function () {
                            return (
                              (function () {
                                if (
                                  "" !=
                                  document.getElementById("urlinput").value
                                ) {
                                  var e =
                                    document.getElementById("urlinput").value;
                                  e.includes(".")
                                    ? (e.includes("http://") ||
                                      e.includes("https://")
                                        ? (i(e), r.editData(l, "url"))
                                        : (i("https://" + e),
                                          r.editData(l, "url")),
                                      a(!0))
                                    : showAlert();
                                } else showAlert();
                              })() && t()
                            );
                          },
                          children: [
                            "Proceed",
                            (0, s.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              children: (0, s.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 5l7 7-7 7M5 5l7 7-7 7",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute w-11/12 h-60 rounded-xl bg-amber-100 dark:bg-amber-200 mt-6 z-20",
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute w-10/12 h-60 rounded-xl bg-rose-100 dark:bg-rose-200 mt-12 z-10",
                }),
              ],
            }),
          })
        );
      }
      function j() {
        var e = (0, x.H)(),
          t = (0, o.useState)(!1),
          a = t[0],
          r = t[1],
          n = (0, o.useState)(!1);
        n[0], n[1];
        return (0, m.SZ)(function () {
          return (0, s.jsx)("div", {
            className: "fade-in",
            children: a
              ? (0, s.jsx)(s.Fragment, {
                  children: (0, s.jsx)(w, { userUrl: e.data[0].url }),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(v, {
                      topFunction: function () {
                        return (
                          (document.body.scrollTop = 0),
                          void (document.documentElement.scrollTop = 0)
                        );
                      },
                      setUrlEntered: r,
                    }),
                    (0, s.jsx)(f, {}),
                    (0, s.jsxs)("div", {
                      id: "alerterror",
                      className:
                        "fixed top-6 z-50 w-max fade-in-out hidden left-1/2 transform -translate-x-1/2 items-center bg-rose-400 dark:bg-rose-500 p-2 px-4 sm:px-6 md:px-8 text-lg sm:text-xl rounded-lg",
                      children: [
                        (0, s.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6 mr-1",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                          }),
                        }),
                        "Please enter a valid URL",
                      ],
                    }),
                  ],
                }),
          });
        });
      }
      function y() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(r.default, {
              children: [
                (0, s.jsx)("title", {
                  children: "mySEO - Meta tags for best SEO",
                }),
                (0, s.jsx)("link", { rel: "icon", href: "/logo.png" }),
                (0, s.jsx)("meta", {
                  name: "title",
                  content: "mySEO - Meta tags for best SEO",
                }),
                (0, s.jsx)("meta", {
                  name: "description",
                  content:
                    "Generate meta tags in one click for the best SEO of your website, rank high in search results, and appear unique when someone shares your link!",
                }),
                (0, s.jsx)("meta", {
                  name: "copyright",
                  content: "Divyanshu Ranjan Singh",
                }),
                (0, s.jsx)("meta", { property: "og:type", content: "website" }),
                (0, s.jsx)("meta", {
                  property: "og:url",
                  content: "https://main--myseo-drs.netlify.app/",
                }),
                (0, s.jsx)("meta", {
                  property: "og:title",
                  content: "mySEO - Meta tags for best SEO",
                }),
                (0, s.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Generate meta tags in one click for the best SEO of your website, rank high in search results, and appear unique when someone shares your link!",
                }),
                (0, s.jsx)("meta", {
                  property: "og:image",
                  content:
                    "https://github.com/Divyanshu-RS/mySEO/blob/main/webimage.png?raw=true",
                }),
                (0, s.jsx)("meta", {
                  property: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, s.jsx)("meta", {
                  property: "twitter:url",
                  content: "https://main--myseo-drs.netlify.app/",
                }),
                (0, s.jsx)("meta", {
                  property: "twitter:title",
                  content: "mySEO - Meta tags for best SEO",
                }),
                (0, s.jsx)("meta", {
                  property: "twitter:description",
                  content:
                    "Generate meta tags in one click for the best SEO of your website, rank high in search results, and appear unique when someone shares your link!",
                }),
                (0, s.jsx)("meta", {
                  property: "twitter:image",
                  content:
                    "https://github.com/Divyanshu-RS/mySEO/blob/main/webimage.png?raw=true",
                }),
                (0, s.jsx)("script", {
                  async: !0,
                  src: "https://www.googletagmanager.com/gtag/js?id=G-K6YHM6CZEJ",
                }),
                (0, s.jsx)("script", {
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-K6YHM6CZEJ', { page_path: window.location.pathname });\n            ",
                  },
                }),
              ],
            }),
            (0, s.jsxs)("body", {
              className:
                " bg-zinc-100 dark:bg-zinc-800 text-white opensans p-2 px-4 ",
              children: [
                (0, s.jsx)(i, {}),
                (0, s.jsx)(d.Z, {}),
                (0, s.jsx)(j, {}),
                (0, s.jsx)(c, {}),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [647, 774, 888, 179], function () {
      return (t = 8581), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
