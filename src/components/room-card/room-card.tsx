import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Room } from "~/config/rooms";

interface RoomCardProps {
  room: Room;
}

export default component$(({ room }: RoomCardProps) => {
  const mainImage = room.images[0] || "/images/placeholder-room.jpg";

  return (
    <div class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-white/5 dark:border dark:border-white/10 dark:shadow-black/30">
      {/* Image */}
      <div class="relative h-64 overflow-hidden">
        <img
          src={mainImage}
          alt={room.name}
          class="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        <div class="absolute top-4 right-4 rounded-full bg-[#008060] px-3 py-1 text-sm font-semibold text-white">
          {room.count} {room.count === 1 ? "Room" : "Rooms"}
        </div>
      </div>

      {/* Content */}
      <div class="p-6">
        <h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{room.name}</h3>
        <p class="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{room.description}</p>

        {/* Features */}
        <div class="mb-4">
          <div class="flex flex-wrap gap-2">
            {room.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                class="rounded-full bg-[#008060]/10 px-3 py-1 text-xs font-medium text-[#008060]"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Capacity & Size */}
        <div class="mb-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <span class="flex items-center space-x-1">
            <span>👥</span>
            <span>{room.capacity}</span>
          </span>
          {room.size && (
            <span class="flex items-center space-x-1">
              <span>📐</span>
              <span>{room.size}</span>
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/rooms/${room.id}`}
          class="block w-full rounded-lg bg-[#008060] py-3 text-center font-semibold text-white transition-colors hover:bg-[#004c3f]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
});
