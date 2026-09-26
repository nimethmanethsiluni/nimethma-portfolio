import { FiBookOpen, FiMapPin } from "react-icons/fi";
import { about } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal, fadeUp, slideLeft, slideRight } from "../utils/animations";

export default function About() {
  const { dark } = useTheme();

  return (
    <section
      id="about"
      className={`section-padding ${dark ? "" : "light-section-bg"}`}
      style={{ background: dark ? "var(--color-dark-bg)" : undefined }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="section-title">
              About{" "}
              <span style={{ color: "var(--color-accent)" }}>Me</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Get to know my background and what drives me.
            </p>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal variants={slideLeft}>
          <div
            className={`rounded-2xl p-8 mb-14 border ${
              dark
                ? "bg-[#1E293B] border-slate-700"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <p
              className={`text-base leading-relaxed ${
                dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {about.bio}
            </p>
          </div>
        </Reveal>

        {/* Education timeline */}
        <Reveal>
          <h3
            className={`text-xl font-bold mb-8 flex items-center gap-2 ${
              dark ? "text-white" : "text-slate-800"
            }`}
          >
            <FiBookOpen style={{ color: "var(--color-accent)" }} />
            Education
          </h3>
        </Reveal>

        <div className="relative pl-8 border-l-2 border-[var(--color-accent)]/30 space-y-10">
          {about.education.map((edu, i) => (
            <Reveal key={i} variants={slideRight} custom={i}>
              <div className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[2.55rem] top-1 w-4 h-4 rounded-full border-[3px]"
                  style={{
                    borderColor: "var(--color-accent)",
                    background: dark ? "var(--color-dark-bg)" : "var(--color-bg-alt)",
                  }}
                />
                <div
                  className={`rounded-xl p-6 border ${
                    dark
                      ? "bg-[#1E293B] border-slate-700"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <h4
                    className={`font-semibold text-lg mb-1 ${
                      dark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    className={`flex items-center gap-1.5 text-sm mb-1 ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <FiMapPin size={13} />
                    {edu.institution}
                  </p>
                  <span className="tech-pill">{edu.period}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
