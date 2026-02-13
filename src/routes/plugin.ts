import type { RequestHandler } from "@builder.io/qwik-city";
import { setSpeakContext, validateLocale } from "qwik-speak";
import { config } from "../speak-config";

export const onRequest: RequestHandler = ({ locale, url }) => {
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const maybeLang = segments[0];
  const lang =
    maybeLang && validateLocale(maybeLang) && config.supportedLocales.some((l) => l.lang === maybeLang)
      ? maybeLang
      : config.defaultLocale.lang;
  setSpeakContext(config);
  locale(lang);
};
