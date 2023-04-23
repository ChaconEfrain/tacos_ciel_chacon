import Head from "next/head";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
      </Head>
      <main className="text-primary-dark">
        <Hero />
        <Promotions />
      </main>
    </>
  );
}
