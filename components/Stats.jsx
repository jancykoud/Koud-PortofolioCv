"use client";
import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Années d'expérience" },
  { num: 5, text: "Projets réalisés", suffix: "+" },
  { num: 15, text: "Technologies maîtrisées", suffix: "+" },
  { num: 3, text: "Standards internationaux" },
];

const Stats = () => {
  return (
    <section
      style={{
        borderTop: "0.5px solid rgba(255,255,255,0.08)",
        borderBottom: "0.5px solid rgba(255,255,255,0.08)",
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-4 xl:py-2"
              style={
                index < stats.length - 1
                  ? { borderRight: "0.5px solid rgba(255,255,255,0.08)" }
                  : {}
              }
            >
              <CountUp
                end={item.num}
                suffix={item.suffix || ""}
                duration={4}
                delay={0.5}
                className="font-medium text-white"
                style={{ fontSize: "28px" }}
              />
              <p
                className="mt-1 text-center"
                style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}
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
