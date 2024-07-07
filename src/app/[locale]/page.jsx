'use client';

import Header from './layouts/Header';
import HomeHero from './components/HomeHero';
import AboutUS from '@/app/[locale]/components/AboutUS';

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <AboutUS />
    </>
  );
}
