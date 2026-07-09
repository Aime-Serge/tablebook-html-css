export const cuisines = [
  "Italian",
  "Japanese",
  "French",
  "Mexican",
  "Chinese",
  "Indian",
  "American",
  "Mediterranean",
  "Thai",
  "Korean",
  "Spanish",
  "Vietnamese"
];

export const timeSlots = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30"
];

export const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12];

export const restaurants = [
  {
    id: "r-001",
    name: "Ember & Basil",
    cuisine: "Mediterranean",
    priceRange: 3,
    city: "Kigali",
    address: "KG 7 Avenue, Kimihurura",
    phone: "+250 788 120 540",
    email: "hello@emberbasil.example",
    image: "assets/images/restaurant-1.jpg",
    rating: 4.8,
    reviewCount: 126,
    description: "A warm neighborhood dining room serving grilled seafood, garden mezze, and slow-roasted meats.",
    amenities: ["Outdoor seating", "Vegetarian menu", "Private dining", "Card payments"],
    openingHours: {
      Monday: "11:30 - 22:00",
      Tuesday: "11:30 - 22:00",
      Wednesday: "11:30 - 22:00",
      Thursday: "11:30 - 22:30",
      Friday: "11:30 - 23:00",
      Saturday: "12:00 - 23:00",
      Sunday: "12:00 - 21:00"
    }
  },
  {
    id: "r-002",
    name: "Saffron Table",
    cuisine: "Indian",
    priceRange: 2,
    city: "Kigali",
    address: "KN 4 Street, City Centre",
    phone: "+250 783 440 210",
    email: "reserve@saffrontable.example",
    image: "assets/images/restaurant-2.jpg",
    rating: 4.6,
    reviewCount: 89,
    description: "Comforting curries, clay-oven breads, and fragrant rice dishes prepared for relaxed shared meals.",
    amenities: ["Family friendly", "Halal options", "Takeaway", "Wi-Fi"]
  },
  {
    id: "r-003",
    name: "Maison Miel",
    cuisine: "French",
    priceRange: 4,
    city: "Kigali",
    address: "KK 15 Road, Kicukiro",
    phone: "+250 790 320 118",
    email: "bonjour@maisonmiel.example",
    image: "assets/images/restaurant-3.jpg",
    rating: 4.9,
    reviewCount: 54,
    description: "A calm fine-dining space with seasonal menus, pastry-led desserts, and attentive evening service.",
    amenities: ["Fine dining", "Wine pairing", "Anniversary seating", "Quiet room"]
  }
];

export const reviews = [
  { name: "Aline M.", rating: 5, date: "June 18, 2026", comment: "The service felt personal and the grilled fish was perfectly cooked." },
  { name: "David K.", rating: 4, date: "May 27, 2026", comment: "Beautiful atmosphere for a birthday dinner. Booking was simple." }
];

export const reservations = [
  {
    id: "res-1042",
    restaurantName: "Ember & Basil",
    cuisine: "Mediterranean",
    date: "2026-07-12",
    time: "19:00",
    partySize: 4,
    status: "confirmed",
    confirmationCode: "TB7K92A",
    address: "KG 7 Avenue, Kimihurura",
    specialRequests: "Window table if available"
  },
  {
    id: "res-0987",
    restaurantName: "Saffron Table",
    cuisine: "Indian",
    date: "2026-06-20",
    time: "18:30",
    partySize: 2,
    status: "completed",
    confirmationCode: "TB3M81C",
    address: "KN 4 Street, City Centre",
    specialRequests: ""
  },
  {
    id: "res-0771",
    restaurantName: "Maison Miel",
    cuisine: "French",
    date: "2026-06-05",
    time: "20:00",
    partySize: 3,
    status: "cancelled",
    confirmationCode: "TB1P55D",
    address: "KK 15 Road, Kicukiro",
    specialRequests: "Anniversary dessert"
  }
];

export const dashboardReservations = [
  { guest: "Aime Serge", email: "aime@example.com", date: "Today", time: "18:30", party: 2, status: "confirmed" },
  { guest: "Claire Uwase", email: "claire@example.com", date: "Today", time: "19:00", party: 5, status: "seated" },
  { guest: "Jean Paul", email: "jp@example.com", date: "Tomorrow", time: "20:00", party: 4, status: "pending" },
  { guest: "Mutesi Nadia", email: "nadia@example.com", date: "Sat, Jul 18", time: "19:30", party: 2, status: "confirmed" }
];
