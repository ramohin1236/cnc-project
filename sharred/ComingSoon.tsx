import Link from 'next/link';

type Props = {
    pageName?: string;
};

export default function ComingSoon({ pageName }: Props) {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center text-center px-6"
            style={{ background: 'linear-gradient(135deg, #0f2018 0%, #1D3930 60%, #0f2018 100%)' }}
        >
            {/* Decorative ring */}
            <div
                className="absolute w-[480px] h-[480px] rounded-full opacity-10 pointer-events-none"
                style={{ border: '1.5px solid #C29B0C', filter: 'blur(1px)' }}
            />
            <div
                className="absolute w-[320px] h-[320px] rounded-full opacity-10 pointer-events-none"
                style={{ border: '1px solid #C29B0C' }}
            />

            {/* Brand */}
            <Link href="/" className="flex flex-col items-center gap-1 mb-12 group">
                <span className="text-white font-black text-2xl tracking-[0.2em] uppercase group-hover:text-[#C29B0C] transition-colors duration-300">
                    CNC Jali
                </span>
                <span className="text-[#C29B0C]/70 text-[10px] font-semibold tracking-[0.35em] uppercase">
                    Cutting Bangladesh
                </span>
            </Link>

            {/* Label */}
            <span className="inline-block text-[#C29B0C] text-xs font-bold tracking-[0.3em] uppercase border border-[#C29B0C]/30 px-4 py-1.5 rounded-full mb-6">
                {pageName ?? 'Page'} — Coming Soon
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                We&apos;re Working <br />
                <span className="text-[#C29B0C]">On It</span>
            </h1>

            <p className="text-white/50 text-sm md:text-base max-w-sm leading-relaxed mb-10">
                This page is currently under construction. Check back soon — something
                beautiful is on its way.
            </p>

            {/* Back button */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#C29B0C] hover:bg-[#d4aa15] text-white font-semibold text-sm px-7 py-3 rounded-full transition-colors duration-200"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to Home
            </Link>
        </div>
    );
}
