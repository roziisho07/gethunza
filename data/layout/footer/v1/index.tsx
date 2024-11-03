import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Hire experienced, world-class remote talent to elevate customer experiences and fuel your brand’s growth.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
    ],
  },
  columnOne: {
    title: 'Useful Links',
    links: [
      {
        label: 'Software Development',
        href: '/',
        openNewTab: false,
      },

      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'UI/UX Design',
        href: '/',
        openNewTab: false,
      },

      {
        label: 'Others',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Contact info',
    location: 'Darby Trails Dr, Sugar Land TX, 77479',
    mails: ['info@gethunza.com', 'inquiry@gethunza.com'],
    phoneNumbers: ['(405) 555-0128', '(629) 555-0129'],
  },
  columnThree: {
    title: 'Recent Blogs',
    blogs: [
      {
        image: {
          src: '/assets/images/service-details/soft-2.jpg',
          alt: 'Blockchain Solutions',
        },
        title: 'Blockchain Solutions for your business',
        date: 'Jan 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/service-details/soft-3.jpg',
          alt: 'Generative AI in business',
        },
        title: 'Generative AI in business',
        date: 'Aug 24, 2024',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightText: '© gethunza  2024 | All Rights Reserved',
    links: [
      {
        label: 'Terms & Conditions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
