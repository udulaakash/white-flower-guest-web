import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { config } from "../../speak-config";

export const onRequest: RequestHandler = ({ params, redirect, url }) => {
  const supported = config.supportedLocales.some(
    (l) => l.lang === params.locale,
  );
  if (!supported) {
    const rest = url.pathname.replace(/^\/[^/]+/, "") || "";
    throw redirect(302, "/en" + rest);
  }
};

export default component$(() => <Slot />);
