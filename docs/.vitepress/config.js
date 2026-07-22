export default {
  title: "RB-Ware",
description: "Documentation and setup guides for Rainbow Robotics RB Cobot & RB-X welding systems",
  base: "/rbware-cs-copilot-docs/",
  lastUpdated: true,

  head: [
    ["link", { rel: "icon", href: "/rbware-cs-copilot-docs/favicon.png", type: "image/png" }],
  ],

  themeConfig: {
    logo: "/logo.png",

    nav: [
      { text: "Home", link: "/" },
      { text: "Manual", link: "/product-introduction/cobot-system" },
      { text: "Policy", link: "/policy/quick-reference" },
    ],

    sidebar: [
      {
        text: "Policy & Workflow",
        collapsed: false,
        items: [
          { text: "Field Confirmed Corrections and Precedents", link: "/policy/field-confirmed-corrections" },
          { text: "Quick Reference", link: "/policy/quick-reference" },
        ],
      },
      {
        text: "Robot Hardware & Safety",
        collapsed: false,
        items: [
          { text: "Cobot Product Introduction", link: "/product-introduction/cobot-system" },
          { text: "Robot Installation", link: "/hardware-safety/installation" },
          { text: "Robot Safety and Precautions", link: "/hardware-safety/safety-and-precautions" },
          { text: "Robot Safety Functions", link: "/hardware-safety/safety-functions" },
          { text: "Getting Started and Startup", link: "/hardware-safety/getting-started" },
          { text: "Maintenance", link: "/hardware-safety/maintenance" },
        ],
      },
      {
        text: "RB-X / RB-MIG Software",
        collapsed: false,
        items: [
          { text: "Software Overview: Make/Play/Setup", link: "/software/overview" },
          { text: "Setup Menu Reference", link: "/software/setup-menu-reference" },
          { text: "RB-X Software Guide", link: "/software/rb-x-guide" },
          { text: "Touch Sensing", link: "/software/touch-sensing" },
        ],
      },
      {
        text: "Welder Integration",
        collapsed: false,
        items: [
          { text: "Kemppi", link: "/welder-integration/kemppi" },
          { text: "Maven", link: "/welder-integration/maven" },
          { text: "WECO", link: "/welder-integration/weco" },
          { text: "IMT", link: "/welder-integration/imt" },
        ],
      },
      {
        text: "Feature Guides",
        collapsed: false,
        items: [
          { text: "Multi-Pass", link: "/feature-guides/multi-pass" },
        ],
      },
      {
        text: "Reference / Diagnostics",
        collapsed: false,
        items: [
          { text: "Error Codes Reference", link: "/reference/error-codes" },
          { text: "CS Case History Reference", link: "/reference/case-history" },
          { text: "Internal Trackers and Files", link: "/reference/internal-trackers" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/ErtugrulHuner/rbware-cs-copilot-docs" },
    ],

    search: {
      provider: "local",
    },
  },
};
