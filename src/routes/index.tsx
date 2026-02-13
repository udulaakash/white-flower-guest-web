import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = ({ redirect }) => {
  throw redirect(302, "/en");
};

export default component$(() => {
  return (
    <div class="flex min-h-screen items-center justify-center bg-white dark:bg-[#041f1a]">
      <p class="text-gray-600 dark:text-gray-300">Redirecting...</p>
    </div>
  );
});
