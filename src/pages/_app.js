import "@/styles/globals.css";
import { Alegreya_Sans } from "@next/font/google";
import Head from "next/head";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tacos de canasta &quot;La canasta yucateca&quot;</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/efrainchacon/image/upload/f_auto/v1682529858/tacos_de_canasta_ciel_chacon/IMG-20230419-WA0026_1_nskbmc-removebg-preview_copyrecorte_mihnvb.png"
        />
      </Head>
      <div
        className={`${alegreya.variable} font-alegreya bg-secondary-light/70`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
