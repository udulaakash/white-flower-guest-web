import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import Layout from "~/components/layout/layout";
import Hero from "~/components/hero/hero";
import RoomCard from "~/components/room-card/room-card";
import ServiceCard from "~/components/service-card/service-card";
import BookingCTA from "~/components/booking-cta/booking-cta";
import ImageGallery from "~/components/image-gallery/image-gallery";
import { rooms } from "~/config/rooms";
import { getHighlightedServices } from "~/config/services";

export default component$(() => {
  const t = inlineTranslate();
  const location = useLocation();
  const locale = location.params.locale;
  const base = `/${locale}`;
  const featuredRooms = rooms.slice(0, 3);
  const highlightedServices = getHighlightedServices();
  const galleryImages = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
    "/images/gallery/9.jpg",
    "/images/gallery/10.jpg",
    "/images/gallery/11.jpg",
    "/images/gallery/12.jpg",
    "/images/gallery/13.jpg",
    "/images/gallery/14.jpg",
    "/images/gallery/15.jpg",
  ];

  return (
    <Layout>
      <Hero />
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              {t("app.home.ourRooms@@Our Rooms")}
            </h2>
            <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              {t("app.home.ourRoomsIntro@@Choose from our selection of comfortable rooms, each designed to provide a relaxing tropical retreat")}
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <div class="mt-8 text-center">
            <a
              href={`${base}/rooms`}
              class="inline-block rounded-lg bg-[#008060] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
            >
              {t("app.home.viewAllRooms@@View All Rooms")}
            </a>
          </div>
        </div>
      </section>
      <section class="bg-gray-50 py-16 dark:bg-[#031a16]">
        <div class="container mx-auto px-4">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              {t("app.home.ourServices@@Our Services")}
            </h2>
            <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              {t("app.home.ourServicesIntro@@Enhance your stay with our range of services, from airport transfers to exciting tours and adventures")}
            </p>
          </div>
          <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlightedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                highlight={service.highlight}
              />
            ))}
          </div>
          <div class="text-center">
            <a
              href={`${base}/services`}
              class="inline-block rounded-lg bg-[#008060] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#004c3f]"
            >
              {t("app.home.viewAllServices@@View All Services")}
            </a>
          </div>
        </div>
      </section>
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="mb-8 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              {t("app.home.gallery@@Gallery")}
            </h2>
            <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              {t("app.home.galleryIntro@@Take a closer look at White Flower Guest and its cozy tropical surroundings.")}
            </p>
          </div>
          <ImageGallery
            images={galleryImages}
            alt="White Flower Guest gallery"
          />
        </div>
      </section>
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="mb-12 text-center">
            <h2 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              {t("app.home.whyChoose@@Why Choose White Flower Guest?")}
            </h2>
          </div>
          <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div class="p-6 text-center">
              <div class="mb-4 text-5xl">📍</div>
              <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {t("app.home.primeLocation@@Prime Location")}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {t("contact.beachProximity@@Very close to Unawatuna Beach")}. {t("app.home.locationText@@Just steps away from the beautiful Unawatuna Beach")}
              </p>
            </div>
            <div class="p-6 text-center">
              <div class="mb-4 text-5xl">⭐</div>
              <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {t("app.home.excellentReviews@@Excellent Reviews")}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {t("app.home.reviewsText@@Rated \"Wonderful\" 9.0/10 by our guests. Experience the hospitality that keeps guests coming back")}
              </p>
            </div>
            <div class="p-6 text-center">
              <div class="mb-4 text-5xl">🏡</div>
              <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {t("app.home.comfortableStay@@Comfortable Stay")}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {t("app.home.comfortText@@Clean, comfortable rooms with traditional charm and modern amenities")}
              </p>
            </div>
          </div>
          <div class="mx-auto mt-12 max-w-3xl rounded-lg border-l-4 border-[#36CFC9] bg-gray-50 p-8 dark:bg-white/5">
            <p class="mb-4 text-lg text-gray-700 italic dark:text-gray-200">
              {t("app.home.guestQuote@@\"Great place with very friendly hosts. Late check-in at 23:00 was no issue at all, which we really appreciated.\"")}
            </p>
            <p class="font-semibold text-gray-600 dark:text-gray-300">
              {t("app.home.guestAuthor@@— Susan, Germany")}
            </p>
          </div>
        </div>
      </section>
      <BookingCTA />
    </Layout>
  );
});

export const head: DocumentHead = () => {
  const t = inlineTranslate();
  return {
    title: t("app.head.homeTitle@@White Flower Guest - Unawatuna Beach Accommodation"),
    meta: [
      {
        name: "description",
        content: t("app.head.homeDescription@@White Flower Guest offers comfortable accommodation very close to Unawatuna Beach, Sri Lanka. Book your stay and explore our rooms, airport transfers, tours, diving, and boat safari services."),
      },
      {
        name: "keywords",
        content:
          "White Flower Guest, Unawatuna, Sri Lanka, beach accommodation, guest house, airport transfers, tours, diving, boat safari",
      },
      {
        property: "og:title",
        content: t("app.head.homeTitle@@White Flower Guest - Unawatuna Beach Accommodation"),
      },
      {
        property: "og:description",
        content: t("app.head.homeDescription@@White Flower Guest offers comfortable accommodation very close to Unawatuna Beach, Sri Lanka. Book your stay and explore our rooms, airport transfers, tours, diving, and boat safari services."),
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  };
};
