import Image from 'next/image';
import Link from 'next/link';
import collections from '@/data/collections.json';

type CollectionItem = {
    id: number;
    name: string;
    image: string;
    href: string;
};

const items: CollectionItem[] = collections;

export default function OurCollections() {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">

                {/* ── Header ── */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-semibold text-[#1D3930] tracking-wide">
                        Our Collections
                    </h2>
                </div>

                {/* ── 3×2 Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-100 block"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 640px) 50vw, 33vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* name overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-3">
                                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 drop-shadow">
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ── Shop Now CTA ── */}
                <div className="flex justify-center mt-10">
                    <Link
                        href="/collections"
                        className="inline-flex items-center gap-2 border border-[#1D3930] text-[#1D3930] hover:bg-[#1D3930] hover:text-white text-sm font-semibold px-7 py-2.5 rounded-full transition-all duration-200"
                    >
                        Shop now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}
