import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingContactSection from "@/components/BookingContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingContactSection />
    </main>
  );
}
