export const i18n = {
    defaultLocale: "en",
    locales: ["en", "pl-PL"], //lista języków
  } as const;
  
  export type Locale = (typeof i18n)["locales"][number];