export interface Service {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  highlight: boolean; // For emphasis on airport transfers and tours
  icon?: string;
  features?: string[];
  pricing?: string;
  images?: string[];
}

export const services: Service[] = [
  {
    id: "airport-transfers",
    name: "Airport Transfers",
    description:
      "Convenient and comfortable airport pickup and drop-off services. Start and end your journey stress-free with our reliable transportation.",
    detailedDescription:
      "We offer professional airport transfer services to and from Bandaranaike International Airport (CMB) in Colombo. Our experienced drivers will ensure you have a comfortable and safe journey. Whether you're arriving or departing, we'll be there to assist you with your luggage and provide a smooth transfer experience. Book in advance to secure your preferred time slot.",
    highlight: true,
    icon: "✈️",
    features: [
      "Pickup from Bandaranaike International Airport",
      "Drop-off to airport",
      "Comfortable vehicles",
      "Experienced drivers",
      "Luggage assistance",
      "Flexible timing",
      "Competitive rates",
    ],
    pricing: "17,000 LKR per vehicle",
    images: ["/images/services/airport-transfer.jpg"],
  },
  {
    id: "one-day-tours",
    name: "One Day Tours",
    description:
      "Explore the best of Sri Lanka with our curated one-day tour packages. Perfect for making the most of your stay in Unawatuna.",
    detailedDescription:
      "Discover the beauty and culture of Sri Lanka with our carefully designed one-day tours. From ancient temples and tea plantations to wildlife safaris and cultural experiences, we offer a variety of tours that showcase the best of what Sri Lanka has to offer. All tours include transportation, guide services, and can be customized to your interests.",
    highlight: true,
    icon: "🗺️",
    features: [
      "Galle Fort exploration",
      "Tea plantation visits",
      "Temple tours",
      "Wildlife experiences",
      "Cultural sites",
      "Professional guides",
      "Transportation included",
      "Customizable itineraries",
    ],
    pricing: "Contact us for package pricing",
    images: ["/images/services/one-day-tour.jpg"],
  },
  {
    id: "multiple-tours",
    name: "Multiple Day Tours",
    description:
      "Extended multi-day tour packages covering Sri Lanka's most iconic destinations. Perfect for travelers who want to see more of this beautiful island.",
    detailedDescription:
      "Experience the diversity of Sri Lanka with our multi-day tour packages. Visit the Cultural Triangle, explore hill country, go on wildlife safaris, and discover hidden gems across the island. Our packages include accommodation, transportation, meals, and expert guides to ensure you have an unforgettable journey.",
    highlight: true,
    icon: "🏔️",
    features: [
      "2-7 day packages",
      "Cultural Triangle tours",
      "Hill country exploration",
      "Wildlife safaris",
      "Accommodation included",
      "Meals included",
      "Expert guides",
      "Flexible itineraries",
    ],
    pricing: "Contact us for package pricing",
    images: ["/images/services/multi-day-tour.jpg"],
  },
  // {
  //   id: "diving",
  //   name: "Diving Services",
  //   description:
  //     "Explore the underwater world of Unawatuna with our professional diving services. Suitable for both beginners and experienced divers.",
  //   detailedDescription:
  //     "Unawatuna offers excellent diving opportunities with its clear waters and diverse marine life. We provide diving services including equipment rental, guided dives, and PADI certification courses. Whether you're a first-time diver or looking to explore deeper waters, our certified instructors will ensure a safe and memorable diving experience.",
  //   highlight: false,
  //   icon: "🤿",
  //   features: [
  //     "Equipment rental",
  //     "Guided dives",
  //     "PADI certification courses",
  //     "Beginner-friendly",
  //     "Experienced instructors",
  //     "Multiple dive sites",
  //     "Safety equipment included",
  //   ],
  //   pricing: "Contact us for dive packages",
  //   images: ["/images/services/diving.jpg"],
  // },
  // {
  //   id: "boat-safari",
  //   name: "Boat Safari",
  //   description:
  //     "Experience the natural beauty of Sri Lanka's waterways with our exciting boat safari tours. Perfect for wildlife enthusiasts and nature lovers.",
  //   detailedDescription:
  //     "Join us for an unforgettable boat safari experience through Sri Lanka's rivers and lagoons. Spot diverse birdlife, crocodiles, and other wildlife while enjoying the serene beauty of the waterways. Our boat safaris are conducted by experienced guides who will help you identify the local flora and fauna. Ideal for photography enthusiasts and nature lovers.",
  //   highlight: false,
  //   icon: "🚤",
  //   features: [
  //     "Wildlife spotting",
  //     "Bird watching",
  //     "Photography opportunities",
  //     "Experienced guides",
  //     "Safe boats",
  //     "Multiple safari options",
  //     "Morning and evening tours",
  //   ],
  //   pricing: "Contact us for safari pricing",
  //   images: ["/images/services/boat-safari.jpg"],
  // },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getAllServices(): Service[] {
  return services;
}

export function getHighlightedServices(): Service[] {
  return services.filter((service) => service.highlight);
}
