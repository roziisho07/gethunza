import { LinkProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
// import Image from 'next/image';
import { FaCircleCheck, FaPhone } from 'react-icons/fa6';

const services: LinkProps[] = [
  {
    label: 'Bookkeeping Services',
    href: '/',
  },
  {
    label: 'Financial Reporting',
    href: '/',
  },
  {
    label: 'Payroll Management',
    href: '/',
  },
  {
    label: 'Tax Preparation and Compliance',
    href: '/',
  },
  {
    label: 'Accounts Reconciliation',
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
              <h1 className="text-3xl">Accounting and Bookkeeping Services</h1>
            </div>
            <p>
              {`Managing your finances effectively is the cornerstone of business success. At Gethunza, we provide comprehensive accounting and bookkeeping services tailored to businesses of all sizes. With meticulous attention to detail and cutting-edge tools, we ensure your financial records are accurate, compliant, and insightful.`}
            </p>
            <p>
              {`Our team of experienced accountants works closely with clients to streamline financial processes, giving you more time to focus on growing your business. Whether you're a startup, SME, or a large corporation, we’ve got you covered with solutions designed to meet your unique needs.`}
            </p>
            <div className="my-10 grid items-center gap-8 md:grid-cols-2">
              {/* <Image
                src="/assets/images/service-details/accounting.png"
                alt="Accounting service example"
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
                      Tailored Bookkeeping Solutions
                    </h3>
                  </div>
                  <p>
                    {`We offer customized bookkeeping services that fit your business operations, ensuring that your financial data is organized, accurate, and ready for analysis.`}
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Compliance and Taxation
                    </h3>
                  </div>
                  <p>
                    {`Our team ensures that your business complies with tax regulations, handling all aspects of preparation, submission, and planning.`}
                  </p>
                </div>
              </div>
            </div>

            {/* Processes Section */}
            <div className="mt-2.5 grid gap-6">
              <h2 className="text-2xl font-bold">Our Process</h2>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 1: Consultation
                </h3>
                <p>
                  {`We begin by understanding your business operations, financial goals, and specific accounting needs to develop a tailored service plan.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 2: Data Collection
                </h3>
                <p>
                  {`Our team collects and organizes your financial data, ensuring accuracy and completeness for a seamless bookkeeping process.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 3: Implementation
                </h3>
                <p>
                  {`We integrate modern accounting software and tools to manage your financial records, ensuring real-time access and insights.`}
                </p>
              </div>
              <div>
                <h3 className="text-md font-bold text-accent-700 dark:text-white">
                  Step 4: Ongoing Support
                </h3>
                <p>
                  {`With regular reporting, payroll management, and financial analysis, we provide continuous support to keep your business finances on track.`}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-md font-bold text-accent-700 dark:text-white">
                Why Choose Gethunza for Accounting Services?
              </h3>
              <p>
                {`At Gethunza, we go beyond traditional bookkeeping. We act as your financial partner, helping you make informed decisions with accurate and timely financial data. From compliance to growth strategy, our expertise ensures your business stays ahead.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
