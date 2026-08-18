import austinImg from "../assets/Images/showroom_austin.jpg";
import heroImg from "../assets/Images/showroom_hero.jpg";
import workshopImg from "../assets/Images/workshop_banner.jpg";

export const STORES_DATA = [
  {
    id: "austin-flagship",
    name: "Austin Flagship Showroom",
    tagline: "South Congress Heritage Store & Monogramming Atelier",
    type: "Flagship Showroom",
    address: {
      street: "1100 S Congress Ave",
      suite: "Suite 104",
      city: "Austin",
      state: "TX",
      zip: "78704",
      country: "USA"
    },
    phone: "(512) 890-3420",
    email: "austin@ridgelineleather.com",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" }
    ],
    status: "Open Now",
    closingTime: "7:00 PM",
    coordinates: { lat: 30.2505, lng: -97.7497 },
    distance: "1.2 miles away",
    image: austinImg,
    gallery: [
      austinImg,
      heroImg,
      workshopImg
    ],
    collections: [
      "Monogramming Studio",
      "Bespoke Fitting",
      "Field & Hunt Gear",
      "Leather Care Bar"
    ],
    services: [
      "Complimentary On-Site Hot Foil Stamping",
      "Leather Care & Conditioning Consultation",
      "Bespoke Boot & Belt Fitting",
      "Private Evening Showroom Access (By Appointment)"
    ],
    manager: "Eleanor Vance — Master Fitting Specialist"
  },
  {
    id: "nashville-atelier",
    name: "Nashville Atelier & Workshop",
    tagline: "12th South Historic Leather & Craftsman Studio",
    type: "Craftsman Studio",
    address: {
      street: "1205 12th Ave S",
      suite: "Building B",
      city: "Nashville",
      state: "TN",
      zip: "37203",
      country: "USA"
    },
    phone: "(615) 430-8812",
    email: "nashville@ridgelineleather.com",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
      { days: "Sunday", time: "12:00 PM – 5:00 PM" }
    ],
    status: "Open Now",
    closingTime: "7:00 PM",
    coordinates: { lat: 36.1415, lng: -86.7876 },
    distance: "4.8 miles away",
    image: heroImg,
    gallery: [
      heroImg,
      workshopImg,
      austinImg
    ],
    collections: [
      "Craftsmanship Workshop",
      "Bespoke Luggage",
      "Equestrian & Field",
      "Custom Monogramming"
    ],
    services: [
      "Live Workbench Craftsmanship Viewing",
      "Custom Luggage & Briefcase Commissioning",
      "Leather Restoration & Oil Care",
      "Whiskey & Leather Consultation Room"
    ],
    manager: "Julian Thorne — Senior Artisan & Curator"
  },
  {
    id: "denver-outpost",
    name: "Denver Mountain Outpost",
    tagline: "Larimer Square Outdoor Heritage & Boot Lounge",
    type: "Mountain Outpost",
    address: {
      street: "1430 Larimer St",
      suite: "Space 12",
      city: "Denver",
      state: "CO",
      zip: "80202",
      country: "USA"
    },
    phone: "(303) 952-6741",
    email: "denver@ridgelineleather.com",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" }
    ],
    status: "Open Now",
    closingTime: "8:00 PM",
    coordinates: { lat: 39.7491, lng: -104.9989 },
    distance: "12.5 miles away",
    image: austinImg,
    gallery: [
      austinImg,
      heroImg,
      workshopImg
    ],
    collections: [
      "Field & Hunt Gear",
      "Rugged Travel Duffels",
      "Heritage Boots & Footwear",
      "Custom Gun Slings"
    ],
    services: [
      "Heavy-Duty Field Equipment Conditioning",
      "Custom Sling & Rifle Case Sizing",
      "Personal Outfitting for Expedition Trips",
      "Complimentary Boot Buffing & Waxing"
    ],
    manager: "Garrett Hayes — Field Operations Lead"
  },
  {
    id: "charleston-studio",
    name: "Charleston Historic Studio",
    tagline: "King Street Heritage & Specialty Goods",
    type: "Heritage Studio",
    address: {
      street: "214 King St",
      suite: "Atrium",
      city: "Charleston",
      state: "SC",
      zip: "29401",
      country: "USA"
    },
    phone: "(843) 720-5690",
    email: "charleston@ridgelineleather.com",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 6:00 PM" },
      { days: "Sunday", time: "12:00 PM – 5:00 PM" }
    ],
    status: "Open Now",
    closingTime: "6:00 PM",
    coordinates: { lat: 32.7806, lng: -79.9328 },
    distance: "18.3 miles away",
    image: heroImg,
    gallery: [
      heroImg,
      workshopImg,
      austinImg
    ],
    collections: [
      "Monogramming Studio",
      "Leather Care Bar",
      "Heritage Belts & Wallets",
      "Everyday Carry Essentials"
    ],
    services: [
      "Custom Belt Sizing & Punching",
      "Same-Day Monogramming Service",
      "Leather Preservation Workshop",
      "Curated Gift Packaging & Wax Sealing"
    ],
    manager: "Clara Sterling — Brand Experience Director"
  },
  {
    id: "scottsdale-atelier",
    name: "Scottsdale Desert Atelier",
    tagline: "Fashion Square Fine Leather & Bespoke Lounge",
    type: "Flagship Showroom",
    address: {
      street: "7014 E Camelback Rd",
      suite: "Level 2",
      city: "Scottsdale",
      state: "AZ",
      zip: "85251",
      country: "USA"
    },
    phone: "(480) 612-4099",
    email: "scottsdale@ridgelineleather.com",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" }
    ],
    status: "Open Now",
    closingTime: "8:00 PM",
    coordinates: { lat: 33.5024, lng: -111.9281 },
    distance: "24.1 miles away",
    image: austinImg,
    gallery: [
      austinImg,
      heroImg,
      workshopImg
    ],
    collections: [
      "Bespoke Fitting",
      "Travel Duffels & Weekenders",
      "Leather Care Bar",
      "Executive Accessories"
    ],
    services: [
      "Private VIP Fitting Room",
      "Custom Engraving & Leather Stamping",
      "Climate Care Advice for Arid Climates",
      "Personal Shopper Concierge"
    ],
    manager: "Marcus Bennett — Bespoke Specialist"
  },
  {
    id: "jacksonhole-outpost",
    name: "Jackson Hole Outpost",
    tagline: "Town Square Field & Sporting Goods Studio",
    type: "Mountain Outpost",
    address: {
      street: "55 N Glenwood St",
      suite: "Building 1",
      city: "Jackson",
      state: "WY",
      zip: "83001",
      country: "USA"
    },
    phone: "(307) 733-1988",
    email: "jacksonhole@ridgelineleather.com",
    hours: [
      { days: "Monday – Saturday", time: "10:00 AM – 6:00 PM" },
      { days: "Sunday", time: "Closed" }
    ],
    status: "Closing Soon",
    closingTime: "6:00 PM",
    coordinates: { lat: 43.4800, lng: -110.7624 },
    distance: "35.0 miles away",
    image: heroImg,
    gallery: [
      heroImg,
      workshopImg,
      austinImg
    ],
    collections: [
      "Field & Hunt Gear",
      "Rifle Covers & Slings",
      "Custom Craftsmanship",
      "Winterized Leather Care"
    ],
    services: [
      "Weatherproofing Treatment for Extreme Cold",
      "Field Equipment Repairs & Stitching",
      "Custom Monogramming on Hunting Scrapes",
      "Private Appointments Before Lodge Hours"
    ],
    manager: "Wyatt Montgomery — Senior Outfitter"
  }
];

export const WHY_VISIT_FEATURES = [
  {
    id: "personal-shopping",
    number: "01",
    title: "Personal Shopping Assistance",
    subtitle: "Tailored to Your Lifestyle",
    description: "Enjoy one-on-one guidance from our leather specialists to find the exact piece, fit, or patina that matches your aesthetic and travel demands."
  },
  {
    id: "leather-care",
    number: "02",
    title: "Leather Care Consultation",
    subtitle: "Lifetime Maintenance & Buffing",
    description: "Bring in your Ridgeline goods for complimentary conditioning, brass polishing, and expert advice on keeping your full-grain leather aging gracefully."
  },
  {
    id: "in-store-collections",
    number: "03",
    title: "Exclusive In-Store Collections",
    subtitle: "Limited & One-of-a-Kind Pieces",
    description: "Discover rare hide finishes, small-batch weekenders, and prototype hunting accessories available exclusively at our brick-and-mortar showrooms."
  },
  {
    id: "handcrafted-quality",
    number: "04",
    title: "Handcrafted Quality Experience",
    subtitle: "Touch, Smell & Custom Monogram",
    description: "Feel the weight of full-grain hides, observe master tooling in action, and receive instant on-site hot foil stamping for your handcrafted purchases."
  }
];
