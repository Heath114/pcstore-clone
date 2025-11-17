// src/app/data/products.ts
interface BaseProduct {
    id: number;
    name: string;
    description?: string;
    image?: string;
    hoverImage?: string; // Image shown on hover
    images: string[]; // Gallery images for product detail page
    inStock?: boolean;
    stock?: number;
    category?: string;
    rating?: number;
    reviews?: number;
    features?: string[];
    slug?: string;
    brand?: string;
    warranty?: string;
    colors?: string[];
    specifications?: {
        [key: string]: string
    };
    tags?: string[];
    whatsInTheBox?: string[];
}

export type Product = BaseProduct & (
    | { isSale?: false; price: number }
    | { isSale: true; originalPrice: number; discount: number; price?: number }
);

// Helper function to get the actual price of a product
export function getProductPrice(product: Product): number {
    if (product.isSale) {
        // If price is provided, use it; otherwise calculate from originalPrice and discount
        return product.price ?? product.originalPrice * (1 - product.discount / 100);
    }
    return product.price;
}

export const ProductList: Product[] = [
    {
        id: 1,
        name: "MacBook Pro 14-inch",
        description: "Powerful laptop with M2 Pro chip, stunning Liquid Retina XDR display, and all-day battery life.",
        image: "/images/products/laptops/1.png",
        hoverImage: "/images/products/laptops/1.png",
        brand: "Apple",
        category: "Laptops",
        colors: ["Space Gray", "Silver"],
        features: [
            "Apple M2 Pro chip",
            "14.2-inch Liquid Retina XDR display",
            "Up to 18 hours battery life",
            "16GB unified memory",
            "512GB SSD storage",
            "1080p FaceTime HD camera",
            "Six-speaker sound system",
            "Three Thunderbolt 4 ports"
        ],
        specifications: {
            Processor: "Apple M2 Pro chip with 10-core CPU",
            GPU: "16-core GPU",
            RAM: "16GB unified memory",
            Storage: "512GB SSD",
            Display: "14.2-inch (diagonal) Liquid Retina XDR display",
            Resolution: "3024 x 1964 pixels",
            Weight: "1.6 kg",
            Dimensions: "31.26 x 22.12 x 1.55 cm"
        },
        warranty: "1 Year Limited Warranty",
        whatsInTheBox: [
            "MacBook Pro",
            "67W USB-C Power Adapter",
            "USB-C to MagSafe 3 Cable",
            "User Guide"
        ],
        images: ["/images/products/1.png", "/images/products/img1.jpg",],
        slug: "macbook-pro-14-inch",
        isSale: true,
        originalPrice: 1999.99,
        discount: 15,
    },
    {
        id: 2,
        name: "Dell XPS 15 Laptop",
        description: "Premium ultrabook with stunning InfinityEdge display and powerful performance for professionals.",
        image: "/images/products/laptops/2.png",
        hoverImage: "/images/products/laptops/2.webp",
        brand: "Dell",
        category: "Laptops",
        colors: ["Platinum Silver", "Frost White"],
        features: [
            "12th Gen Intel Core i7 processor",
            "15.6-inch 4K OLED display",
            "NVIDIA GeForce RTX 3050 Ti",
            "16GB DDR5 RAM",
            "512GB PCIe NVMe SSD",
            "Backlit keyboard",
            "Fingerprint reader",
            "Premium aluminum chassis"
        ],
        specifications: {
            Processor: "Intel Core i7-12700H (14-core)",
            GPU: "NVIDIA GeForce RTX 3050 Ti 4GB GDDR6",
            RAM: "16GB DDR5",
            Storage: "512GB M.2 PCIe NVMe SSD",
            Display: "15.6-inch 4K OLED (3840 x 2400)",
            Battery: "86Wh, up to 13 hours",
            Weight: "1.96 kg",
            Dimensions: "34.45 x 23.02 x 1.8 cm"
        },
        warranty: "1 Year Premium Support",
        whatsInTheBox: [
            "Dell XPS 15 Laptop",
            "130W Power Adapter",
            "USB-C to USB-A Adapter",
            "Documentation"
        ],
        price: 1499.99,
        images: ["/images/products/laptops/2.png", "/images/products/laptops/2.png"],
        slug: "dell-xps-15-laptop",
        isSale: true,
        originalPrice: 1799.99,
        discount: 17,
    },
    {
        id: 3,
        name: "HP Pavilion Gaming Laptop",
        description: "High-performance gaming laptop with AMD Ryzen processor and dedicated NVIDIA graphics for immersive gaming.",
        image: "/images/products/laptops/3.png",
        hoverImage: "/images/products/laptops/3.png",
        brand: "HP",
        category: "Laptops",
        colors: ["Shadow Black", "Ghost White"],
        features: [
            "AMD Ryzen 7 5800H processor",
            "15.6-inch FHD 144Hz display",
            "NVIDIA GeForce RTX 3060",
            "16GB DDR4 RAM",
            "1TB NVMe SSD",
            "RGB backlit keyboard",
            "Dual fan cooling system",
            "Bang & Olufsen audio"
        ],
        specifications: {
            Processor: "AMD Ryzen 7 5800H (8-core, 3.2GHz base)",
            GPU: "NVIDIA GeForce RTX 3060 6GB GDDR6",
            RAM: "16GB DDR4-3200MHz",
            Storage: "1TB PCIe NVMe M.2 SSD",
            Display: "15.6-inch FHD (1920 x 1080) 144Hz IPS",
            Battery: "52.5Wh, up to 7 hours",
            Weight: "2.23 kg",
            Dimensions: "36.01 x 25.6 x 2.34 cm",
            Cooling: "Dual fan with wide rear vent",
            Audio: "B&O, dual speakers, HP Audio Boost"
        },
        warranty: "1 Year Limited Warranty",
        whatsInTheBox: [
            "HP Pavilion Gaming Laptop",
            "200W Smart AC Adapter",
            "Power Cord",
            "Quick Start Guide",
            "Warranty Information"
        ],
        price: 1199.99,
        images: ["/images/products/3.png", "/images/products/hover/3.png"],
        slug: "hp-pavilion-gaming-laptop"
    },
    {
        id: 4,
        name: "Samsung 27-inch 4K Monitor",
        description: "Ultra HD monitor with stunning color accuracy and eye comfort technology for professional work.",
        image: "/images/products/screens/1.png",
        hoverImage: "/images/products/screens/1.png",
        brand: "Samsung",
        category: "Monitors",
        colors: ["Black"],
        features: [
            "27-inch 4K UHD display",
            "HDR10 support",
            "99% sRGB color gamut",
            "Flicker-free technology",
            "Eye Saver Mode",
            "AMD FreeSync",
            "Picture-by-Picture mode",
            "Adjustable stand"
        ],
        specifications: {
            "Screen Size": "27 inches",
            Resolution: "3840 x 2160 (4K UHD)",
            "Panel Type": "IPS",
            "Refresh Rate": "60Hz",
            "Response Time": "5ms",
            Brightness: "300 cd/m²",
            "Contrast Ratio": "1000:1",
            Connectivity: "HDMI 2.0 x2, DisplayPort 1.2, USB Hub",
            "Stand Adjustment": "Tilt, Swivel, Height, Pivot",
            Dimensions: "61.34 x 46.21 x 20.06 cm (with stand)"
        },
        warranty: "3 Year Manufacturer Warranty",
        whatsInTheBox: [
            "Samsung 27-inch Monitor",
            "Stand Base & Neck",
            "HDMI Cable",
            "Power Cable",
            "User Manual"
        ],
        price: 349.99,
        images: ["/images/products/5.png", "/images/products/img1.jpg", "/images/products/img2.jpg", "/images/products/img4.jpg"],
        slug: "samsung-27-inch-4k-monitor"
    },
    {
        id: 5,
        name: "LG UltraWide 34-inch Curved Monitor",
        description: "Immersive curved ultrawide monitor with QHD resolution perfect for multitasking and entertainment.",
        image: "/images/products/screens/3.png",
        hoverImage: "/images/products/screens/3.png",
        brand: "LG",
        category: "Monitors",   
        colors: ["Black", "Silver"],
        features: [
            "34-inch curved ultrawide display",
            "21:9 aspect ratio",
            "QHD resolution (3440 x 1440)",
            "HDR10 support",
            "99% sRGB color coverage",
            "AMD FreeSync Premium",
            "OnScreen Control software",
            "VESA mount compatible"
        ],
        specifications: {
            "Screen Size": "34 inches (curved)",
            Resolution: "3440 x 1440 (UWQHD)",
            "Panel Type": "IPS",
            "Aspect Ratio": "21:9",
            "Refresh Rate": "75Hz",
            "Response Time": "5ms (GtG)",
            Brightness: "300 cd/m²",
            "Contrast Ratio": "1000:1",
            Connectivity: "HDMI x2, DisplayPort, USB-C, USB 3.0 Hub",
            "Curvature": "1800R",
            Dimensions: "81.5 x 47.4 x 23.9 cm (with stand)"
        },
        warranty: "2 Year Manufacturer Warranty",
        whatsInTheBox: [
            "LG UltraWide Monitor",
            "Monitor Stand",
            "HDMI Cable",
            "USB-C Cable",
            "Power Adapter",
            "Quick Setup Guide"
        ],
        price: 449.99,
        images: ["/images/products/6.png", "/images/products/img3.jpg", "/images/products/img5.jpg"],
        slug: "lg-ultrawide-34-inch-curved-monitor"
    },
];


export interface Brand {
    id: number;
    name: string;
    image: string;
    website?: string;
}

export const BrandList: Brand[] = [
    {
        id: 1,
        name: "Apple",
        image: "/images/brands/apple.webp",
        website: "https://www.apple.com"
    },
    {
        id: 2,
        name: "Samsung",
        image: "/images/brands/samsung.webp",
        website: "https://www.samsung.com"
    },
    {
        id: 3,
        name: "Anker",
        image: "/images/brands/anker.webp",
        website: "https://www.anker.com"
    },
    {
        id: 4,
        name: "Huawei",
        image: "/images/brands/huawei.webp",
        website: "https://www.huawei.com"
    },
    {
        id: 5,
        name: "Infinix",
        image: "/images/brands/infinix.webp",
        website: "https://www.infinixmobility.com"
    },
    {
        id: 6,
        name: "tecno",
        image: "/images/brands/tecno.webp",
        website: "https://www.tecno-mobile.com"
    },
    {
        id: 7,
        name: "Xiaomi",
        image: "/images/brands/xiaomi.webp",
        website: "https://www.mi.com"
    }
];


