import { component$, Slot } from "@builder.io/qwik";
import Header from "../header/header";
import Footer from "../footer/footer";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-[#041f1a] dark:text-gray-100">
      <Header />
      <main class="grow">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
