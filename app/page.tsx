import ComparisonTable from "@/components/comparison-table";
import SyllabusTabs from "@/components/Everythingyouneed";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Heropage from "@/components/Hero-section";
import { NavbarDemo } from "@/components/Navbar";
import Pricing from "@/components/pricing";

export default function Home() {
  return(
    <main>
      <NavbarDemo />
      <Heropage />
      <SyllabusTabs />
      <Features />
      <Pricing />
      <ComparisonTable />
      <Footer />


    </main>
  )
}
