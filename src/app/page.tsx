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
      <div id="services"><ServicesSection /></div>
      <div id="team"><TeamSection /></div>
      <div id="gallery"><GallerySection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="contact"><BookingContactSection /></div>
    </main>
  );
}
