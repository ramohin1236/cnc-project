import Hero from "@/components/home/Hero";
import Navbar from "@/sharred/Navbar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import OurCollections from "@/components/home/OurCollections";
import OurStory from "@/components/home/OurStory";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <OurCollections />
        <OurStory />
      </div>
    </div>
  );
}
