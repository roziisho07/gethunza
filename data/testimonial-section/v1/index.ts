import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Clients testimonial',
    title: 'Your IT Partner for a Dynamic Future',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.jpg',
          alt: 'Sarah M',
        },
        name: 'Sarah M',
        about: 'CEO of ModernTech Solutions',
      },
      speech:
        'Working with Gethunza has been a game-changer for our business.From web development to digital marketing, they consistently exceed our expectations and drive real results.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.jpg',
          alt: 'Robert Fox',
        },
        name: 'John D',
        about: 'COO of Nexus Logistics',
      },
      speech:
        'the team at Gethunza brought our vision to life with their architectural services. Their blend of creativity and precision demonstrates their commitment to excellence in every detail. We couldn’t be happier with the results',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-3.jpeg',
          alt: 'Ayesha K',
        },
        name: 'Ayesha K',
        about: 'Founder of Urban Spaces Design',
      },
      speech:
        'The accounting services gave us the financial clarity we desperately needed. Their professional, forward-thinking approach perfectly aligns with their promise of innovative excellence.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-4.jpg',
          alt: ' Imran S',
        },
        name: 'Imran S',
        about: 'CFO of GreenEarth Initiatives',
      },
      speech:
        'Their graphic design and digital marketing strategies transformed our brand’s identity and online presence.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-13.jpeg',
          alt: 'Jada Christian',
        },
        name: 'Jada Christian',
        about: 'Team Leader, Naqsharts',
      },
      speech:
        'Their professional, forward-thinking approach perfectly aligns with their promise of innovative excellence.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-14.jpeg',
          alt: 'Kevin Deen',
        },
        name: 'Kevin Deen',
        about: 'Development Manager at moonlight corp.',
      },
      speech:
        'Gethunza has been delivering work that is both creative and impactful',
      rating: 5,
    },
  ],
};
