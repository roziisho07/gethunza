import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCircleCheck, FaPhone } from 'react-icons/fa6';

const services: LinkProps[] = [
  {
    label: 'Brand Identity Design',
    href: '/',
  },
  {
    label: 'UI/UX Design',
    href: '/',
  },
  {
    label: 'Marketing Collateral Design',
    href: '/',
  },
  {
    label: 'Illustrations & Artwork',
    href: '/',
  },
  {
    label: 'Packaging Design',
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
              <h1 className="text-3xl">Graphic Designing Services</h1>
            </div>
            <p>
              {`At Gethunza, we bring your vision to life through exceptional graphic design. Our creative experts specialize in delivering designs that are visually stunning, brand-focused, and tailored to captivate your audience.`}
            </p>
            <p>
              {`Whether it’s building a strong brand identity or crafting marketing materials that leave a lasting impression, we merge creativity with strategy to create designs that communicate effectively. Let us help you visually articulate your brand story.`}
            </p>
            <div className="my-10 grid items-center gap-8 md:grid-cols-2">
              <Image
                src="/assets/images/service-details/graphic-designing.png"
                alt="Graphic Designing Service Example"
                width={640}
                height={426}
                className="rounded-5"
              />
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Customized Branding
                    </h3>
                  </div>
                  <p>
                    {`We design logos, business cards, and complete brand kits that resonate with your brand’s values and make a memorable impact.`}
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Creative Marketing Materials
                    </h3>
                  </div>
                  <p>
                    {`From brochures to social media graphics, we create designs that engage your audience and amplify your marketing efforts.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Processes Section */}
            <div className="mt-2.5 grid gap-6">
              <h2 className="text-2xl font-bold">Our Process</h2>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 1: Consultation and Discovery
                </h3>
                <p>
                  {`We begin by understanding your brand, target audience, and goals to create designs that align with your vision.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 2: Concept Development
                </h3>
                <p>
                  {`Our team brainstorms and sketches initial concepts, ensuring they reflect your brand identity and objectives.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 3: Design Execution
                </h3>
                <p>
                  {`Using advanced tools and creative expertise, we refine and finalize designs that are both impactful and visually appealing.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 4: Feedback and Revision
                </h3>
                <p>
                  {`We collaborate with you to gather feedback, fine-tuning designs to ensure they meet your expectations perfectly.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 5: Delivery and Support
                </h3>
                <p>
                  {`Once approved, we deliver the final designs in all required formats and offer ongoing support for future needs.`}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-bold text-accent-700 dark:text-white">
                Why Choose Gethunza for Graphic Design?
              </h3>
              <p>
                {`At Gethunza, design is more than aesthetics—it’s about creating meaningful connections with your audience. Our innovative approach, attention to detail, and commitment to excellence make us the perfect partner for your design needs.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
