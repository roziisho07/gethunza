import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
// import Image from 'next/image';
import { FaCircleCheck, FaPhone } from 'react-icons/fa6';

const services: LinkProps[] = [
  {
    label: 'Search Engine Optimization (SEO)',
    href: '/',
  },
  {
    label: 'Social Media Marketing',
    href: '/',
  },
  {
    label: 'Pay-Per-Click Advertising (PPC)',
    href: '/',
  },
  {
    label: 'Content Marketing',
    href: '/',
  },
  {
    label: 'Email Marketing Campaigns',
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
              <h1 className="text-3xl">Digital Marketing Services</h1>
            </div>
            <p>
              {`In today’s competitive online landscape, a strong digital marketing strategy is essential for business growth. At Gethunza, we craft data-driven campaigns that boost visibility, engagement, and conversions, helping your business achieve its goals.`}
            </p>
            <p>
              {`From SEO to PPC, our comprehensive range of services is tailored to your unique needs. We combine creative strategies with advanced tools to deliver measurable results, ensuring your brand stands out in the digital world.`}
            </p>
            <div className="my-10 grid items-center gap-8 md:grid-cols-2">
              {/* <Image
                src="/assets/images/service-details/digital-marketing.png"
                alt="Digital Marketing Service Example"
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
                      Targeted Campaigns
                    </h3>
                  </div>
                  <p>
                    {`We create customized campaigns based on your target audience, ensuring every dollar spent delivers maximum ROI.`}
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Analytics-Driven Results
                    </h3>
                  </div>
                  <p>
                    {`Using powerful analytics tools, we track performance metrics and optimize campaigns for continuous improvement.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Processes Section */}
            <div className="mt-2.5 grid gap-6">
              <h2 className="text-2xl font-bold">Our Process</h2>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 1: Initial Consultation
                </h3>
                <p>
                  {`We start by understanding your business, audience, and goals to define the scope and objectives of your digital marketing strategy.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 2: Strategy Development
                </h3>
                <p>
                  {`Our team crafts a tailored strategy, identifying key channels, campaign objectives, and measurable KPIs to track success.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 3: Implementation
                </h3>
                <p>
                  {`We launch campaigns across platforms like Google, Facebook, Instagram, LinkedIn, and more, leveraging the latest tools and techniques.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 4: Monitoring and Optimization
                </h3>
                <p>
                  {`Through continuous monitoring and A/B testing, we refine campaigns to maximize performance and achieve optimal results.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 5: Reporting and Insights
                </h3>
                <p>
                  {`We provide detailed reports with actionable insights, helping you understand the impact of our efforts and plan future strategies.`}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-bold text-accent-700 dark:text-white">
                Why Choose Gethunza for Digital Marketing?
              </h3>
              <p>
                {`At Gethunza, we believe in delivering results that matter. With a focus on innovation, data, and creativity, we help you navigate the complexities of digital marketing with ease. Partner with us to elevate your online presence and grow your business.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
