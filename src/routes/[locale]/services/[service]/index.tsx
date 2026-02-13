import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import Layout from "~/components/layout/layout";
import BookingCTA from "~/components/booking-cta/booking-cta";
import { getServiceById } from "~/config/services";
import { contact } from "~/config/contact";

export default component$(() => {
  const t = inlineTranslate();
  const location = useLocation();
  const locale = location.params.locale;
  const serviceId = location.params.service;
  const base = locale ? `/${locale}` : "";
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <Layout>
        <div class="container mx-auto px-4 py-16">
          <div class="text-center">
            <h1 class="mb-4 text-3xl font-bold">{t("app.services.serviceNotFound@@Service Not Found")}</h1>
            <p class="mb-8 text-gray-600 dark:text-gray-300">
              {t("app.services.serviceNotFoundText@@The service you're looking for doesn't exist.")}
            </p>
            <a
              href={`${base}/services`}
              class="inline-block rounded-lg bg-[#008060] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
            >
              {t("app.services.viewAllServices@@View All Services")}
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  const name = t(`services.${service.id}.name@@${service.name}`);
  const description = t(`services.${service.id}.description@@${service.description}`);
  const detailedDescription = service.detailedDescription
    ? t(`services.${service.id}.detailedDescription@@${service.detailedDescription}`)
    : null;
  const pricing = service.pricing ? t(`services.${service.id}.pricing@@${service.pricing}`) : null;
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking ${name} at White Flower Guest.`;

  return (
    <Layout>
      <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-12 text-white">
        <div class="container mx-auto px-4">
          <div class="mb-4 flex items-center space-x-4">
            {service.icon && <span class="text-5xl">{service.icon}</span>}
            <div>
              <h1 class="text-4xl font-bold md:text-5xl">{name}</h1>
              {service.highlight && (
                <span class="mt-2 inline-block rounded-full bg-[#008060] px-3 py-1 text-sm font-semibold">
                  {t("app.services.popularBadge@@Popular Service")}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-4xl">
            {service.images && service.images.length > 0 && (
              <div class="mb-8">
                <img
                  src={service.images[0]}
                  alt={name}
                  class="h-96 w-full rounded-lg object-cover shadow-lg"
                  loading="eager"
                />
              </div>
            )}
            <div class="mb-8">
              <h2 class="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
                {t("app.services.about@@About")} {name}
              </h2>
              <p class="mb-4 text-lg text-gray-600 dark:text-gray-300">{description}</p>
              {detailedDescription && (
                <p class="text-lg text-gray-600 dark:text-gray-300">{detailedDescription}</p>
              )}
            </div>
            {service.features && service.features.length > 0 && (
              <div class="mb-8">
                <h3 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                  {t("app.services.whatsIncluded@@What's Included")}
                </h3>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {service.features.map((_, i) => (
                    <div
                      key={i}
                      class="flex items-start space-x-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5"
                    >
                      <span class="mt-1 text-xl text-[#008060]">✓</span>
                      <span class="text-gray-700 dark:text-gray-200">
                        {t(`services.${service.id}.feature${i}@@${service.features![i] ?? ""}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {pricing && (
              <div class="mb-8 rounded-lg border-l-4 border-[#36CFC9] bg-[#36CFC9]/10 p-6 dark:bg-[#36CFC9]/10">
                <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {t("app.services.pricing@@Pricing")}
                </h3>
                <p class="text-lg font-semibold text-[#008060]">{pricing}</p>
              </div>
            )}
            <div class="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="block flex w-full items-center justify-center space-x-2 rounded-lg bg-[#25D366] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#20BA5A]"
              >
                <span>💬</span>
                <span>{t("app.services.bookWhatsApp@@Book via WhatsApp")}</span>
              </a>
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full rounded-lg bg-[#008060] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#004c3f]"
              >
                {t("app.services.checkRooms@@Check Room Availability on Booking.com")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <BookingCTA />
    </Layout>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t = inlineTranslate();
  const service = getServiceById(params.service);

  if (!service) {
    return {
      title: t("app.head.serviceNotFoundTitle@@Service Not Found - White Flower Guest"),
    };
  }

  const name = t(`services.${service.id}.name@@${service.name}`);
  const description = t(`services.${service.id}.description@@${service.description}`);

  return {
    title: `${name} - White Flower Guest`,
    meta: [
      {
        name: "description",
        content: description,
      },
    ],
  };
};
