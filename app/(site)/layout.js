import AreasWeServeSection from "@/components/AreasWeServeSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <AreasWeServeSection />
      <Footer />
    </>
  );
}
