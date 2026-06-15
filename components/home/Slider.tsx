'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import sliderData from '@/data/sliderData.json';

type Slide = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    cta: string;
};

const slides: Slide[] = sliderData;
const INTERVAL = 4500;
const DRAG_THRESHOLD = 50; // px needed to trigger a slide change

export default function Slider() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const dragStartX = useRef<number | null>(null);
    const isDragging = useRef(false);

    // ── Autoplay ────────────────────────────────────────────────
    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, INTERVAL);
    };

    const goTo = (index: number) => {
        setCurrent(index);
        resetTimer();
    };

    const goNext = () => goTo((current + 1) % slides.length);
    const goPrev = () => goTo((current - 1 + slides.length) % slides.length);

    useEffect(() => {
        resetTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ── Drag / Swipe handlers ───────────────────────────────────
    const onPointerDown = (e: React.PointerEvent) => {
        dragStartX.current = e.clientX;
        isDragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (!isDragging.current || dragStartX.current === null) return;
        const delta = e.clientX - dragStartX.current;
        if (Math.abs(delta) >= DRAG_THRESHOLD) {
            delta < 0 ? goNext() : goPrev();
        }
        isDragging.current = false;
        dragStartX.current = null;
    };

    const onPointerCancel = () => {
        isDragging.current = false;
        dragStartX.current = null;
    };

    return (
        <div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800 select-none"
            style={{ aspectRatio: '16 / 9', cursor: 'grab' }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
        >
            {/* ── Slides ── */}
            {slides.map((slide, i) => (
                <div
                    key={slide.id}
                    className="absolute inset-0"
                    style={{
                        opacity: i === current ? 1 : 0,
                        zIndex: i === current ? 10 : 0,
                        transition: 'opacity 800ms ease-in-out',
                        pointerEvents: 'none',
                    }}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        draggable={false}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                        priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                </div>
            ))}

            {/* ── Slide counter badge ── */}
            <div
                className="absolute top-3 right-3 z-20 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full"
                style={{ backdropFilter: 'blur(6px)', pointerEvents: 'none' }}
            >
                {current + 1} / {slides.length}
            </div>

            {/* ── Prev / Next arrows ── */}
            <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
                style={{ backdropFilter: 'blur(4px)' }}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
                style={{ backdropFilter: 'blur(4px)' }}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* ── Dot indicators ── */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); goTo(i); }}
                        aria-label={`Slide ${i + 1}`}
                        style={{
                            width: i === current ? '22px' : '7px',
                            height: '7px',
                            borderRadius: '999px',
                            background: i === current ? '#fff' : 'rgba(255,255,255,0.42)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 300ms ease',
                            padding: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}