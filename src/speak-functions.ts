import { server$ } from "@builder.io/qwik-city";
import type { LoadTranslationFn, Translation, TranslationFn } from "qwik-speak";

const translationData = import.meta.glob<{ default: Translation }>("../i18n/*/*.json");

const loadTranslation$: LoadTranslationFn = server$(async (lang: string, asset: string) => {
  const path = `../i18n/${lang}/${asset}.json`;
  const loader = translationData[path];
  if (!loader) return null;
  const mod = await loader();
  return mod?.default ?? null;
});

export const translationFn: TranslationFn = {
  loadTranslation$,
};
