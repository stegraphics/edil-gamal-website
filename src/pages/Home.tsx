import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import AboutPreview from '../components/AboutPreview';
import SectorsPreview from '../components/SectorsPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <Hero />
      <Statistics />
      <AboutPreview />
      <SectorsPreview />
      <Footer />
    </div>
  );
}