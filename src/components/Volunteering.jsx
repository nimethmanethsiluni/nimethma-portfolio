import { useState, useEffect } from "react";
import { FiCalendar, FiX, FiMaximize2 } from "react-icons/fi";
import { volunteering } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal, fadeUp } from "../utils/animations";

export default function Volunteering() {
  const { dark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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

        <div className="flex flex-wrap justify-center gap-6">
          {volunteering.map((v, i) => (
            <Reveal key={v.id} custom={i} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="card flex flex-col h-full">
                {/* Image */}
                <div
                  className="relative overflow-hidden aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center cursor-pointer group"
                  onClick={() =>
                    setSelectedImage({
                      src: v.image,
                      alt: v.organization,
                      title: `${v.role} - ${v.organization}`,
                    })
                  }
                >
                  <img
                    src={v.image}
                    alt={v.organization}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      const initials = v.organization
                        .split(/[\s,]+/)
                        .filter((w) => w[0] === w[0]?.toUpperCase())
                        .slice(0, 3)
                        .map((w) => w[0])
                        .join("");
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' fill='%23${dark ? '1E293B' : 'E2E8F0'}'%3E%3Crect width='400' height='400'/%3E%3Ctext x='200' y='210' text-anchor='middle' fill='%2314B8A6' font-size='40' font-family='sans-serif'%3E${encodeURIComponent(initials)}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  {/* Expand icon on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-2.5 rounded-full bg-slate-900/80 text-white shadow-lg">
                      <FiMaximize2 size={18} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center text-center flex-1 p-5">
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
            >
              <FiX size={20} />
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
              {selectedImage.title && (
                <p className="text-slate-300 text-sm mt-3 px-4 pb-1 text-center font-medium">
                  {selectedImage.title}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
