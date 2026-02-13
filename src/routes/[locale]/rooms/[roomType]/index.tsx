import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import Layout from "~/components/layout/layout";
import ImageGallery from "~/components/image-gallery/image-gallery";
import BookingCTA from "~/components/booking-cta/booking-cta";
import { getRoomById } from "~/config/rooms";
import { contact } from "~/config/contact";

export default component$(() => {
  const t = inlineTranslate();
  const location = useLocation();
  const locale = location.params.locale;
  const roomType = location.params.roomType;
  const base = locale ? `/${locale}` : "";

  const roomResource = useResource$<ReturnType<typeof getRoomById>>(async ({ track }) => {
    track(() => roomType);
    return getRoomById(roomType);
  });

  return (
    <Layout>
      <Resource
        value={roomResource}
        onPending={() => (
          <div class="container mx-auto px-4 py-16">
            <div class="text-center text-gray-700 dark:text-gray-200">
              {t("app.rooms.loading@@Loading...")}
            </div>
          </div>
        )}
        onRejected={() => (
          <div class="container mx-auto px-4 py-16">
            <div class="text-center">
              <h1 class="mb-4 text-3xl font-bold">{t("app.rooms.roomNotFound@@Room Not Found")}</h1>
              <p class="mb-8 text-gray-600 dark:text-gray-300">
                {t("app.rooms.roomNotFoundText@@The room you're looking for doesn't exist.")}
              </p>
              <a
                href={`${base}/rooms`}
                class="inline-block rounded-lg bg-[#008060] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
              >
                {t("app.rooms.viewAllRooms@@View All Rooms")}
              </a>
            </div>
          </div>
        )}
        onResolved={(room) => {
          if (!room) {
            return (
              <div class="container mx-auto px-4 py-16">
                <div class="text-center">
                  <h1 class="mb-4 text-3xl font-bold">{t("app.rooms.roomNotFound@@Room Not Found")}</h1>
                  <p class="mb-8 text-gray-600 dark:text-gray-300">
                    {t("app.rooms.roomNotFoundText@@The room you're looking for doesn't exist.")}
                  </p>
                  <a
                    href={`${base}/rooms`}
                    class="inline-block rounded-lg bg-[#008060] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
                  >
                    {t("app.rooms.viewAllRooms@@View All Rooms")}
                  </a>
                </div>
              </div>
            );
          }

          const name = t(`rooms.${room.id}.name@@${room.name}`);
          const description = t(`rooms.${room.id}.description@@${room.description}`);
          const capacity = t(`rooms.${room.id}.capacity@@${room.capacity}`);
          const size = room.size ? t(`rooms.${room.id}.size@@${room.size}`) : null;
          const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking a ${name} at White Flower Guest.`;

          return (
            <>
              <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-12 text-white">
                <div class="container mx-auto px-4">
                  <h1 class="mb-2 text-4xl font-bold md:text-5xl">{name}</h1>
                  <p class="text-lg text-gray-100">
                    {room.count}{" "}
                    {room.count === 1 ? t("app.rooms.roomAvailable@@Room Available") : t("app.rooms.roomsAvailable@@Rooms Available")}
                  </p>
                </div>
              </section>
              <section class="bg-white py-16 dark:bg-[#041f1a]">
                <div class="container mx-auto px-4">
                  <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                      <ImageGallery images={room.images} alt={name} />
                    </div>
                    <div>
                      <h2 class="mb-4 text-3xl font-bold text-gray-800 dark:text-white">{name}</h2>
                      <p class="mb-6 text-lg text-gray-600 dark:text-gray-300">{description}</p>
                      <div class="mb-6 space-y-3">
                        <div class="flex items-center space-x-3">
                          <span class="text-2xl">👥</span>
                          <span class="text-gray-700 dark:text-gray-200">
                            <strong>{t("app.rooms.capacity@@Capacity")}:</strong> {capacity}
                          </span>
                        </div>
                        {size && (
                          <div class="flex items-center space-x-3">
                            <span class="text-2xl">📐</span>
                            <span class="text-gray-700 dark:text-gray-200">
                              <strong>{t("app.rooms.size@@Size")}:</strong> {size}
                            </span>
                          </div>
                        )}
                        <div class="flex items-center space-x-3">
                          <span class="text-2xl">🏠</span>
                          <span class="text-gray-700 dark:text-gray-200">
                            <strong>{t("app.rooms.roomsAvailableLabel@@Rooms Available")}:</strong> {room.count}
                          </span>
                        </div>
                      </div>
                      <div class="mb-8">
                        <h3 class="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                          {t("app.rooms.roomFeatures@@Room Features")}
                        </h3>
                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {room.features.map((_, i) => (
                            <div
                              key={i}
                              class="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                            >
                              <span class="text-[#008060]">✓</span>
                              <span>{t(`rooms.${room.id}.feature${i}@@${room.features[i] ?? ""}`)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="space-y-3">
                        <a
                          href={contact.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="block w-full rounded-lg bg-[#008060] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#004c3f]"
                        >
                          {t("app.rooms.checkAvailability@@Check Availability on Booking.com")}
                        </a>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="block flex w-full items-center justify-center space-x-2 rounded-lg bg-[#25D366] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#20BA5A]"
                        >
                          <span>💬</span>
                          <span>{t("app.home.hero.bookWhatsApp@@Book via WhatsApp")}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <BookingCTA />
            </>
          );
        }}
      />
    </Layout>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t = inlineTranslate();
  const room = getRoomById(params.roomType);

  if (!room) {
    return {
      title: t("app.head.roomNotFoundTitle@@Room Not Found - White Flower Guest"),
    };
  }

  const name = t(`rooms.${room.id}.name@@${room.name}`);
  const description = t(`rooms.${room.id}.description@@${room.description}`);

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
