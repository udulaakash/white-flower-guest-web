import { component$, useSignal } from "@builder.io/qwik";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default component$(({ images, alt }: ImageGalleryProps) => {
  const selectedImageIndex = useSignal(0);

  if (!images || images.length === 0) {
    return (
      <div class="flex h-64 items-center justify-center rounded-lg bg-gray-200 dark:bg-white/5">
        <p class="text-gray-500 dark:text-gray-300">No images available</p>
      </div>
    );
  }

  return (
    <div class="space-y-4">
      {/* Main Image */}
      <div class="relative h-96 overflow-hidden rounded-lg bg-gray-200 md:h-[680px] dark:bg-white/5">
        <img
          src={images[selectedImageIndex.value]}
          alt={`${alt} - Image ${selectedImageIndex.value + 1}`}
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div class="grid grid-cols-4 gap-2 md:grid-cols-6">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick$={() => {
                selectedImageIndex.value = index;
              }}
              class={`relative h-20 overflow-hidden rounded-lg border-2 transition-all md:h-24 ${
                selectedImageIndex.value === index
                  ? "border-[#36CFC9] ring-2 ring-[#36CFC9]/20"
                  : "border-transparent hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              <img
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
