import { component$ } from "@builder.io/qwik";
import { contact } from "~/config/contact";

export default component$(() => {
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking at White Flower Guest.`;

  return (
    <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-16">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center text-white">
          <h2 class="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Book Your Stay?
          </h2>
          <p class="mb-8 text-xl text-gray-100">
            Check availability on Booking.com or contact us directly via
            WhatsApp for personalized service
          </p>

          <div class="flex flex-col justify-center gap-4 sm:flex-row">
            {/* Booking.com Button */}
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center space-x-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#008060] shadow-lg transition-colors hover:bg-gray-100"
            >
              <span>🔗</span>
              <span>Check Availability on Booking.com</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center space-x-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#20BA5A]"
            >
              <span>💬</span>
              <span>Book via WhatsApp</span>
            </a>
          </div>

          <p class="mt-6 text-sm text-gray-200">
            Direct bookings via WhatsApp may include special offers and
            personalized service
          </p>
        </div>
      </div>
    </section>
  );
});
