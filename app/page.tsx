import { HeroSection } from '@/components/hero-section';
import { FeaturedProducts } from '@/components/featured-products';
import { Categories } from '@/components/categories';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}