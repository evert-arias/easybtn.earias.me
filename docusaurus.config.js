module.exports = {
  title: "EasyButton",
  tagline: "The Arduino Library For Buttons",
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
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        },
        {
          to: "docs/api-pressed",
          activeBasePath: "api",
          label: "API",
          position: "left"
        },
        {
          to: "docs/example-pressed",
          activeBasePath: "examples",
          label: "Examples",
          position: "left"
        },
        { to: "https://blog.earias.me", label: "Blog", position: "right" },
        {
          href: "https://github.com/evert-arias/EasyButton",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/introduction"
            },
            {
              label: "Installation",
              to: "docs/installation"
            },
            {
              label: "Examples",
              to: "docs/example-pressed"
            },
            {
              label: "Guides",
              to: "docs/guide-getting-started-with-easybutton"
            }
          ]
        },
        {
          title: "Examples",
          items: [
            {
              label: "On Pressed",
              to: "docs/example-pressed"
            },
            {
              label: "On Sequence",
              href: "docs/example-sequence"
            },
            {
              label: "On Pressed For Duration",
              href: "docs/example-pressed-for-duration"
            },
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              to: "https://blog.earias.me/"
            },
            {
              label: "GitHub",
              href: "https://github.com/evert-arias/EasyButton"
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCbdTIe6YpgJ6bCL7FI16Bcw"
            }
          ]
        }
      ],
      copyright: `Made with 💙 by Evert Arias`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/evert-arias/easybutton-website"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
