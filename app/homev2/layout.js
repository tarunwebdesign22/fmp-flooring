import AreasWeServeSection from "@/components/AreasWeServeSection";
import Footer from "@/components/homev2/Footer";
import Header from "@/components/homev2/Header";

export default function HomeV2Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <AreasWeServeSection />
      <Footer />
    </>
  );
}
