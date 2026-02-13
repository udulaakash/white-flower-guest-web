import type { SpeakConfig } from "qwik-speak";

export const config: SpeakConfig = {
  defaultLocale: { lang: "en", currency: "USD", timeZone: "UTC" },
  supportedLocales: [
    { lang: "en", currency: "USD", timeZone: "UTC" },
    { lang: "ru", currency: "USD", timeZone: "UTC" },
  ],
  assets: ["app"],
  keySeparator: ".",
  keyValueSeparator: "@@",
};
