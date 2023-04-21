import Head from "next/head";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
      </Head>
      <main className="text-5xl text-primary-darkest">
        <Hero />
        <Promotions />
      </main>
    </>
  );
}
