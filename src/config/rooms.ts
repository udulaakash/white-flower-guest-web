export interface Room {
  id: string;
  name: string;
  count: number;
  description: string;
  features: string[];
  images: string[];
  capacity: string;
  size?: string;
}

export const rooms: Room[] = [
  {
    id: "modern-deluxe-cozy",
    name: "Modern Deluxe Cozy Room",
    count: 1,
    description:
      "Our most premium accommodation option, featuring modern amenities while maintaining the tropical charm. These spacious rooms combine contemporary comfort with traditional Sri Lankan design elements, offering the ultimate beachside retreat experience.",
    features: [
      "Double or twin beds",
      "Air Conditioner",
      "Private bathroom",
      "Fan",
      "Modern amenities",
      "Premium furnishings",
      "Spacious layout",
      "Decorative elements",
      "Close to beach access",
      "Enhanced comfort",
    ],
    images: ["/images/rooms/modern-deluxe-cozy.jpg"],
    capacity: "2 guests",
    size: "Approx. 25 m²",
  },
  {
    id: "modern-deluxe",
    name: "Modern Deluxe Room",
    count: 1,
    description:
      "Our most premium accommodation option, featuring modern amenities while maintaining the tropical charm. These spacious rooms combine contemporary comfort with traditional Sri Lankan design elements, offering the ultimate beachside retreat experience.",
    features: [
      "Double or twin beds",
      "Air Conditioner",
      "Private bathroom",
      "Fan",
      "Modern amenities",
      "Premium furnishings",
      "Spacious layout",
      "Decorative elements",
      "Close to beach access",
      "Enhanced comfort",
    ],
    images: [
      "/images/rooms/modern-deluxe-1.webp",
      "/images/rooms/modern-deluxe-2.webp",
      "/images/rooms/modern-deluxe-3.webp",
      "/images/rooms/modern-deluxe-4.webp",
      "/images/rooms/modern-deluxe-5.webp",
      "/images/rooms/modern-deluxe-6.webp",
      "/images/rooms/modern-deluxe-7.webp",
      "/images/rooms/modern-deluxe-8.webp",
      "/images/rooms/modern-deluxe-9.webp",
      "/images/rooms/modern-deluxe-10.webp",
      "/images/rooms/modern-deluxe-11.webp",
    ],
    capacity: "2 guests",
    size: "Approx. 25 m²",
  },
  {
    id: "modern-deluxe-family",
    name: "Modern Deluxe Family Room",
    count: 1,
    description:
      "Our most premium accommodation option, featuring modern amenities while maintaining the tropical charm. These spacious rooms combine contemporary comfort with traditional Sri Lankan design elements, offering the ultimate beachside retreat experience.",
    features: [
      "Double or twin beds",
      "Air Conditioner",
      "Private bathroom",
      "Fan",
      "Modern amenities",
      "Premium furnishings",
      "Spacious layout",
      "Decorative elements",
      "Close to beach access",
      "Enhanced comfort",
    ],
    images: [
      "/images/rooms/modern-deluxe-family-1.jpg",
      "/images/rooms/modern-deluxe-family-2.jpg",
      "/images/rooms/modern-deluxe-family-3.jpg",
      "/images/rooms/modern-deluxe-family-4.jpg",
      "/images/rooms/modern-deluxe-family-5.jpg",
      "/images/rooms/modern-deluxe-family-6.jpg",
      "/images/rooms/modern-deluxe-family-7.jpg",
      "/images/rooms/modern-deluxe-family-8.jpg",
      "/images/rooms/modern-deluxe-family-9.jpg",
      "/images/rooms/modern-deluxe-family-10.jpg",
      "/images/rooms/modern-deluxe-family-11.jpg",
      "/images/rooms/modern-deluxe-family-12.jpg",
      "/images/rooms/modern-deluxe-family-13.jpg",
    ],
    capacity: "3 guests",
    size: "Approx. 25 m²",
  },
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    count: 3,
    description:
      "Our deluxe double rooms offer enhanced comfort with larger spaces, premium furnishings, and thoughtful touches. These rooms feature traditional four-poster beds, elegant decor, and provide a perfect blend of comfort and tropical aesthetics.",
    features: [
      "Double bed with mosquito net",
      "Air Conditioner",
      "Private bathroom",
      "Fan",
      "Premium linens",
      "Wooden furniture",
      "Decorative accents",
      "More spacious",
      "Close to beach access",
    ],
    images: [
      "/images/rooms/deluxe-double-1.jpg",
      "/images/rooms/deluxe-double-2.jpg",
      "/images/rooms/deluxe-double-3.jpg",
    ],
    capacity: "2 guests",
    size: "Approx. 22 m²",
  },
  {
    id: "standard-double",
    name: "Standard Double Room",
    count: 2,
    description:
      "Spacious standard double rooms with traditional wooden furniture and white mosquito nets. These rooms offer comfort and convenience, featuring natural wood accents and bright, airy spaces that capture the essence of tropical living.",
    features: [
      "Double bed with mosquito net",
      "Air Conditioner",
      "Private bathroom",
      "Fan",
      "Wooden furniture",
      "Mirror and side table",
      "Clean, bright interior",
      "Close to beach access",
    ],
    images: [
      "/images/rooms/deluxe-double-1.jpg",
      "/images/rooms/deluxe-double-2.jpg",
      "/images/rooms/deluxe-double-3.jpg",
    ],
    capacity: "2 guests",
    size: "Approx. 18 m²",
  },
  {
    id: "budget-double",
    name: "Budget Double Room",
    count: 1,
    description:
      "A comfortable and affordable double room perfect for budget-conscious travelers. Features a traditional four-poster bed with mosquito net, essential amenities, and a clean, simple design that reflects the tropical charm of Unawatuna.",
    features: [
      "Double bed with mosquito net",
      "Private bathroom",
      "Fan",
      "Clean linens",
      "Basic amenities",
      "Close to beach access",
    ],
    images: [
      "/images/rooms/deluxe-double-1.jpg",
      "/images/rooms/deluxe-double-2.jpg",
      "/images/rooms/deluxe-double-3.jpg",
    ],
    capacity: "2 guests",
    size: "Approx. 15 m²",
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}

export function getAllRooms(): Room[] {
  return rooms;
}
