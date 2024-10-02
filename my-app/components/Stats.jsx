"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Années de pratique",
  },
  {
    num: 7,
    text: "Projets réalisés",
  },
  {
    num: 5,
    text: "Technologies maîtrisées",
  },
  {
    num: 50,
    text: "Commits de code",
  },
];

const Stats = () => {
  return (
    <section className="py-8 bg-primary"> {/* Couleur de fond harmonisée avec la page */}
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={1}
                className="text-3xl xl:text-4xl font-bold text-accent"
              />
              <p
                className={`mt-2 text-sm font-medium leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
