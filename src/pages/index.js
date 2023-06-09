import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Packages from "@/components/Packages";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollToTop, showScrollButton } = useScroll();

  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
        <meta
          name="description"
          content="Deliciosos tacos de canasta ubicados en el fraccionamiento las américas de Mérida, Yucatán. Puedes hacer pedidos para eventos sociales con servicio ó sin servicio incluído, al igual que servicio a domicilio ó disfrutar en nuestro punto de venta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="tacos de canasta, la canasta yucateca, tacos, tacos de canasta mérida"
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
      <Footer />
    </>
  );
}
