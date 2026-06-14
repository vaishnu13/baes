import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import Loyalty from "@/components/Loyalty";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import OrderOnline from "@/components/OrderOnline";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-hidden">
      <Navigation />
      <Hero />
      <Gallery />
      <Loyalty />
      <Reviews />
      <FeaturedMenu />
      <OrderOnline />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
