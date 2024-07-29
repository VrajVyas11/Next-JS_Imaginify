import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from '../lib/utils';
import "./globals.css";
import SignInPage from './(auth)/sign-in/[[...sign-in]]/page';
import SignUpPage from './(auth)/sign-up/[[...sign-up]]/page';

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered Image Enhancer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#624cf5'} }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <SignedIn>{children}</SignedIn>
          <SignedOut>
{children}
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
