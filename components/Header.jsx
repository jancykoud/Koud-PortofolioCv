import Link from "next/link";
import { Button } from "./ui/button"; // Assurez-vous que Button est correctement importé
import Nav from "./Nav"; // Chemin corrigé si dans le même dossier
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-4 xl:py-6 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-3xl font-semibold font-primary">
                        Jancy<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-4">
                    <Nav />
                    <Link href="/contact">
                        <Button className="px-4 py-2 text-sm">
                            Embauchez-moi
                        </Button>
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
