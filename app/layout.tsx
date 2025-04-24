import './globals.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/src/components/theme-provider';
import { ModeToggle } from '@/src/components/mode-toggle';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'gethunza',
  description: 'gethunza - IT Solutions and Services',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <head>
      {/* <!--Start of Tawk.to Script--> */}
<script
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/680a04fa29a5a6191417773c/1ipji6t4v';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `,
  }}
></script>
{/* <!--End of Tawk.to Script--> */}
      </head>
      <AOSInit />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
            )}
          >
            <main>{children}</main>
            <ModeToggle />
          </div>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
