import { FiCalendar } from "react-icons/fi";
import { volunteering } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal, fadeUp } from "../utils/animations";

export default function Volunteering() {
  const { dark } = useTheme();

  return (
    <section
      id="volunteering"
      className="section-padding"
      style={{
        background: dark ? "var(--color-dark-surface)" : "var(--color-bg-light)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="section-title">
              Volunteering &{" "}
              <span style={{ color: "var(--color-accent)" }}>Leadership</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Community involvement and leadership experiences.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {volunteering.map((v, i) => (
            <Reveal key={v.id} custom={i}>
              <div className="card flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden h-40 bg-slate-200 dark:bg-slate-700">
                  <img
                    src={v.image}
                    alt={v.organization}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      const initials = v.organization
                        .split(/[\s,]+/)
                        .filter((w) => w[0] === w[0]?.toUpperCase())
                        .slice(0, 3)
                        .map((w) => w[0])
                        .join("");
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='240' fill='%23${dark ? '1E293B' : 'E2E8F0'}'%3E%3Crect width='600' height='240'/%3E%3Ctext x='300' y='130' text-anchor='middle' fill='%2314B8A6' font-size='32' font-family='sans-serif'%3E${encodeURIComponent(initials)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <span
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {v.role}
                  </span>
                  <p
                    className={`text-sm leading-snug flex-1 mb-3 ${
                      dark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {v.organization}
                  </p>
                  <div
                    className={`flex items-center gap-1.5 text-xs ${
                      dark ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    <FiCalendar size={12} />
                    {v.period}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
