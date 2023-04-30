import "@/styles/globals.css";
import { Alegreya_Sans } from "@next/font/google";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${alegreya.variable} font-alegreya bg-secondary-light/70`}>
      <Component {...pageProps} />
    </div>
  );
}
