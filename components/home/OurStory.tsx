import Image from 'next/image';

export default function OurStory() {
    return (
        <section className="bg-[#F7F4EF] py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 md:px-16 lg:px-24 flex flex-col items-center gap-8">

                {/* ── Heading ── */}
                <h2 className="text-2xl md:text-3xl font-light text-[#1D3930] tracking-wide">
                    Our story
                </h2>

                {/* ── Wood-frame card ── */}
                {/* Outer wood border */}
                <div
                    className="w-full rounded-[20px] p-3 shadow-2xl"
                    style={{
                        background: 'linear-gradient(135deg, #c8924a 0%, #8B5E3C 30%, #a0703f 50%, #7a4f2d 70%, #c8924a 100%)',
                        boxShadow: '0 8px 32px rgba(90,50,20,0.35), inset 0 1px 0 rgba(255,220,150,0.3)',
                    }}
                >
                    {/* Inner darker wood ring */}
                    <div
                        className="w-full rounded-[12px] p-1.5"
                        style={{
                            background: 'linear-gradient(135deg, #5c3416 0%, #7a4f2d 40%, #5c3416 100%)',
                            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.4)',
                        }}
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[16/7] rounded-[8px] overflow-hidden">
                            <Image
                                src="/img.jpg"
                                alt="CNC Jali Cutting Bangladesh"
                                fill
                                sizes="(max-width: 768px) 100vw, 896px"
                                className="object-cover"
                                priority
                            />
                            {/* subtle inner vignette */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.25)',
                                    borderRadius: '8px',
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Story text ── */}
                <div className="max-w-2xl text-center flex flex-col gap-4">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        CNC Jali Cutting Bangladesh was born from a passion for precision craftsmanship.
                        What started as a small workshop has grown into one of Bangladesh's most trusted
                        names in handcrafted wooden décor and CNC jali work.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Every piece we create carries the care and skill of our artisans — blending
                        traditional woodworking with modern cutting technology to bring beauty into
                        everyday spaces.
                    </p>
                </div>

            </div>
        </section>
    );
}
