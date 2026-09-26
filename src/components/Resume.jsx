import { FiDownload, FiFileText } from "react-icons/fi";
import { personalInfo } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal } from "../utils/animations";

export default function Resume() {
  const { dark } = useTheme();

  return (
    <section
      id="resume"
      className="section-padding"
      style={{
        background: dark ? "var(--color-dark-bg)" : "var(--color-bg-alt)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="section-title">
              My{" "}
              <span style={{ color: "var(--color-accent)" }}>Resume</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Download or preview my curriculum vitae.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className={`rounded-2xl border overflow-hidden ${
              dark ? "bg-[#1E293B] border-slate-700" : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            {/* PDF Preview */}
            <div className="relative w-full" style={{ height: "600px" }}>
              <iframe
                src={personalInfo.cvPath}
                title="Nimethma Nethsiluni CV"
                className="w-full h-full"
                style={{ border: "none" }}
              />
              {/* Fallback overlay if PDF doesn't load */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none ${
                  dark ? "bg-[#1E293B]/80" : "bg-white/80"
                }`}
                style={{ zIndex: 0 }}
              >
                <FiFileText
                  size={48}
                  style={{ color: "var(--color-accent)" }}
                />
                <p
                  className={`text-sm ${
                    dark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  PDF preview will appear here
                </p>
              </div>
            </div>

            {/* Download button */}
            <div
              className={`p-6 flex justify-center border-t ${
                dark ? "border-slate-700" : "border-slate-200"
              }`}
            >
              <a href={personalInfo.cvPath} download className="btn-primary">
                <FiDownload size={16} />
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
