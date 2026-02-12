import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import Layout from "~/components/layout/layout";
import ImageGallery from "~/components/image-gallery/image-gallery";
import BookingCTA from "~/components/booking-cta/booking-cta";
import { getRoomById } from "~/config/rooms";
import { contact } from "~/config/contact";

export default component$(() => {
  const location = useLocation();
  const roomType = location.params.roomType;

  const roomResource = useResource$<any>(async ({ track }) => {
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
              Loading...
            </div>
          </div>
        )}
        onRejected={() => (
          <div class="container mx-auto px-4 py-16">
            <div class="text-center">
              <h1 class="mb-4 text-3xl font-bold">Room Not Found</h1>
              <p class="mb-8 text-gray-600 dark:text-gray-300">
                The room you're looking for doesn't exist.
              </p>
              <a
                href="/rooms"
                class="inline-block rounded-lg bg-[#008060] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
              >
                View All Rooms
              </a>
            </div>
          </div>
        )}
        onResolved={(room) => {
          if (!room) {
            return (
              <div class="container mx-auto px-4 py-16">
                <div class="text-center">
                  <h1 class="mb-4 text-3xl font-bold">Room Not Found</h1>
                  <p class="mb-8 text-gray-600 dark:text-gray-300">
                    The room you're looking for doesn't exist.
                  </p>
                  <a
                    href="/rooms"
                    class="inline-block rounded-lg bg-[#008060] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
                  >
                    View All Rooms
                  </a>
                </div>
              </div>
            );
          }

          const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking a ${room.name} at White Flower Guest.`;

          return (
            <>
              {/* Header Section */}
              <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-12 text-white">
                <div class="container mx-auto px-4">
                  <h1 class="mb-2 text-4xl font-bold md:text-5xl">
                    {room.name}
                  </h1>
                  <p class="text-lg text-gray-100">
                    {room.count}{" "}
                    {room.count === 1 ? "Room Available" : "Rooms Available"}
                  </p>
                </div>
              </section>

              {/* Room Details */}
              <section class="bg-white py-16 dark:bg-[#041f1a]">
                <div class="container mx-auto px-4">
                  <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Image Gallery */}
                    <div>
                      <ImageGallery images={room.images} alt={room.name} />
                    </div>

                    {/* Room Info */}
                    <div>
                      <h2 class="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
                        {room.name}
                      </h2>
                      <p class="mb-6 text-lg text-gray-600 dark:text-gray-300">
                        {room.description}
                      </p>

                      {/* Room Details */}
                      <div class="mb-6 space-y-3">
                        <div class="flex items-center space-x-3">
                          <span class="text-2xl">👥</span>
                          <span class="text-gray-700 dark:text-gray-200">
                            <strong>Capacity:</strong> {room.capacity}
                          </span>
                        </div>
                        {room.size && (
                          <div class="flex items-center space-x-3">
                            <span class="text-2xl">📐</span>
                            <span class="text-gray-700 dark:text-gray-200">
                              <strong>Size:</strong> {room.size}
                            </span>
                          </div>
                        )}
                        <div class="flex items-center space-x-3">
                          <span class="text-2xl">🏠</span>
                          <span class="text-gray-700 dark:text-gray-200">
                            <strong>Rooms Available:</strong> {room.count}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div class="mb-8">
                        <h3 class="mb-4 text-xl font-bold text-gray-800 dark:text-white">
                          Room Features
                        </h3>
                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {room.features.map((feature: string) => (
                            <div
                              key={feature}
                              class="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                            >
                              <span class="text-[#008060]">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Booking Buttons */}
                      <div class="space-y-3">
                        <a
                          href={contact.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="block w-full rounded-lg bg-[#008060] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#004c3f]"
                        >
                          Check Availability on Booking.com
                        </a>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="block flex w-full items-center justify-center space-x-2 rounded-lg bg-[#25D366] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#20BA5A]"
                        >
                          <span>💬</span>
                          <span>Book via WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Booking CTA */}
              <BookingCTA />
            </>
          );
        }}
      />
    </Layout>
  );
});

export const head: DocumentHead = ({ params }) => {
  const room = getRoomById(params.roomType);

  if (!room) {
    return {
      title: "Room Not Found - White Flower Guest",
    };
  }

  return {
    title: `${room.name} - White Flower Guest`,
    meta: [
      {
        name: "description",
        content: room.description,
      },
    ],
  };
};
