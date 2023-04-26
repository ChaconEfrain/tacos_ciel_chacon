import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <>
      <main className="text-primary-dark font-medium">
        <Hero />
        <Promotions />
        <Packages />
      </main>
    </>
  );
}
