import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jancy<span className="text-accent">.</span>
          </h1>
        </Link>
        
        {/* desktop nav & contact button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="/contact"
            style={{
              border: "0.5px solid rgba(110,231,183,0.4)",
              borderRadius: "100px",
              color: "#6ee7b7",
              background: "rgba(110,231,183,0.06)",
              padding: "8px 24px",
              fontSize: "14px",
              fontWeight: 500,
              transition: "background 0.2s",
            }}
          >
            Contactez-moi
          </Link>
        </div>
        
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;