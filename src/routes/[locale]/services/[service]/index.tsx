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
            <h1 class="mb-4 text-3xl font-bold">
              {t("app.services.serviceNotFound@@Service Not Found")}
            </h1>
            <p class="mb-8 text-gray-600 dark:text-gray-300">
              {t(
                "app.services.serviceNotFoundText@@The service you're looking for doesn't exist.",
              )}
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
  const description = t(
    `services.${service.id}.description@@${service.description}`,
  );
  const detailedDescription = service.detailedDescription
    ? t(
        `services.${service.id}.detailedDescription@@${service.detailedDescription}`,
      )
    : null;
  const pricing = service.pricing
    ? t(`services.${service.id}.pricing@@${service.pricing}`)
    : null;
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
              <p class="mb-4 text-lg text-gray-600 dark:text-gray-300">
                {description}
              </p>
              {detailedDescription && (
                <p class="text-lg text-gray-600 dark:text-gray-300">
                  {detailedDescription}
                </p>
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
                        {t(
                          `services.${service.id}.feature${i}@@${service.features![i] ?? ""}`,
                        )}
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
                <span class="h-7 w-7">
                  <svg fill="none" viewBox="0 0 360 362">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span>{t("app.services.bookWhatsApp@@Book via WhatsApp")}</span>
              </a>
              {/* <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full rounded-lg bg-[#008060] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#004c3f]"
              >
                {t("app.services.checkRooms@@Check Room Availability on Booking.com")}
              </a> */}
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
      title: t(
        "app.head.serviceNotFoundTitle@@Service Not Found - White Flower Guest",
      ),
    };
  }

  const name = t(`services.${service.id}.name@@${service.name}`);
  const description = t(
    `services.${service.id}.description@@${service.description}`,
  );

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
