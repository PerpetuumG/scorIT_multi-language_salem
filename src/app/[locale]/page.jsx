'use client';

import Header from './layouts/Header';
import HomeHero from './components/HomeHero';
import AboutUS from '@/app/[locale]/components/AboutUS';
import Features from "@/app/[locale]/components/Features";


export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <AboutUS />
      <Features />
    </>
  );
}
