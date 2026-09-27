import { FiDownload } from "react-icons/fi";
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
              Download my curriculum vitae.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-center">
            <a href={personalInfo.cvPath} download className="btn-primary">
              <FiDownload size={16} />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
