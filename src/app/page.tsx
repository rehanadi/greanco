import About from "@/components/sections/About";
import Client from "@/components/sections/Client";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Teams from "@/components/sections/Teams";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Teams />
      <Client />
      <Services />
      <Footer />
    </>
  );
}
