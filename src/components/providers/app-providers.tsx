"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const pk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const core = (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );

  if (pk) return <ClerkProvider publishableKey={pk}>{core}</ClerkProvider>;
  return core;
}
