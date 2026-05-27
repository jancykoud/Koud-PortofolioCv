"use client";

import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();

  // Compression au scroll : padding réduit + ombre légère
  const paddingY = useTransform(scrollY, [0, 80], [28, 14]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.06]);

  return (
    <motion.header
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        boxShadow: shadowOpacity.get() > 0
          ? `0 1px 24px rgba(0,0,0,${shadowOpacity.get()})`
          : "none",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#f7f5f1",
        borderBottom: "0.5px solid #e5e0d8",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo "Jancy." */}
        <Link href="/">
          <span className="font-syne font-black text-[28px] tracking-tight text-primary-dark">
            Jancy<span style={{ color: "#8b5cf6" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden xl:flex items-center gap-8">
          <ModeToggle />
          <Nav />
          <Link
            href="/contact"
            style={{
              border: "0.5px solid #0a0a0a",
              borderRadius: "100px",
              color: "#0a0a0a",
              background: "transparent",
              padding: "8px 20px",
              fontSize: "13px",
              fontWeight: 500,
              transition: "background 0.2s, color 0.2s",
            }}
            className="hover:bg-primary-dark hover:text-primary font-inter"
          >
            Me contacter
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
