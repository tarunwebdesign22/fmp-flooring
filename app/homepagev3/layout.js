import AreasWeServeSection from "@/components/homev3/AreasWeServeSection";
import Footer from "@/components/homev3/Footer";
import Header from "@/components/homev3/Header";

export const metadata = {
  title: "FMP Flooring",
  description: "FMP Flooring — quality flooring for every space",
};

export default function HomepageV3Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <AreasWeServeSection />
      <Footer />
    </>
  );
}
