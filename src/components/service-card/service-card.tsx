import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import type { Service } from "~/config/services";

interface ServiceCardProps {
  service: Service;
  highlight?: boolean;
}

export default component$(({ service, highlight = false }: ServiceCardProps) => {
  const t = inlineTranslate();
  const location = useLocation();
  const locale = location.params.locale;
  const base = locale ? `/${locale}` : "";
  const mainImage = service.images?.[0] || "/images/placeholder-service.jpg";
  const name = t(`services.${service.id}.name@@${service.name}`);
  const description = t(`services.${service.id}.description@@${service.description}`);

  return (
    <div
      class={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-white/5 dark:border dark:border-white/10 dark:shadow-black/30 ${
        highlight ? "ring-2 ring-[#36CFC9] ring-offset-2 dark:ring-offset-[#041f1a]" : ""
      }`}
    >
      <div class="relative h-48 overflow-hidden">
        <img
          src={mainImage}
          alt={name}
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {highlight && (
          <div class="absolute top-4 left-4 bg-[#008060] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {t("app.card.popular@@Popular")}
          </div>
        )}
        {service.icon && (
          <div class="absolute top-4 right-4 text-4xl bg-white/90 rounded-full w-16 h-16 flex items-center justify-center">
            {service.icon}
          </div>
        )}
      </div>

      <div class="p-6">
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>

        {service.features && service.features.length > 0 && (
          <div class="mb-4">
            <ul class="space-y-2">
              {service.features.slice(0, 3).map((_, i) => (
                <li key={i} class="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
                  <span class="text-[#008060] mt-1">✓</span>
                  <span>{t(`services.${service.id}.feature${i}@@${service.features![i] ?? ""}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.pricing && (
          <p class="text-[#008060] font-semibold mb-4">{t(`services.${service.id}.pricing@@${service.pricing}`)}</p>
        )}

        <Link
          href={`${base}/services/${service.id}`}
          class={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
            highlight
              ? "bg-[#008060] hover:bg-[#004c3f] text-white"
              : "bg-[#008060] hover:bg-[#004c3f] text-white"
          }`}
        >
          {t("app.card.learnMore@@Learn More")}
        </Link>
      </div>
    </div>
  );
});
