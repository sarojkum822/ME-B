import { getProductById, PRODUCTS } from "@/lib/products";
import ProductPageClient from "@/components/ProductPageClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const product = getProductById(parseInt(id));

    if (!product) return { title: "Product Not Found | Mithila Essence" };

    return {
        title: `${product.name} | Mithila Essence - Artisanal Makhana`,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.cue,
            images: [product.image],
        },
    };
}

// Required for static export with Capacitor
export function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id.toString(),
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const productId = parseInt(id);

    return <ProductPageClient productId={productId} />;
}
