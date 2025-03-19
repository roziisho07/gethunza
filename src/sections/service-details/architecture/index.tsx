import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
// import Image from 'next/image';
import { FaCircleCheck, FaPhone } from 'react-icons/fa6';

const services: LinkProps[] = [
  {
    label: 'Residential Architecture',
    href: '/',
  },
  {
    label: 'Commercial Architecture',
    href: '/',
  },
  {
    label: 'Interior Design',
    href: '/',
  },
  {
    label: 'Landscape Architecture',
    href: '/',
  },
  {
    label: 'Sustainable Design Solutions',
    href: '/',
  },
];

export function ServiceDetailsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[390px_1fr] 2xl:gap-[50px]">
          {/* Sidebar */}
          <div className="grid gap-10 md:sticky md:top-[76px] lg:top-[133px] 2xl:gap-[60px]">
            <div className="grid gap-6 rounded-5 bg-accent-100 px-10 py-30px dark:bg-accent-700">
              <h3 className="h3 text-accent-700 dark:text-white">
                Our Services
              </h3>
              {services && services.length > 0 && (
                <ul className="grid gap-3" aria-label="service list">
                  {services.map((service, index) => (
                    <li key={index}>
                      <CustomLink
                        href={service.href}
                        className="flex items-center justify-between gap-4 transition-colors duration-300 hover:text-primary"
                      >
                        <span className="flex-1">{service.label}</span>
                        <svg
                          width={22}
                          height={7}
                          viewBox="0 0 22 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="4.37114e-08"
                            y1="3.5"
                            x2={20}
                            y2="3.5"
                            stroke="currentColor"
                          />
                          <path
                            d="M19.5 1.68487L21.2965 3.5L19.5 5.31513L19.5 1.68487Z"
                            fill="white"
                            stroke="currentColor"
                          />
                        </svg>
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className={cn(
                'relative grid min-h-[410px] place-items-center overflow-hidden rounded-5 bg-accent-100 p-10 dark:bg-accent-700',
                'after:absolute after:inset-0 after:z-1 after:bg-accent-700/95',
                'before:absolute before:inset-0 before:z-[2] before:[background:linear-gradient(180deg,rgba(185,18,2,0.00)_0%,rgba(185,18,2,0.22)_100%)]'
              )}
            >
              <div className="relative z-10 text-center text-white">
                <span className="inline-grid h-[68px] w-[68px] place-items-center rounded-full bg-primary text-lg/[1] text-white">
                  <FaPhone />
                </span>
                <p className="mb-1 mt-6">Need help? Contact our experts</p>
                <a
                  className="font-secondary text-md font-bold transition-colors duration-300"
                  href="tel:+0032-1255-69874"
                >
                  +0032-1255-69874
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6">
            <div className="relative mb-5 overflow-hidden rounded-5">
              <h1 className="text-3xl">Architectural Services</h1>
            </div>
            <p>
              {`At Gethunza, we craft visionary architectural solutions that redefine spaces and enhance living experiences. Our expertise in designing functional, aesthetic, and sustainable structures ensures that your project exceeds expectations.`}
            </p>
            <p>
              {`Whether it's residential, commercial, or industrial architecture, we bring innovation and precision to every project. Our dedicated team collaborates closely with clients to turn concepts into tangible designs that inspire.`}
            </p>
            <div className="my-10 grid items-center gap-8 md:grid-cols-2">
              {/* <Image
                src="/assets/images/service-details/image-2.png"
                alt="Architectural service example"
                width={640}
                height={426}
                className="rounded-5"
              /> */}
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Tailored Designs
                    </h3>
                  </div>
                  <p>
                    {`We create customized architectural solutions tailored to your unique needs, blending functionality with artistic flair.`}
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Sustainable Architecture
                    </h3>
                  </div>
                  <p>
                    {`Our designs incorporate eco-friendly materials and energy-efficient practices to create spaces that respect the environment.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2.5 grid gap-6">
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Residential Architecture
                </h3>
                <p>
                  {`We design homes that reflect your personality and lifestyle, offering comfort, elegance, and timeless appeal.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Commercial Spaces
                </h3>
                <p>
                  {`From office buildings to retail outlets, our designs create impactful spaces that drive functionality and success.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Interior & Landscape Design
                </h3>
                <p>
                  {`We bring harmony to indoor and outdoor spaces with designs that enhance aesthetics and usability.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
