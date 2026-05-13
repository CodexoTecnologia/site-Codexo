import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site"; // Usando a variável que criamos na etapa anterior

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "icon" | "full"; // Previsão para usar só o ícone no mobile, se quiser
  priority?: boolean;
}

export default function Logo({ className = "", width = 140, height = 40, variant = "full", priority = false }: LogoProps) {
  const logoSrc = variant === "full" 
    ? "/assets/logo/logo_codexo_nome_branco.svg" 
    : "/assets/logo/logo_codexo_roxo_principal.svg";

  return (
    <Link href="/" className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`} aria-label={`Ir para a home da ${siteConfig.name}`}>
      <Image
        src={logoSrc}
        alt={`${siteConfig.name} Logo`}
        width={width}
        height={height}
        priority={priority}
        className="object-contain"
      />
    </Link>
  );
}