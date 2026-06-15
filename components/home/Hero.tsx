import HeroLeftSide from './HeroLeftSide';
import Slider from './Slider';

export default function Hero() {
    return (
        <section className="bg-[#1D3930] flex items-center py-6 lg:py-12">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-16 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 py-6 md:py-0">

                {/* ── Left: Text ── */}
                <div className="w-full md:flex-[1.1]">
                    <HeroLeftSide />
                </div>

                {/* ── Right: Slider ── */}
                <div className="w-full md:flex-[1.9]">
                    <Slider />
                </div>

            </div>
        </section>
    );
}