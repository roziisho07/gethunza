import { ScrollArea } from '@/src/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { cn } from '@/src/utils/shadcn';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CustomLink } from '@/src/components/custom-link';
import { X } from 'lucide-react';
import { OffcanvasContactUsForm } from './form';
import { BrandLogo } from '@/src/layout/brand-logo';

const mainTitleClasses = cn(
  'relative mb-30px pb-[14px] font-secondary text-[1.25rem] font-bold uppercase dark:text-white text-accent-900',
  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[50px] after:bg-current'
);

const socialIconClasses = cn(
  'text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-primary text-white'
);

const addressIconParentClasses = cn(
  ' dark:text-white text-accent-800 flex-none leading-none self-start relative top-2'
);
const addressItemClasses = cn('flex gap-5');
const textColor = cn(
  'transition-colors text-accent-800 dark:text-white/70 duration-300 hover:text-primary dark:hover:text-white'
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

interface IOffCanvas {
  description: string;
  contactInfo: {
    location: string;
    phoneNumber: string;
    mail: string;
  };
  socialLinks: SocialLinkProps[];
}

const offCanvasProps: IOffCanvas = {
  description:
    'we deliver Innovative Excellence through a range of solutions designed to elevate your business. Our teams are committed to driving your brand’s success with innovative strategies that make an impact.',
  contactInfo: {
    location: ' 88 broklyn street, New York',
    phoneNumber: '+1 555-9990-153',
    mail: 'info@gethunza.com',
  },
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
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
};

export function OffCanvas() {
  const { description, contactInfo, socialLinks } = offCanvasProps;
  return (
    <Sheet>
      <SheetTrigger
        aria-controls="desktop-offcanvas-handler"
        className="text-[1.25rem]/[1] text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-white"
      >
        <svg
          id="desktop-offcanvas-handler"
          width={31}
          height={24}
          viewBox="0 0 31 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.0234375"
            y1={12}
            x2="30.0234"
            y2={12}
            stroke="currentColor"
            strokeWidth={3}
          />
          <path d="M5.02344 22H30.0234" stroke="currentColor" strokeWidth={3} />
          <path d="M10.0234 2H30.0234" stroke="currentColor" strokeWidth={3} />
        </svg>
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="z-444 border-none bg-accent-100 p-0 dark:bg-black"
      >
        <ScrollArea
          viewportClassName={cn('h-[100vh]')}
          scrollBarClassName="w-0"
        >
          <div className="grid gap-10 p-30px">
            {/* Logo area  */}
            <div className="flex items-center justify-between">
              <BrandLogo />
              <SheetClose className="data-[state=open]:bg-secondary rounded-sm text-accent-900 ring-offset-0 transition-opacity hover:opacity-100 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none dark:text-white   dark:opacity-70">
                <X className="h-9 w-9 " />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>

            {/* About us info  */}
            <div>
              <h3 className={mainTitleClasses}>ABOUT US</h3>
              <p className="text-accent-800 dark:text-white/70">
                {description}
              </p>
            </div>

            {/* Form  */}
            <OffcanvasContactUsForm />

            {/* Contact info  */}
            <div>
              <h3 className={mainTitleClasses}>CONTACT INFO</h3>
              <ul aria-label="addresses" className="grid gap-2">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaPhone />
                  </span>
                  <a
                    href={`tel:${contactInfo.phoneNumber.split(' ').join('')}`}
                    className={textColor}
                  >
                    {contactInfo.phoneNumber}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${contactInfo.mail}`} className={textColor}>
                    {contactInfo.mail}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaMapMarkerAlt />
                  </span>
                  <address className={cn(textColor, 'not-italic')}>
                    {contactInfo.location}
                  </address>
                </li>
              </ul>
              {socialLinks && socialLinks.length > 0 && (
                <nav aria-label="social links">
                  <ul className="mt-8 inline-flex items-center gap-2.5">
                    {socialLinks.map((socialLink, index) => (
                      <li key={index}>
                        <CustomLink
                          aria-label={socialLink.href}
                          className={socialIconClasses}
                          href={socialLink.href}
                          openNewTab
                        >
                          <span>{socialLink.icon}</span>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
