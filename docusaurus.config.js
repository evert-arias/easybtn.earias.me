module.exports = {
  title: "EasyButton",
  tagline:
    "Arduino library for debouncing momentary contact switches, detect press, release, long press and sequences with event definitions and callbacks.",
  url: "https://easybtn.earias.me",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "evert-arias", // Usually your GitHub org/user name.
  projectName: "EasyButton", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "EasyButton",
      logo: {
        alt: "EasyButton Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/on-single-press-api",
          activeBasePath: "api",
          label: "API",
          position: "left",
        },
        {
          to: "docs/on-single-press-example",
          activeBasePath: "examples",
          label: "Examples",
          position: "left",
        },
        { to: "/contributors", label: "Contributors", position: "left" },
        { to: "https://blog.earias.me", label: "Blog", position: "right" },
        {
          href: "https://github.com/evert-arias/EasyButton",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction",
            },
            {
              label: "Installation",
              to: "docs/installation",
            },
            {
              label: "Fundamentals",
              to: "docs/fundamentals",
            },
          ],
        },
        {
          title: "Examples",
          items: [
            {
              label: "Single Press",
              to: "docs/on-single-press-example",
            },
            {
              label: "Detecting Sequence",
              href: "docs/on-sequence-example",
            },
            {
              label: "Pressed For Duration",
              href: "docs/on-pressed-for-duration-example",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              to: "https://blog.earias.me/",
            },
            {
              label: "GitHub",
              href: "https://github.com/evert-arias/EasyButton",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCbdTIe6YpgJ6bCL7FI16Bcw",
            },
          ],
        },
      ],
      copyright: `Made with 💙 by Evert Arias`,
    },
    googleAnalytics: {
      trackingID: "UA-137998950-8",
      anonymizeIP: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/evert-arias/easybutton-website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: ["@docusaurus/plugin-google-analytics"],
};
