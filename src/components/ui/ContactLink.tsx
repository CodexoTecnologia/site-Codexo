"use client";

import type { ReactNode } from "react";

type ContactLinkProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ContactLink({ children, className, onClick }: ContactLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();

    const target = document.getElementById("contato");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (window.location.hash === "#contato") {
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
    }
  };

  return (
    <a href="#contato" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
