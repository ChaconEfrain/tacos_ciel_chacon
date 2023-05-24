import Head from "next/head";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Packages from "@/components/Packages";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) setShowScrollButton(true);
      else setShowScrollButton(false);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
        <meta
          name="description"
          content="Deliciosos tacos de canasta ubicados en el fraccionamiento las américas de Mérida, Yucatán. Puedes hacer pedidos para eventos sociales con servicio ó sin servicio incluído, al igual que servicio a domicilio ó disfrutar en nuestro punto de venta."
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
        />
      </Head>
      <Nav />
      <main className="text-primary-dark font-medium">
        <Hero />
        <Promotions />
        <Packages />
        {showScrollButton && <ScrollToTopButton handleClick={scrollToTop} />}
      </main>
    </>
  );
}
