'use client';

import { DriverProvider } from "@/contexts/driver";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <DriverProvider>{children}</DriverProvider>
}