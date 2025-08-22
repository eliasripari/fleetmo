import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "it"],

  // Used when no locale matches
  defaultLocale: "en",

  // Configure locale prefix behavior
  localePrefix: "as-needed",

  // Alternative paths configuration
  pathnames: {
    "/": "/",
    "/providers": {
      en: "/providers",
      it: "/providers",
    },
    "/suppliers": {
      en: "/suppliers",
      it: "/suppliers",
    },
    "/posts": {
      en: "/posts",
      it: "/posts",
    },
  },
});
