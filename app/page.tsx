import ComparisonTable from "@/components/comparison-table";
import SyllabusTabs from "@/components/Everythingyouneed";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Heropage from "@/components/Hero-section";
import ResponsiveNavbar from "@/components/Navbar";
import Pricing from "@/components/pricing";

export default function Home() {
  return(
    <main>
      <ResponsiveNavbar />
      <Heropage />
      <SyllabusTabs />
      <Features />
      <Pricing />
      <ComparisonTable />
      <Footer />


    </main>
  )
}
