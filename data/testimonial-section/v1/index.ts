import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Clients testimonial',
    title: 'Providing Top Notch Services To Our Clients',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/hero/bark.jpeg',
          alt: 'Sarah M',
        },
        name: 'Sarah M',
        about: 'CEO',
      },
      speech:
        'Working with Gethunza has been a game-changer for our business.From web development to digital marketing, they consistently exceed our expectations and drive real results.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/hero/upwork.png',
          alt: 'Robert Fox',
        },
        name: 'John D',
        about: 'COO',
      },
      speech:
        'the team at Gethunza brought our vision to life with their architectural services. Their blend of creativity and precision demonstrates their commitment to excellence in every detail. We couldn’t be happier with the results.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/hero/fiverr.png',
          alt: 'Ayesha K',
        },
        name: 'Ayesha K',
        about: 'Founder',
      },
      speech:
        'The accounting services gave us the financial clarity we desperately needed. Their professional, forward-thinking approach perfectly aligns with their promise of innovative excellence.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/hero/bark.jpeg',
          alt: ' Imran S',
        },
        name: 'Imran S',
        about: 'CFO',
      },
      speech:
        'Their graphic design and digital marketing strategies transformed our brand’s identity and online presence.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/hero/upwork.png',
          alt: 'Jada Christian',
        },
        name: 'Jada Christian',
        about: 'Team Leader, Naqsharts',
      },
      speech:
        'Their professional, forward-thinking approach perfectly aligns with their promise of innovative excellence.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/hero/bark.jpeg',
          alt: 'Kevin Deen',
        },
        name: 'Kevin Deen',
        about: 'Development Manager',
      },
      speech:
        'Gethunza has been delivering work that is both creative and impactful.',
      rating: 5,
    },
  ],
};
