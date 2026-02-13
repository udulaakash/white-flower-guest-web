import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import Layout from "~/components/layout/layout";
import ServiceCard from "~/components/service-card/service-card";
import { getAllServices } from "~/config/services";

export default component$(() => {
  const t = inlineTranslate();
  const services = getAllServices();

  return (
    <Layout>
      <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-16 text-white">
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold md:text-5xl">{t("app.services.title@@Our Services")}</h1>
          <p class="text-xl text-gray-100">
            {t("app.services.intro@@Enhance your stay with our range of services, from airport transfers to exciting tours and adventures")}
          </p>
        </div>
      </section>
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="mb-12">
            <h2 class="mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white">
              {t("app.services.popularServices@@Popular Services")}
            </h2>
            <p class="mx-auto max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
              {t("app.services.popularIntro@@Our most requested services to make your stay more convenient and memorable")}
            </p>
          </div>
          <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.highlight)
              .map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  highlight={true}
                />
              ))}
          </div>
        </div>
      </section>
      <section class="bg-gray-50 py-16 dark:bg-[#031a16]">
        <div class="container mx-auto px-4">
          <h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
            {t("app.services.allServices@@All Services")}
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
});

export const head: DocumentHead = () => {
  const t = inlineTranslate();
  return {
    title: t("app.head.servicesTitle@@Services - White Flower Guest"),
    meta: [
      {
        name: "description",
        content: t("app.head.servicesDescription@@Book airport transfers, tours, diving, and boat safari services at White Flower Guest. Convenient and professional services to enhance your stay in Unawatuna."),
      },
    ],
  };
};
