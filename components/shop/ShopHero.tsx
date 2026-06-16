export default function ShopHero() {
    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f2018 0%, #1D3930 60%, #0f2018 100%)' }}
        >
            {/* Decorative rings */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
                style={{ border: '1px solid #C29B0C' }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
                style={{ border: '1px solid #C29B0C' }}
            />

            <div className="relative max-w-7xl mx-auto px-4 md:px-16 lg:px-24 text-center">
                <span className="inline-block text-[#C29B0C] text-xs font-bold tracking-[0.3em] uppercase border border-[#C29B0C]/30 px-4 py-1.5 rounded-full mb-6">
                    Handcrafted with care
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                    Our <span className="text-[#C29B0C]">Shop</span>
                </h1>
                <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                    Premium CNC-cut and handcrafted wooden products — designed for your home, kitchen, and workspace.
                </p>
            </div>
        </section>
    );
}
