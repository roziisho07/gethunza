import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { TestimonialSection } from '@/src/sections/testimonial/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Testimonial',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection />
      <TestimonialSection />
      <CtaSection className="section-padding-primary !pt-0" />
      <Footer />
    </>
  );
}
