import Image from 'next/image';
import Link from 'next/link';
import products from '@/data/featuredProducts.json';

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    tag: string;
};

const featuredProducts: Product[] = products;

export default function FeaturedProducts() {
    return (
        <section className="bg-[#F7F4EF] py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* ── Left: Text ── */}
                    <div className="w-full md:w-48 lg:w-56 shrink-0 flex flex-col gap-5">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] text-[#C29B0C] uppercase mb-2">
                                Handcrafted
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1D3930] leading-tight">
                                Featured Products
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed hidden md:block">
                            Explore our finest handcrafted wooden pieces — designed with care and precision.
                        </p>
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 border border-[#1D3930] text-[#1D3930] hover:bg-[#1D3930] hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 w-fit"
                        >
                            Shop now
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </Link>
                    </div>

                    {/* ── Right: Product grid ── */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                {/* Tag */}
                                <span className="absolute top-2.5 left-2.5 z-10 bg-[#C29B0C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                                    {product.tag}
                                </span>

                                {/* Image */}
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 640px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Info */}
                                <div className="p-3">
                                    <p className="text-[#1D3930] font-semibold text-sm leading-snug line-clamp-1">
                                        {product.name}
                                    </p>
                                    <p className="text-[#C29B0C] font-bold text-sm mt-1">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
