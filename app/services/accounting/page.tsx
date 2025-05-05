import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/accounting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetHunza | Service Details',
  keywords: 'GetHunza, service details, IT solutions, services',
  openGraph: {
    title: 'GetHunza | Service Details',
    description: 'GetHunza - IT Solutions and Services',
    url: 'https://gethunza.com/service-details',
    
    
    siteName: 'GetHunza',
    type: 'website',
  },
  
  description: 'GetHunza - IT Solutions and Services',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
