"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "CV", path: "/resume" },
  { name: "Apprentissage", path: "/learning" },
  { name: "Détente", path: "/fun" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-7">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`
              text-[13px] font-medium font-inter transition-colors duration-200
              ${isActive
                ? "text-accent"
                : "text-primary-dark/60 hover:text-primary-dark"
              }
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
