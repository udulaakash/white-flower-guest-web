import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Layout from "~/components/layout/layout";
import RoomCard from "~/components/room-card/room-card";
import { getAllRooms } from "~/config/rooms";

export default component$(() => {
  const rooms = getAllRooms();

  return (
    <Layout>
      {/* Header Section */}
      <section class="bg-linear-to-r from-[#004c3f] to-[#008060] py-16 text-white">
        <div class="container mx-auto px-4">
          <h1 class="mb-4 text-4xl font-bold md:text-5xl">Our Rooms</h1>
          <p class="text-xl text-gray-100">
            Choose from our selection of comfortable rooms, each designed to
            provide a relaxing tropical retreat
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section class="bg-white py-16 dark:bg-[#041f1a]">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
});

export const head: DocumentHead = {
  title: "Rooms - White Flower Guest",
  meta: [
    {
      name: "description",
      content:
        "Browse our selection of rooms at White Flower Guest: Budget Double, Standard Double, Deluxe Double, and Modern Deluxe rooms. All rooms feature traditional charm and modern comfort.",
    },
  ],
};
