'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import productsData from '@/data/products.json';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    tag: string | null;
    rating: number;
    reviews: number;
    description: string;
};

const products: Product[] = productsData;
const CATEGORIES = ['All', ...Array.from(new Set(products.map((p) => p.category)))];
const TAG_COLORS: Record<string, string> = {
    Bestseller: 'bg-[#1D3930] text-white',
    New: 'bg-[#C29B0C] text-white',
    Featured: 'bg-amber-100 text-[#1D3930]',
};

function StarRating({ rating }: { rating: number }) {
    return (
        <span className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-[#C29B0C]' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </span>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
            {/* Tag */}
            {product.tag && (
                <span
                    className={`absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide ${TAG_COLORS[product.tag] ?? 'bg-gray-200 text-gray-700'}`}
                >
                    {product.tag}
                </span>
            )}

            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-[#F7F4EF]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Quick add overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <button
                        onClick={handleAdd}
                        className={`text-xs font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-200 ${added
                                ? 'bg-[#1D3930] text-white scale-95'
                                : 'bg-white text-[#1D3930] hover:bg-[#1D3930] hover:text-white'
                            }`}
                    >
                        {added ? '✓ Added' : 'Quick Add'}
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col flex-1 gap-2">
                <p className="text-[10px] font-semibold tracking-[0.15em] text-gray-400 uppercase">
                    {product.category}
                </p>
                <p className="text-[#1D3930] font-semibold text-sm leading-snug line-clamp-2 flex-1">
                    {product.name}
                </p>
                <div className="flex items-center gap-1.5">
                    <StarRating rating={product.rating} />
                    <span className="text-[10px] text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-[#C29B0C] font-bold text-base">৳ {product.price.toLocaleString()}</p>
                    <button
                        onClick={handleAdd}
                        className="text-[#1D3930] border border-[#1D3930]/30 hover:bg-[#1D3930] hover:text-white hover:border-[#1D3930] text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ShopGrid() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('default');

    const filtered = useMemo(() => {
        let result = products;
        if (activeCategory !== 'All') {
            result = result.filter((p) => p.category === activeCategory);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
            );
        }
        if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
        if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
        if (sort === 'reviews') result = [...result].sort((a, b) => b.reviews - a.reviews);
        return result;
    }, [activeCategory, search, sort]);

    return (
        <section className="bg-[#F7F4EF] py-12 md:py-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24">

                {/* ── Controls Row ── */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">

                    {/* Search */}
                    <div className="relative flex-1 min-w-0">
                        <svg
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search products…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-[#1D3930] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D3930]/20 focus:border-[#1D3930] transition-all"
                        />
                    </div>

                    {/* Sort */}
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="text-sm text-[#1D3930] border border-gray-200 bg-white rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D3930]/20 focus:border-[#1D3930] transition-all cursor-pointer"
                    >
                        <option value="default">Sort: Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                        <option value="reviews">Most Reviewed</option>
                    </select>
                </div>

                {/* ── Category Pills ── */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-[#1D3930] text-white border-[#1D3930]'
                                    : 'bg-white text-[#1D3930] border-gray-200 hover:border-[#1D3930]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                    <span className="ml-auto text-xs text-gray-400 self-center">
                        {filtered.length} product{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {/* ── Product Grid ── */}
                {filtered.length === 0 ? (
                    <div className="text-center py-24">
                        <p className="text-2xl font-bold text-[#1D3930] mb-2">No products found</p>
                        <p className="text-gray-400 text-sm">Try a different search or category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
