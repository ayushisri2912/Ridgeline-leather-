import luxuryBoots from "../../assets/Images/luxury_heritage_boots.jpg";
import heroBoots from "../../assets/Images/hero_leather_boots.jpg";
import bootsJpg from "../../assets/Images/boots.jpg";
import bootsAvif from "../../assets/Images/boots.avif";
import baggs from "../../assets/Images/baggs.jpg";
import accessory from "../../assets/Images/accessory.avif";
import craftsman from "../../assets/Images/crafteman.avif";
import hunt from "../../assets/Images/hunt.avif";
import lapBag from "../../assets/Images/lap-bag.webp";
import leatherBag from "../../assets/Images/leather-bag.jpg";
import newSession from "../../assets/Images/new-session.jpg";
import rafel from "../../assets/Images/rafel.avif";
import rideled from "../../assets/Images/rideled.jpg";
import shop from "../../assets/Images/shop.avif";

export const newArrivalsProducts = [
  {
    id: "na-1",
    title: "The Jackson Leather Boot",
    subtitle: "Handcrafted Bovine Leather • 12\" Shaft",
    category: "Boots",
    price: "₹24,900",
    rating: 4.9,
    reviewsCount: 142,
    badge: "JUST ARRIVED",
    mainImage: luxuryBoots,
    hoverImage: heroBoots,
    colors: [
      { name: "Bourbon Calf", hex: "#7A431D", img: luxuryBoots },
      { name: "Midnight Black", hex: "#1C1C1C", img: bootsJpg },
      { name: "Saddle Tan", hex: "#B87333", img: heroBoots }
    ],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: "na-2",
    title: "Heritage Weekender Duffel",
    subtitle: "Full-Grain Waxed Leather & Brass Hardware",
    category: "Leather Bags",
    price: "₹18,500",
    rating: 5.0,
    reviewsCount: 89,
    badge: "NEW SEASON",
    mainImage: baggs,
    hoverImage: rideled,
    colors: [
      { name: "Mahogany Brown", hex: "#4A2511", img: baggs },
      { name: "Cognac Tan", hex: "#9E5B2C", img: rideled }
    ],
    sizes: ["One Size"]
  },
  {
    id: "na-3",
    title: "The Cartwright Roper",
    subtitle: "Supple Goat Leather • Low Roper Heel",
    category: "Boots",
    price: "₹22,400",
    rating: 4.8,
    reviewsCount: 215,
    badge: "HANDMADE",
    mainImage: bootsJpg,
    hoverImage: bootsAvif,
    colors: [
      { name: "Desert Sand", hex: "#C59B6A", img: bootsJpg },
      { name: "Dark Walnut", hex: "#3D2314", img: bootsAvif }
    ],
    sizes: ["7.5", "8.5", "9.5", "10.5", "11.5"]
  },
  {
    id: "na-4",
    title: "Slim Bifold Leather Wallet",
    subtitle: "Hand-stitched Vegetable Tanned Leather",
    category: "Wallets & Accessories",
    price: "₹4,200",
    rating: 4.9,
    reviewsCount: 76,
    badge: "LIMITED",
    mainImage: accessory,
    hoverImage: craftsman,
    colors: [
      { name: "Rust Brown", hex: "#8B3E2F", img: accessory },
      { name: "Onyx Black", hex: "#222222", img: craftsman }
    ],
    sizes: ["Standard"]
  }
];

export const bestSellersProducts = [
  {
    id: "bs-1",
    title: "The Earl Zip Boot",
    subtitle: "Signature Smooth Ostrich • Round Toe",
    category: "Boots",
    price: "₹28,500",
    rating: 4.9,
    reviewsCount: 488,
    badge: "#1 BEST SELLER",
    mainImage: heroBoots,
    hoverImage: luxuryBoots,
    colors: [
      { name: "Pecan Ostrich", hex: "#8A5229", img: heroBoots },
      { name: "Black Cherry", hex: "#40181F", img: bootsJpg }
    ],
    sizes: ["8", "9", "10", "11", "12"]
  },
  {
    id: "bs-2",
    title: "Executive Laptop Briefcase",
    subtitle: "Oil-Tanned Cowhide • Padded Tech Compartment",
    category: "Leather Bags",
    price: "₹16,800",
    rating: 4.9,
    reviewsCount: 312,
    badge: "TOP RATED",
    mainImage: lapBag,
    hoverImage: leatherBag,
    colors: [
      { name: "Vintage Tan", hex: "#B36B39", img: lapBag },
      { name: "Dark Espresso", hex: "#2D1A10", img: leatherBag }
    ],
    sizes: ["15\" Laptop"]
  },
  {
    id: "bs-3",
    title: "The Annie Cowgirl Boot",
    subtitle: "Hand-Corded Calfskin • Western Stitching",
    category: "Boots",
    price: "₹25,200",
    rating: 5.0,
    reviewsCount: 620,
    badge: "ICONIC STYLE",
    mainImage: rafel,
    hoverImage: newSession,
    colors: [
      { name: "Honey Butter", hex: "#D49F5A", img: rafel },
      { name: "Midnight Raven", hex: "#1A1A1A", img: newSession }
    ],
    sizes: ["6", "7", "8", "9", "10"]
  },
  {
    id: "bs-4",
    title: "Handcrafted Western Leather Belt",
    subtitle: "Solid Brass Buckle • Full-Grain Bridle Leather",
    category: "Wallets & Accessories",
    price: "₹3,900",
    rating: 4.8,
    reviewsCount: 540,
    badge: "FAN FAVORITE",
    mainImage: craftsman,
    hoverImage: hunt,
    colors: [
      { name: "Antique Tan", hex: "#A66338", img: craftsman },
      { name: "Dark Chestnut", hex: "#42281A", img: hunt }
    ],
    sizes: ["32", "34", "36", "38", "40"]
  }
];
