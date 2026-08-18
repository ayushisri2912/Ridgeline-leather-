import doppKitImg from "../assets/Images/dopp_kit.jpg";
import accessoryDetail from "../assets/Images/accessory_craftsmanship_detail.jpg";
import workshopBanner from "../assets/Images/workshop_banner.jpg";
import huntingAccessoriesImg from "../assets/Images/hunting_accessories_hero.jpg";
import beltCraftsmanshipImg from "../assets/Images/belt_craftsmanship_detail.jpg";

export const leatherCareCollectionMeta = {
  breadcrumb: [
    { name: "Home", link: "/" },
    { name: "Accessories", link: "/accessories/wallets" },
    { name: "Leather Care Products", link: "/accessories/leather-care-products" },
  ],
  title: "Leather Care Products",
  subtitle:
    "Formulated with pure natural beeswax, pine pitch, and seed oils to condition, protect, and preserve your fine leather goods for generations.",
  totalCount: 12,
};

export const leatherCareEditorialFeature = {
  title: "Preserve What You Carry",
  description:
    "Full-grain leather is a living material. Proper conditioning restores natural oils, repels moisture, and deepens the unique patina of your gear.",
  buttonText: "Read Leather Care Guide",
  buttonLink: "/journal/leather-care",
  image: workshopBanner,
};

