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
        { to: "https://blog.earias.me", label: "Blog", position: "left" },
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
              to: "docs/doc1"
            },
            {
              label: "Installing in Arduino IDE",
              to: "docs/doc2"
            },
            {
              label: "Installing in PlatformIO",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Examples",
          items: [
            {
              label: "Pressed",
              to: "https://github.com/evert-arias/EasyButton"
            },
            {
              label: "Pressed For Duration",
              href: "https://github.com/evert-arias/EasyButton"
            },
            {
              label: "Sequence",
              href: "https://github.com/evert-arias/EasyButton"
            },
            {
              label: "Touch Button",
              href: "https://github.com/evert-arias/EasyButton"
            }
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
