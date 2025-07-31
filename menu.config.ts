// Define the mega menu structure
// export const megaMenu = {
//   home: {
//     label: "Home",
//     submenu: {
//       introduction: { href: "/#introduction", label: "introduction" },
//       howItWorks: { href: "/#how-it-works", label: "howItWorks" },
//       driverApp: { href: "/#driver-app", label: "driverApp" },
//       pricing: { href: "/#pricing", label: "pricing" },
//       comingSoon: { href: "/#coming-soon", label: "comingSoon" },
//     },
//   },
//   providers: {
//     label: "Providers",
//     href: "/providers",
//   },
//   suppliers: {
//     label: "Suppliers",
//     href: "/suppliers",
//   },
//   blog: {
//     label: "Blog",
//     href: "/posts",
//   },
// };

export const megaMenu = {
  introduction: {
    label: "Introduction",
    href: "/#introduction",
  },
  howItWorks: {
    label: "How It Works",
    href: "/#how-it-works",
  },
  driverApp: {
    label: "Driver App",
    href: "/#driver-app",
  },
  pricing: {
    label: "Pricing",
    href: "/#pricing",
  },
  comingSoon: {
    label: "Coming Soon",
    href: "/#coming-soon",
  },
  blog: {
    label: "Blog",
    href: "/posts",
  },
};

// Legacy menu items for backwards compatibility
export const mainMenu = {
  introduction: "#introduction",
  howItWorks: "#how-it-works",
  driverApp: "#driver-app",
  pricing: "#pricing",
  comingSoon: "#coming-soon",
};

export const footerMenu = {
  introduction: "#introduction",
  howItWorks: "#how-it-works",
  driverApp: "#driver-app",
  pricing: "#pricing",
  comingSoon: "#coming-soon",
  blog: "/posts",
};

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};
