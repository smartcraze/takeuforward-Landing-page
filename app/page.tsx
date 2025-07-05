import ComparisonTable from "@/components/comparison-table";
import SyllabusTabs from "@/components/Everythingyouneed";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Heropage from "@/components/Hero-section";
import ResponsiveNavbar from "@/components/Navbar";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <ResponsiveNavbar />
      
      <section>
        <Heropage />
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-8 sm:py-12">
        <SyllabusTabs />
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-8 sm:py-12">
        <Features />
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-8 sm:py-12">
        <Pricing />
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Compare TUF+ with Other Platforms
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          See how TUF+ stands out with its unique features and benefits.
        </p>
      </section>

      <section className="px-2 sm:px-6 md:px-10">
        <ComparisonTable />
      </section>

      <Footer />
    </main>
  );
}
