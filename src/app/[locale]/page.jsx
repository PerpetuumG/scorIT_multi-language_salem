'use client';

import Header from './layouts/Header';
import HomeHero from './components/HomeHero';
import AboutUS from '@/app/[locale]/components/AboutUS';
import Features from '@/app/[locale]/components/Features';
import MarketingDesc from '@/app/[locale]/components/MarketingDesc';
import WorkApp from '@/app/[locale]/components/WorkApp';
import AppScreenshots from "@/app/[locale]/components/AppScreenshots";
import Footer from "@/app/[locale]/layouts/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <AboutUS />
      <Features />
      <MarketingDesc />
      <WorkApp />
      <AppScreenshots/>
      <Footer/>
    </>
  );
}
