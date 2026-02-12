import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { contact } from "~/config/contact";

export default component$(() => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello! I'm interested in booking at White Flower Guest.`;

  return (
    <footer class="bg-black text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 class="mb-4 text-xl font-bold text-[#008060]">
              White Flower Guest
            </h3>
            <p class="mb-4 text-gray-300">{contact.beachProximity}</p>
            <p class="text-gray-300">{contact.address}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 class="mb-4 text-xl font-bold text-[#008060]">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <Link
                  href="/"
                  class="text-gray-300 transition-colors hover:text-[#36CFC9]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  class="text-gray-300 transition-colors hover:text-[#36CFC9]"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  class="text-gray-300 transition-colors hover:text-[#36CFC9]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  class="text-gray-300 transition-colors hover:text-[#36CFC9]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 class="mb-4 text-xl font-bold text-[#008060]">Contact Us</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center space-x-2 transition-colors hover:text-[#36CFC9]"
                >
                  <span>📱</span>
                  <span>WhatsApp: {contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  class="transition-colors hover:text-[#36CFC9]"
                >
                  📧 {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-colors hover:text-[#36CFC9]"
                >
                  🔗 Book on Booking.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div class="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} White Flower Guest. All rights reserved. |{" "}
            {contact.location}
          </p>
        </div>
      </div>
    </footer>
  );
});
