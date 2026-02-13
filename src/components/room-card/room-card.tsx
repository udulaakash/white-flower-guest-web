import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import type { Room } from "~/config/rooms";

interface RoomCardProps {
  room: Room;
}

export default component$(({ room }: RoomCardProps) => {
  const t = inlineTranslate();
  const location = useLocation();
  const locale = location.params.locale;
  const base = locale ? `/${locale}` : "";
  const mainImage = room.images[0] || "/images/placeholder-room.jpg";
  const name = t(`rooms.${room.id}.name@@${room.name}`);
  const description = t(`rooms.${room.id}.description@@${room.description}`);
  const capacity = t(`rooms.${room.id}.capacity@@${room.capacity}`);
  const size = room.size ? t(`rooms.${room.id}.size@@${room.size}`) : null;

  return (
    <div class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-white/5 dark:border dark:border-white/10 dark:shadow-black/30">
      <div class="relative h-64 overflow-hidden">
        <img
          src={mainImage}
          alt={name}
          class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div class="absolute top-4 right-4 rounded-full bg-[#008060] px-3 py-1 text-sm font-semibold text-white">
          {room.count} {room.count === 1 ? t("app.card.room@@Room") : t("app.card.rooms@@Rooms")}
        </div>
      </div>

      <div class="p-6">
        <h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{name}</h3>
        <p class="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{description}</p>

        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            {room.features.slice(0, 3).map((_, i) => (
              <span
                key={i}
                class="rounded-full bg-[#008060]/10 px-3 py-1 text-xs font-medium text-[#008060]"
              >
                {t(`rooms.${room.id}.feature${i}@@${room.features[i] ?? ""}`)}
              </span>
            ))}
          </div>
        </div>

        <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <span class="flex items-center space-x-1">
            <span>👥</span>
            <span>{capacity}</span>
          </span>
          {size && (
            <span class="flex items-center space-x-1">
              <span>📐</span>
              <span>{size}</span>
            </span>
          )}
        </div>

        <Link
          href={`${base}/rooms/${room.id}`}
          class="block w-full rounded-lg bg-[#008060] py-3 text-center font-semibold text-white transition-colors hover:bg-[#004c3f]"
        >
          {t("app.card.viewDetails@@View Details")}
        </Link>
      </div>
    </div>
  );
});
