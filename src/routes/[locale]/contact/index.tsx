import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import Layout from "~/components/layout/layout";
import { contact } from "~/config/contact";

export default component$(() => {
  const t = inlineTranslate();
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I have a question about White Flower Guest.`;

  return (
    <Layout>
      <section class="bg-gradient-to-r from-[#004c3f] to-[#008060] py-16 text-white">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{t("app.contact.title@@Contact Us")}</h1>
          <p class="text-xl text-gray-100">
            {t("app.contact.subtitle@@Get in touch with us for bookings, inquiries, or any questions")}
          </p>
        </div>
      </section>
      <section class="py-16 bg-white dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div class="p-6 bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-lg">
                <div class="text-4xl mb-4">📍</div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">{t("app.contact.address@@Address")}</h3>
                <p class="text-gray-600 dark:text-gray-300">{contact.address}</p>
                <p class="text-gray-600 dark:text-gray-300 mt-2">{contact.location}</p>
              </div>
              <div class="p-6 bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-lg">
                <div class="text-4xl mb-4">📞</div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {t("app.contact.contactMethods@@Contact Methods")}
                </h3>
                <div class="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-[#25D366] transition-colors"
                  >
                    <span class="text-2xl">💬</span>
                    <span>WhatsApp: {contact.whatsapp}</span>
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    class="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-[#36CFC9] transition-colors"
                  >
                    <span class="text-2xl">📧</span>
                    <span>{contact.email}</span>
                  </a>
                  {contact.phone && (
                    <div class="flex items-center space-x-3 text-gray-700 dark:text-gray-200">
                      <span class="text-2xl">☎️</span>
                      <span>{contact.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-[#004c3f] to-[#008060] p-8 rounded-lg text-white text-center">
              <h2 class="text-2xl font-bold mb-4">{t("app.contact.readyToBook@@Ready to Book?")}</h2>
              <p class="mb-6 text-gray-100">
                {t("app.contact.readySubtitle@@Check availability on Booking.com or contact us directly via WhatsApp")}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-white hover:bg-gray-100 text-[#008060] px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t("app.contact.bookBooking@@Book on Booking.com")}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  {t("app.contact.contactWhatsApp@@Contact via WhatsApp")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
});

export const head: DocumentHead = () => {
  const t = inlineTranslate();
  return {
    title: t("app.head.contactTitle@@Contact Us - White Flower Guest"),
    meta: [
      {
        name: "description",
        content: t("app.head.contactDescription@@Contact White Flower Guest in Unawatuna, Sri Lanka. Book your stay via WhatsApp or Booking.com. We're here to help with your accommodation needs."),
      },
    ],
  };
};
