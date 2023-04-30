import Head from "next/head";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
        />
      </Head>
      <main className="text-primary-dark font-medium">
        <Hero />
        <Promotions />
        <Packages />
      </main>
    </>
  );
}
