/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import type { RenderOptions } from "@builder.io/qwik/server";
import { isDev } from "@builder.io/qwik/build";
import Root from "./root";
import { config } from "./speak-config";

function extractBase(opts: RenderOptions): string {
  const serverData = (opts as RenderToStreamOptions).serverData as { locale?: string } | undefined;
  const locale = serverData?.locale;
  if (!isDev && locale) {
    return "/build/" + locale;
  }
  return "/build";
}

export default function (opts: RenderToStreamOptions) {
  const locale = (opts.serverData as { locale?: string } | undefined)?.locale ?? config.defaultLocale.lang;
  return renderToStream(<Root />, {
    ...opts,
    base: extractBase,
    containerAttributes: {
      lang: locale,
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}
