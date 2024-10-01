import { Button } from "@/components/ui/button"; 
import { FiDownload } from 'react-icons/fi';
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Texte */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Développeur fullstack</span>
            <h1 className="text-3xl xl:text-5xl font-bold">
              Bonjour, je suis <br />
              <span className="text-accent">Jancy KOUD</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              J'excelle dans la création d'expériences numériques élégantes et je maîtrise divers langages de programmation et technologies.
            </p>
            {/* Bouton et réseaux sociaux */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Lien vers le CV PDF */}
              <a 
                href="/assets/resume/stage.pdf"  // Chemin vers le fichier PDF
                download="stage.pdf"  // Permet le téléchargement du fichier
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 text-accent border-accent hover:bg-accent hover:text-white"
                >
                  <span>Télécharger le CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              {/* Social */}
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats /> 
    </section>
  );
};

export default Home;
