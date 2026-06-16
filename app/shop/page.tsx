import type { Metadata } from 'next';
import ShopHero from '@/components/shop/ShopHero';
import ShopGrid from '@/components/shop/ShopGrid';

export const metadata: Metadata = {
    title: 'Shop — CNC Jali | Handcrafted Wooden Products',
    description:
        'Browse our full range of premium CNC-cut and handcrafted wooden products for your home, kitchen, and workspace.',
};

export default function ShopPage() {
    return (
        <main>
            <ShopHero />
            <ShopGrid />
        </main>
    );
}
