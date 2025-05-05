import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
// import { AboutSection } from '@/src/sections/about/v1';
import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { TeamSection } from '@/src/sections/team/v1';
// import { StatisticsSection } from '@/src/sections/statistics/v1';
// import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GetHunza | IT Solutions and Services',
  keywords: 'gethunza, IT solutions, services',
  description: 'getHunza - IT Solutions and Services',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection />
      <AboutSectionTwo />
      <TeamSection />
      {/* <AboutSection /> */}
      <WorkprocessSection />
      {/* <TestimonialSection /> */}
      {/* <StatisticsSection /> */}
      <CtaSection />
      <Footer />
    </>
  );
}
