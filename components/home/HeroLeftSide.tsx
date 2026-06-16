import React from 'react'
import Link from 'next/link'

const HeroLeftSide = () => {
    return (
        <div className="flex flex-col gap-4 md:gap-6">

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#C29B0C] leading-tight">
                Simple Elegant Essential
            </h1>

            <div className="pt-1">
                <Link
                    href="/shop"
                    className="inline-block border border-white text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-[#C29B0C] hover:border-[#C29B0C] hover:text-white"
                >
                    Shop Now
                </Link>
            </div>

        </div>
    )
}

export default HeroLeftSide