import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { useQwikSpeak } from "qwik-speak";
import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";
import { translationFn } from "./speak-functions";
import { inject } from "@vercel/analytics";

import "./global.css";

export default component$(() => {
  inject();
  useQwikSpeak({ config, translationFn });

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {/* Set theme class before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={`
            (() => {
              try {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = stored || (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
              } catch (e) {}
            })();
          `}
        />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
