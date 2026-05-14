export const mainNav = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" }
];

export const footerNav = [
  ...mainNav,
  { name: "Contato", href: "/#contato" }, // Mantemos como âncora para descer até o form
];