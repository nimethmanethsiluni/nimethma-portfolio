import { motion } from "framer-motion";
import { skills } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal, fadeUp, stagger } from "../utils/animations";

const categoryIcons = {
  "Programming Languages": "💻",
  "Frameworks & Libraries": "⚙️",
  "Project Management & Design Tools": "📋",
  "Data & Analytics": "📊",
  "Version Control & Tools": "🔧",
};

export default function Skills() {
  const { dark } = useTheme();

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: dark ? "var(--color-dark-surface)" : "var(--color-bg-light)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="section-title">
              Technical{" "}
              <span style={{ color: "var(--color-accent)" }}>Skills</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Tools and technologies I work with.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <Reveal key={group.category} custom={gi}>
              <div
                className={`rounded-2xl p-6 border h-full ${
                  dark
                    ? "bg-[#0F172A] border-slate-700"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <h3
                  className={`text-base font-bold mb-4 flex items-center gap-2 ${
                    dark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <span className="text-lg">
                    {categoryIcons[group.category] || "🔹"}
                  </span>
                  {group.category}
                </h3>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={fadeUp}
                      className="tech-pill"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
