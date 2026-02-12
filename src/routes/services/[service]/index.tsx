import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import Layout from "~/components/layout/layout";
import BookingCTA from "~/components/booking-cta/booking-cta";
import { getServiceById } from "~/config/services";
import { contact } from "~/config/contact";

export default component$(() => {
  const location = useLocation();
  const serviceId = location.params.service;
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <Layout>
        <div class="container mx-auto px-4 py-16">
          <div class="text-center">
            <h1 class="mb-4 text-3xl font-bold">Service Not Found</h1>
            <p class="mb-8 text-gray-600 dark:text-gray-300">
              The service you're looking for doesn't exist.
            </p>
            <a
              href="/services"
              class="inline-block rounded-lg bg-[#008060] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
            >
              View All Services
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking ${service.name} at White Flower Guest.`;

  return (
    <Layout>
      {/* Header Section */}
      <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-12 text-white">
        <div class="container mx-auto px-4">
          <div class="mb-4 flex items-center space-x-4">
            {service.icon && <span class="text-5xl">{service.icon}</span>}
            <div>
              <h1 class="text-4xl font-bold md:text-5xl">{service.name}</h1>
              {service.highlight && (
                <span class="mt-2 inline-block rounded-full bg-[#008060] px-3 py-1 text-sm font-semibold">
                  Popular Service
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-4xl">
            {/* Image */}
            {service.images && service.images.length > 0 && (
              <div class="mb-8">
                <img
                  src={service.images[0]}
                  alt={service.name}
                  class="h-96 w-full rounded-lg object-cover shadow-lg"
                  loading="eager"
                />
              </div>
            )}

            {/* Description */}
            <div class="mb-8">
              <h2 class="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
                About {service.name}
              </h2>
              <p class="mb-4 text-lg text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              {service.detailedDescription && (
                <p class="text-lg text-gray-600 dark:text-gray-300">
                  {service.detailedDescription}
                </p>
              )}
            </div>

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div class="mb-8">
                <h3 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                  What's Included
                </h3>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      class="flex items-start space-x-3 rounded-lg bg-gray-50 p-4 dark:bg-white/5"
                    >
                      <span class="mt-1 text-xl text-[#008060]">✓</span>
                      <span class="text-gray-700 dark:text-gray-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing */}
            {service.pricing && (
              <div class="mb-8 rounded-lg border-l-4 border-[#36CFC9] bg-[#36CFC9]/10 p-6 dark:bg-[#36CFC9]/10">
                <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  Pricing
                </h3>
                <p class="text-lg font-semibold text-[#008060]">
                  {service.pricing}
                </p>
              </div>
            )}

            {/* Booking Buttons */}
            <div class="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="block flex w-full items-center justify-center space-x-2 rounded-lg bg-[#25D366] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#20BA5A]"
              >
                <span>💬</span>
                <span>Book via WhatsApp</span>
              </a>
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full rounded-lg bg-[#008060] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#004c3f]"
              >
                Check Room Availability on Booking.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA />
    </Layout>
  );
});

export const head: DocumentHead = ({ params }) => {
  const service = getServiceById(params.service);

  if (!service) {
    return {
      title: "Service Not Found - White Flower Guest",
    };
  }

  return {
    title: `${service.name} - White Flower Guest`,
    meta: [
      {
        name: "description",
        content: service.description,
      },
    ],
  };
};
