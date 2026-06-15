'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full relative z-50" style={{ background: 'linear-gradient(to bottom, rgba(10,28,20,0.98), rgba(29,57,48,0.92))', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(194,155,12,0.15)' }}>
            <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 h-[70px] flex items-center justify-between">

                {/* ── Brand ── */}
                <Link href="/" className="flex flex-col leading-none group">
                    <span className="text-white font-black text-lg md:text-xl tracking-[0.2em] uppercase group-hover:text-[#C29B0C] transition-colors duration-300">
                        CNC Jali
                    </span>
                    <span className="text-[#C29B0C]/80 text-[9px] font-semibold tracking-[0.35em] uppercase mt-0.5">
                        Cutting Bangladesh
                    </span>
                </Link>

                {/* ── Desktop links ── */}
                <nav className="hidden md:flex items-center gap-1">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="relative text-white/75 hover:text-white text-sm font-medium tracking-wide px-4 py-2 rounded-md transition-colors duration-200 group"
                        >
                            {l.label}
                            {/* underline accent */}
                            <span className="absolute bottom-1 left-4 right-4 h-px bg-[#C29B0C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </Link>
                    ))}

                    {/* CTA button */}
                    <Link
                        href="/contact"
                        className="ml-4 bg-[#C29B0C] hover:bg-[#d4aa15] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200"
                    >
                        Get Quote
                    </Link>
                </nav>

                {/* ── Mobile hamburger ── */}
                <button
                    className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span
                        className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 origin-center"
                        style={{ transform: open ? 'translateY(8px) rotate(45deg)' : 'none' }}
                    />
                    <span
                        className="block h-[2px] w-4 bg-[#C29B0C] rounded-full transition-all duration-300"
                        style={{ opacity: open ? 0 : 1, width: open ? '0' : '16px' }}
                    />
                    <span
                        className="block h-[2px] w-6 bg-white rounded-full transition-all duration-300 origin-center"
                        style={{ transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
                    />
                </button>
            </div>

            {/* ── Mobile menu ── */}
            <div
                className="md:hidden absolute top-[70px] left-0 right-0 z-50 overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: open ? '340px' : '0px',
                    background: 'rgba(10,28,20,0.98)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: open ? '1px solid rgba(194,155,12,0.2)' : 'none',
                }}
            >
                <nav className="flex flex-col px-4 py-3">
                    {links.map((l, i) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between text-white/80 hover:text-[#C29B0C] text-sm font-medium py-3 transition-colors duration-200"
                            style={{ borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                        >
                            {l.label}
                            <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-3 bg-[#C29B0C] text-white text-sm font-semibold py-2.5 rounded-md text-center transition-colors duration-200 hover:bg-[#d4aa15]"
                    >
                        Get a Quote
                    </Link>
                </nav>
            </div>
        </header>
    );
}