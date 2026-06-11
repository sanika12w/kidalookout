import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlightTracking from "@/components/FlightTracking";
import DelayPrediction from "@/components/DelayPrediction";
import ImportFlights from "@/components/ImportFlights";
import FlightFriends from "@/components/FlightFriends";
import TravelHistory from "@/components/TravelHistory";
import AirportIntelligence from "@/components/AirportIntelligence";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-flighty-bg text-black">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Product Stage) */}
        <Hero />

        {/* 3. Features Overview Section */}
        <FlightTracking />

        {/* 4. Flight Imports Section */}
        <ImportFlights />

        {/* 5. Delay Predictions Section */}
        <DelayPrediction />

        {/* 6. Flight Friends Section */}
        <FlightFriends />

        {/* 7. History Section ("Historical insights") */}
        <TravelHistory />

        {/* 8. Airport Intelligence Radar */}
        <AirportIntelligence />

        {/* 9. Trust & Credibility Section */}
        <Awards />

        {/* 10. Testimonials Section */}
        <Testimonials />

        {/* 11. CTA Section */}
        <CTA />

        {/* 12. FAQ Section */}
        <FAQ />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}

