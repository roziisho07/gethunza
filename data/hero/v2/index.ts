import { HeroSectionProps } from '@/src/sections/hero/v2';

export const heroSectionData: HeroSectionProps = {
  title: 'Boost your business with remote experts',
  customers: [
    {
      src: '/assets/images/hero/fiverr.png',
      alt: 'user 1',
    },
    {
      src: '/assets/images/hero/upwork.png',
      alt: 'user 2',
    },
    {
      src: '/assets/images/hero/bark.jpeg',
      alt: 'user 3',
    },
  ],
  customerCounterInfo: {
    count: 2000,
    about: 'Satisfied Customer',
    suffix: '+',
  },
  ctaButton: {
    href: '/contact',
    label: 'Get Started',
  },
  imageLarge: {
    src: '/assets/images/hero/hero-11.jpg',
    alt: 'image 5',
  },
  description:
    'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dum text of the printing and typeset',
  imageSmall: {
    src: '/assets/images/hero/info.png',
    alt: 'image 6',
  },
  statisticsCounterInfo: {
    count: 2500,
    about: 'Projects Completed ',
    suffix: '+',
  },
};