export const leatherCareData = [
  {
    id: "heritage-leather-conditioning-balm",
    name: "Heritage Leather Conditioning Balm",
    category: "Conditioners",
    productType: "Leather Balm",
    formulation: "Natural Beeswax",
    useCase: "All Leather",
    volume: "4 oz Tin",
    price: 24,
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 340,
    availability: "In Stock",
    image: doppKitImg,
    hoverImage: accessoryDetail,
    description:
      "All-natural beeswax and seed-oil conditioner formula that revives dry hides, seals out moisture, and enhances rich natural leather color.",
    specs: [
      { label: "Volume", val: "4 oz (118 ml) Metal Tin" },
      { label: "Ingredients", val: "Pure Beeswax, Neatsfoot Oil, Seed Oils" },
      { label: "Origin", val: "Made in Texas, USA" },
    ],
  },
  {
    id: "traditional-saddle-soap-sponge",
    name: "Traditional Saddle Soap & Sponge",
    category: "Cleaners",
    productType: "Saddle Soap",
    formulation: "Natural Beeswax",
    useCase: "All Leather",
    volume: "6 oz Tin",
    price: 18,
    badge: "NEW ARRIVAL",
    rating: 4.8,
    reviewsCount: 112,
    availability: "In Stock",
    image: accessoryDetail,
    hoverImage: doppKitImg,
    description:
      "Deep-cleansing glycerin and beeswax soap designed to lift embedded dirt, sweat stains, and grime from boots, belts, and saddles without stripping essential oils.",
    specs: [
      { label: "Volume", val: "6 oz (177 ml)" },
      { label: "Includes", val: "High-Density Cleaning Sponge" },
    ],
  },
  {
    id: "waterproof-field-wax-dressing",
    name: "Waterproof Field Wax Dressing",
    category: "Waterproofing",
    productType: "Waterproofing Wax",
    formulation: "Natural Beeswax",
    useCase: "Boots & Shoes",
    volume: "5 oz Tin",
    price: 26,
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 198,
    availability: "In Stock",
    image: workshopBanner,
    hoverImage: doppKitImg,
    description:
      "Heavy-duty waterproofing paste created with high beeswax content and pine pitch to repel harsh rain, snow, mud, and stream water.",
    specs: [
      { label: "Volume", val: "5 oz (147 ml)" },
      { label: "Protection", val: "Extreme Wet-Weather Barrier" },
    ],
  },
  {
    id: "master-craftsman-complete-care-kit",
    name: "Master Craftsman Complete Care Kit",
    category: "Care Kits",
    productType: "Care Kit",
    formulation: "Natural Beeswax",
    useCase: "All Leather",
    volume: "Full Kit Box",
    price: 68,
    badge: "HERITAGE EDITION",
    rating: 5.0,
    reviewsCount: 145,
    availability: "In Stock",
    image: huntingAccessoriesImg,
    hoverImage: accessoryDetail,
    description:
      "Comprehensive leather maintenance set including Conditioning Balm, Saddle Soap, 100% Horsehair Polish Brush, and Microfiber Cloth in a presentation box.",
    specs: [
      { label: "Includes", val: "Balm (4oz), Soap (6oz), Brush, Cloth & Tin" },
    ],
  },
  {
    id: "100-horsehair-polish-brush",
    name: "100% Horsehair Polish Brush",
    category: "Care Kits",
    productType: "Horsehair Brush",
    formulation: "Natural Beeswax",
    useCase: "Boots & Shoes",
    volume: "Single Brush",
    price: 22,
    badge: "HAND-CRAFTED",
    rating: 4.9,
    reviewsCount: 176,
    availability: "In Stock",
    image: beltCraftsmanshipImg,
    hoverImage: accessoryDetail,
    description:
      "Carved hardwood handle fitted with high-density 100% natural horsehair bristles for buffing leather to a soft, radiant shine.",
    specs: [
      { label: "Handle", val: "Solid Hardwood Handle" },
      { label: "Bristles", val: "100% Natural Unbleached Horsehair" },
    ],
  },
  {
    id: "neatsfoot-oil-leather-preserver",
    name: "Neatsfoot Oil Leather Preserver",
    category: "Conditioners",
    productType: "Leather Balm",
    formulation: "Neatsfoot Oil",
    useCase: "Jackets & Gear",
    volume: "8 oz Bottle",
    price: 20,
    badge: "BESTSELLER",
    rating: 4.8,
    reviewsCount: 230,
    availability: "In Stock",
    image: accessoryDetail,
    hoverImage: doppKitImg,
    description:
      "Deep-penetrating liquid oil ideal for softening stiff new leather boots, belts, holsters, and heavy work gloves.",
    specs: [
      { label: "Volume", val: "8 oz (236 ml) Amber Bottle" },
    ],
  },
  {
    id: "microfiber-leather-polishing-cloth",
    name: "Microfiber Leather Polishing Cloth (Pack of 3)",
    category: "Care Kits",
    productType: "Microfiber Cloth",
    formulation: "Organic Seed Oils",
    useCase: "All Leather",
    volume: "3 Pack",
    price: 15,
    badge: null,
    rating: 4.7,
    reviewsCount: 88,
    availability: "In Stock",
    image: doppKitImg,
    hoverImage: accessoryDetail,
    description:
      "Ultra-soft lint-free microfiber cloths engineered specifically for smooth application of waxes and streak-free buffing.",
    specs: [
      { label: "Size", val: "12\" x 12\" Microfiber Towels" },
    ],
  },
  {
    id: "pro-shine-applicator-sponge-set",
    name: "Pro Shine Applicator Sponge Set",
    category: "Care Kits",
    productType: "Microfiber Cloth",
    formulation: "Natural Beeswax",
    useCase: "Bags & Luggage",
    volume: "4 Pack",
    price: 12,
    badge: "NEW ARRIVAL",
    rating: 4.6,
    reviewsCount: 52,
    availability: "In Stock",
    image: accessoryDetail,
    hoverImage: doppKitImg,
    description:
      "High-density contoured foam sponges designed for even spread of conditioners without soaking up excess product.",
    specs: [
      { label: "Pack", val: "4 High-Density Applicator Sponges" },
    ],
  },
  {
    id: "suede-roughout-cleaner-eraser-kit",
    name: "Suede & Roughout Cleaner Eraser Kit",
    category: "Cleaners",
    productType: "Saddle Soap",
    formulation: "Organic Seed Oils",
    useCase: "Boots & Shoes",
    volume: "Kit",
    price: 25,
    badge: null,
    rating: 4.8,
    reviewsCount: 67,
    availability: "In Stock",
    image: workshopBanner,
    hoverImage: doppKitImg,
    description:
      "Specialized rubber eraser bar and brass-nylon bristle brush kit formulated to lift water spots, salt rings, and nap matting from suede.",
    specs: [
      { label: "Use On", val: "Roughout & Suede Leathers Only" },
    ],
  },
  {
    id: "heritage-beeswax-edge-wax-stick",
    name: "Heritage Beeswax Edge Wax Stick",
    category: "Conditioners",
    productType: "Waterproofing Wax",
    formulation: "Natural Beeswax",
    useCase: "All Leather",
    volume: "2 oz Bar",
    price: 16,
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 104,
    availability: "In Stock",
    image: beltCraftsmanshipImg,
    hoverImage: accessoryDetail,
    description:
      "Pure solid beeswax bar crafted for hand-burnishing raw leather edges, sealing fibers, and producing a polished professional finish.",
    specs: [
      { label: "Weight", val: "2 oz Solid Beeswax Block" },
    ],
  },
  {
    id: "travel-size-leather-care-duo",
    name: "Travel Size Leather Care Duo",
    category: "Care Kits",
    productType: "Care Kit",
    formulation: "Natural Beeswax",
    useCase: "Bags & Luggage",
    volume: "Travel Pack",
    price: 19,
    badge: null,
    rating: 4.7,
    reviewsCount: 78,
    availability: "In Stock",
    image: doppKitImg,
    hoverImage: accessoryDetail,
    description:
      "TSA-compliant 1 oz travel tin of Heritage Balm with a pocket-sized applicator cloth, perfect for touch-ups on the road.",
    specs: [
      { label: "Volume", val: "1 oz Travel Balm + Cloth" },
    ],
  },
  {
    id: "deluxe-wooden-valet-leather-care-box",
    name: "Deluxe Wooden Valet Leather Care Box",
    category: "Care Kits",
    productType: "Care Kit",
    formulation: "Natural Beeswax",
    useCase: "All Leather",
    volume: "Master Chest",
    price: 145,
    badge: "HERITAGE EDITION",
    rating: 5.0,
    reviewsCount: 61,
    availability: "In Stock",
    image: workshopBanner,
    hoverImage: accessoryDetail,
    description:
      "Handcrafted solid cedar wood valet box with brass hardware, fitted footrest lid, and full suite of Ridgeline care products.",
    specs: [
      { label: "Chest Material", val: "Solid American Cedar Wood" },
    ],
  },
];

export const leatherCareFilterCategories = [
  {
    id: "category",
    name: "CATEGORY",
    options: ["Conditioners", "Cleaners", "Waterproofing", "Care Kits"],
  },
  {
    id: "productType",
    name: "PRODUCT TYPE",
    options: [
      "Leather Balm",
      "Saddle Soap",
      "Waterproofing Wax",
      "Care Kit",
      "Horsehair Brush",
      "Microfiber Cloth",
    ],
  },
  {
    id: "formulation",
    name: "FORMULATION",
    options: ["Natural Beeswax", "Neatsfoot Oil", "Organic Seed Oils"],
  },
  {
    id: "useCase",
    name: "USE CASE",
    options: ["Boots & Shoes", "Bags & Luggage", "Jackets & Gear", "All Leather"],
  },
  {
    id: "price",
    name: "PRICE",
    options: ["Under $25", "$25–$50", "$50+"],
  },
  {
    id: "availability",
    name: "AVAILABILITY",
    options: ["In Stock"],
  },
];

export const leatherCareSortOptions = [
  { label: "Sort By: Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest Arrivals", value: "newest" },
  { label: "Customer Rating", value: "rating" },
];
