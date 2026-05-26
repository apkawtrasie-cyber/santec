import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Sanierung } from '@/components/sections/Sanierung';
import { Gebaeudetechnik } from '@/components/sections/Gebaeudetechnik';
import { UeberUns } from '@/components/sections/UeberUns';
import { Prozess } from '@/components/sections/Prozess';
import { Kontakt } from '@/components/sections/Kontakt';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sanierung />
        <Gebaeudetechnik />
        <UeberUns />
        <Prozess />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
