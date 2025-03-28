import { projectSectionData } from '@/data/project-section/v1/list-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectSection } from '@/src/sections/project/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Project',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        
      />
      <ProjectSection {...projectSectionData} />
      <Footer />
    </>
  );
}
