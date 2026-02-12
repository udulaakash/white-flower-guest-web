import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { contact } from "~/config/contact";

export default component$(() => {
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking at White Flower Guest.`;

  return (
    <section class="relative h-[600px] overflow-hidden bg-linear-to-br from-[#004c3f] to-[#008060] md:h-[700px]">
      {/* Background Image Placeholder - will be replaced with actual beach image */}
      <div class="absolute inset-0 bg-[url('/images/hero-beach.jpg')] bg-cover bg-center opacity-60"></div>

      {/* Overlay */}
      <div class="absolute inset-0 bg-linear-to-r from-black/50 to-transparent"></div>

      {/* Content */}
      <div class="relative container mx-auto flex h-full items-center px-4">
        <div class="max-w-2xl text-white">
          <h1 class="mb-4 text-4xl font-bold drop-shadow-lg md:text-6xl">
            Welcome to White Flower Guest
          </h1>
          <p class="mb-6 text-xl drop-shadow-md md:text-2xl">
            {contact.beachProximity}
          </p>
          <p class="mb-8 text-lg text-gray-100 drop-shadow-md md:text-xl">
            Experience the perfect blend of comfort and tropical charm in the
            heart of Unawatuna, Sri Lanka
          </p>
          <div class="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/rooms"
              class="rounded-lg bg-[#008060] px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#004c3f]"
            >
              View Our Rooms
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center space-x-2 rounded-lg bg-white px-8 py-4 text-center text-lg font-semibold text-[#008060] shadow-lg transition-colors hover:bg-gray-100"
            >
              <span>💬</span>
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div class="absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-white to-transparent dark:from-[#041f1a]"></div>
    </section>
  );
});
