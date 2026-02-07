export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    color: string;
    label: string;
    category: string;
    cue: string;
    image: string;
    images: string[];
    rating: number;
    reviews: number;
    bought: string;
    description: string;
    highlights: string[];
    weight: string;
    nutritionInfo: {
        calories: string;
        protein: string;
        carbs: string;
        fat: string;
        fiber: string;
    };
    offers: {
        title: string;
        description: string;
    }[];
    inStock: boolean;
    stockCount: number;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Sea Salt & Vinegar",
        price: 299,
        originalPrice: 399,
        discount: 25,
        color: "bg-salt-cyan",
        label: "CLASSIC",
        category: "salty",
        cue: "Perfectly Roasted & Salted",
        image: "/realistic_images/salted.png",
        images: ["/realistic_images/salted.png", "/flavor-salted-sticker.png", "/flavor-salted-v2.png"],
        rating: 4.8,
        reviews: 124,
        bought: "2k+",
        description: "Experience the timeless combination of tangy sea salt and zesty vinegar in every perfectly roasted makhana. Our classic flavour delivers a satisfying crunch with a balanced, savory taste that's both light and addictive. Made with premium Mithila makhana, slow-roasted to perfection.",
        highlights: [
            "100% Natural Mithila Makhana",
            "No Artificial Preservatives",
            "Low Calorie Snack (Under 100 cal/serving)",
            "Gluten-Free & Vegan",
            "Rich in Antioxidants",
            "High Protein Content"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "95 kcal",
            protein: "3.5g",
            carbs: "18g",
            fat: "1.2g",
            fiber: "2.1g"
        },
        offers: [
            { title: "Bank Offer", description: "10% off on HDFC Bank Credit Cards" },
            { title: "Combo Deal", description: "Buy 3 Get 1 Free on all flavors" },
            { title: "First Order", description: "Extra ₹50 off on first purchase" }
        ],
        inStock: true,
        stockCount: 150
    },
    {
        id: 2,
        name: "Peri Peri Volcano",
        price: 349,
        originalPrice: 449,
        discount: 22,
        color: "bg-lava-orange",
        label: "POPULAR",
        category: "spicy",
        cue: "Fiery, Smoky & Crunchy",
        image: "/realistic_images/spicy.png",
        images: ["/realistic_images/spicy.png", "/flavor-spicy-sticker.png", "/flavor-spicy-v2.png"],
        rating: 4.9,
        reviews: 450,
        bought: "8k+",
        description: "Turn up the heat with our Peri Peri Volcano makhana! Infused with authentic African bird's eye chili and a smoky blend of spices, each bite delivers an explosive flavor experience. The perfect balance of heat and crunch for those who dare to snack bold.",
        highlights: [
            "Authentic Peri Peri Spice Blend",
            "Slow-Roasted for Maximum Crunch",
            "No MSG or Artificial Colors",
            "Guilt-Free Spicy Snacking",
            "Made with Premium Mithila Makhana",
            "Vegan & Gluten-Free"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "105 kcal",
            protein: "3.8g",
            carbs: "19g",
            fat: "1.5g",
            fiber: "2.3g"
        },
        offers: [
            { title: "Bank Offer", description: "15% off on Axis Bank Cards" },
            { title: "Spice Bundle", description: "Buy any 2 spicy variants, get 20% off" }
        ],
        inStock: true,
        stockCount: 89
    },
    {
        id: 3,
        name: "Wild Honey Glaze",
        price: 399,
        originalPrice: 499,
        discount: 20,
        color: "bg-berry-pink",
        label: "LIMITED",
        category: "sweet",
        cue: "Naturally Sweet & Crisp",
        image: "/realistic_images/berry.png",
        images: ["/realistic_images/berry.png", "/flavor-berry-v2.png", "/flavor-berry-white.png"],
        rating: 4.7,
        reviews: 89,
        bought: "1k+",
        description: "Indulge in the natural sweetness of wild forest honey drizzled over perfectly roasted makhana. This limited edition flavor combines the earthy crunch of premium Mithila makhana with the golden richness of pure honey. A guilt-free treat that satisfies your sweet cravings.",
        highlights: [
            "Made with 100% Pure Wild Honey",
            "Limited Edition Seasonal Flavor",
            "Perfect Tea-Time Companion",
            "No Refined Sugar Added",
            "Rich in Natural Antioxidants",
            "Kid-Friendly Healthy Snack"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "115 kcal",
            protein: "3.2g",
            carbs: "22g",
            fat: "1.1g",
            fiber: "1.9g"
        },
        offers: [
            { title: "Limited Time", description: "Buy before stock runs out!" },
            { title: "Sweet Deal", description: "Get a free honey dipper with 2+ packs" }
        ],
        inStock: true,
        stockCount: 34
    },
    {
        id: 4,
        name: "Lemon Minty Fresh",
        price: 329,
        originalPrice: 429,
        discount: 23,
        color: "bg-mint-teal",
        label: "REFRESHING",
        category: "herb",
        cue: "Zesty, Minty & Light",
        image: "/realistic_images/mint.png",
        images: ["/realistic_images/mint.png", "/flavor-minty-sticker.png", "/flavor-minty-v2.png"],
        rating: 4.6,
        reviews: 67,
        bought: "500+",
        description: "Refresh your palate with our zesty Lemon Minty Fresh makhana. A unique combination of tangy lemon zest and cool mint leaves creates an invigorating snacking experience. Perfect for hot summer days or whenever you need a crisp, refreshing crunch.",
        highlights: [
            "Natural Lemon & Mint Extracts",
            "Refreshing Summer Snack",
            "Digestive-Friendly Ingredients",
            "Perfect Post-Meal Munch",
            "Cooling & Energizing",
            "No Artificial Flavoring"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "92 kcal",
            protein: "3.4g",
            carbs: "17g",
            fat: "1.0g",
            fiber: "2.2g"
        },
        offers: [
            { title: "Summer Special", description: "20% off on all refreshing flavors" },
            { title: "Wellness Pack", description: "Pair with Herb variants for extra 10% off" }
        ],
        inStock: true,
        stockCount: 72
    },
    {
        id: 5,
        name: "Variety Starter Pack",
        price: 499,
        originalPrice: 699,
        discount: 29,
        color: "bg-sun-yellow",
        label: "BEST VALUE",
        category: "all",
        cue: "All Your Favorite Flavors",
        image: "/realistic_images/salted.png",
        images: ["/realistic_images/salted.png", "/realistic_images/spicy.png", "/realistic_images/mint.png"],
        rating: 5.0,
        reviews: 1200,
        bought: "15k+",
        description: "Can't decide? Get them all! Our Variety Starter Pack includes four of our bestselling flavors - Sea Salt, Peri Peri, Wild Honey, and Minty Fresh. The perfect way to discover your favorite or share with friends and family. Best value for makhana lovers!",
        highlights: [
            "Includes 4 Bestselling Flavors",
            "Perfect for Gifting",
            "Save 29% vs Individual Packs",
            "Great for Parties & Gatherings",
            "Variety for Every Mood",
            "Premium Gift Box Packaging"
        ],
        weight: "320g (4x80g)",
        nutritionInfo: {
            calories: "100 kcal avg",
            protein: "3.5g avg",
            carbs: "19g avg",
            fat: "1.2g avg",
            fiber: "2.1g avg"
        },
        offers: [
            { title: "Bundle Bonus", description: "Free shipping on all variety packs" },
            { title: "Gift Special", description: "Free premium gift wrap available" },
            { title: "Loyalty Reward", description: "Earn 2x points on this purchase" }
        ],
        inStock: true,
        stockCount: 200
    },
    {
        id: 6,
        name: "Himalayan Pink Salt",
        price: 289,
        originalPrice: 379,
        discount: 24,
        color: "bg-stone-400",
        label: "PURE",
        category: "salty",
        cue: "Handpicked Premium Pearls",
        image: "/realistic_images/salted.png",
        images: ["/realistic_images/salted.png", "/flavor-salted-white.png", "/flavor-salted-sticker.png"],
        rating: 4.8,
        reviews: 215,
        bought: "3k+",
        description: "Experience purity in every bite with our Himalayan Pink Salt makhana. Seasoned with authentic pink salt crystals sourced from the Himalayan mountains, this minimal yet flavorful snack highlights the natural taste of premium makhana. Simple, clean, and absolutely delicious.",
        highlights: [
            "Authentic Himalayan Pink Salt",
            "Mineral-Rich Snacking",
            "Minimally Processed",
            "Pure & Clean Ingredients",
            "Handpicked Mithila Pearls",
            "Perfect for Purists"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "90 kcal",
            protein: "3.6g",
            carbs: "17g",
            fat: "1.0g",
            fiber: "2.0g"
        },
        offers: [
            { title: "Pure Pack", description: "Buy 2, save ₹100 on third pack" },
            { title: "Subscription", description: "Subscribe & save 15% monthly" }
        ],
        inStock: true,
        stockCount: 125
    },
    {
        id: 7,
        name: "Tandoori Masala Blast",
        price: 369,
        originalPrice: 469,
        discount: 21,
        color: "bg-red-500",
        label: "NEW",
        category: "spicy",
        cue: "Authentic Indian Spices",
        image: "/realistic_images/spicy.png",
        images: ["/realistic_images/spicy.png", "/flavor-spicy-exploding.jpg", "/flavor-spicy-white.png"],
        rating: 4.9,
        reviews: 312,
        bought: "4k+",
        description: "A tribute to India's beloved tandoori flavors! Our Tandoori Masala Blast brings the smoky, charred goodness of tandoor-roasted spices to your favorite makhana. With a secret blend of 11 authentic Indian spices, this new flavor is already becoming a fan favorite.",
        highlights: [
            "11-Spice Tandoori Blend",
            "Authentic Indian Recipe",
            "Smoky Charred Flavor Profile",
            "NEW Launch - Limited Stock",
            "Perfect with Chai",
            "Medium Heat Level"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "102 kcal",
            protein: "3.7g",
            carbs: "18g",
            fat: "1.4g",
            fiber: "2.2g"
        },
        offers: [
            { title: "New Launch", description: "Introductory 25% off for first month" },
            { title: "Review Reward", description: "Leave a review, get ₹30 cashback" }
        ],
        inStock: true,
        stockCount: 67
    },
    {
        id: 8,
        name: "Dark Chocolate Dream",
        price: 449,
        originalPrice: 599,
        discount: 25,
        color: "bg-stone-800",
        label: "PREMIUM",
        category: "sweet",
        cue: "Rich Cocoa Dusted Delight",
        image: "/realistic_images/berry.png",
        images: ["/realistic_images/berry.png", "/flavor-berry-v2.png", "/flavor-berry-white.png"],
        rating: 4.9,
        reviews: 156,
        bought: "2k+",
        description: "For the chocolate lovers who want to snack smart! Our Dark Chocolate Dream makhana is dusted with premium 70% dark cocoa, creating an indulgent yet healthy treat. The bittersweet richness of dark chocolate meets the satisfying crunch of makhana - dessert reimagined.",
        highlights: [
            "Premium 70% Dark Cocoa",
            "Antioxidant-Rich Chocolate",
            "Dessert Without the Guilt",
            "Perfect After-Dinner Treat",
            "Mood-Boosting Snack",
            "Pairs Well with Coffee"
        ],
        weight: "80g",
        nutritionInfo: {
            calories: "125 kcal",
            protein: "3.9g",
            carbs: "21g",
            fat: "2.5g",
            fiber: "2.8g"
        },
        offers: [
            { title: "Choco Bundle", description: "Buy 2 sweet flavors, get 25% off" },
            { title: "Premium Perks", description: "Free dark chocolate bar with 3+ packs" }
        ],
        inStock: true,
        stockCount: 45
    },
];

export function getProductById(id: number): Product | undefined {
    return PRODUCTS.find(p => p.id === id);
}

export function getRelatedProducts(id: number, limit: number = 4): Product[] {
    const currentProduct = getProductById(id);
    if (!currentProduct) return PRODUCTS.slice(0, limit);

    return PRODUCTS
        .filter(p => p.id !== id && (p.category === currentProduct.category || p.category === 'all'))
        .slice(0, limit);
}
