import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/marketing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Service details',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
       
      />
      <ServiceDetailsSection />
      <Footer />
    </>
  );
}
