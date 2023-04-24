import Head from "next/head";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
      </Head>
      <main className="text-primary-dark font-medium">
        <Hero />
        <Promotions />
        <Packages />
      </main>
    </>
  );
}
