"use client";

import React from "react";
import AnimationProvider from "./AnimationProvider";
import dynamic from "next/dynamic";

// Carrega widgets pesados apenas no cliente
const DeferredContact = dynamic(() => import("@/components/client/DeferredContact"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), { ssr: false });

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <AnimationProvider>
      {children}
      <DeferredContact />
      <WhatsAppButton />
      <ScrollToTop />
    </AnimationProvider>
  );
}
