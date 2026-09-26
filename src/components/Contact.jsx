import { useState } from "react";
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data";
import { useTheme } from "../context/ThemeContext";
import { Reveal, slideLeft, slideRight } from "../utils/animations";

export default function Contact() {
  const { dark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire to Formspree / EmailJS here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border ${
    dark
      ? "bg-[#0F172A] border-slate-700 text-white placeholder-slate-500 focus:border-[var(--color-accent)]"
      : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-[var(--color-accent)] focus:bg-white"
  }`;

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: dark ? "var(--color-dark-surface)" : "var(--color-bg-light)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="section-title">
              Get In{" "}
              <span style={{ color: "var(--color-accent)" }}>Touch</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Have a question or want to connect? Feel free to reach out.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal variants={slideLeft} className="lg:col-span-2">
            <div className="space-y-6">
              {[
                {
                  icon: <FiMail size={20} />,
                  label: "Email",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: <FiMapPin size={20} />,
                  label: "Location",
                  value: personalInfo.location,
                  href: null,
                },
                {
                  icon: <FiGithub size={20} />,
                  label: "GitHub",
                  value: "github.com/nimethma",
                  href: personalInfo.github,
                },
                {
                  icon: <FiLinkedin size={20} />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/nimethma",
                  href: personalInfo.linkedin,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: "rgba(20, 184, 166, 0.1)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider mb-0.5 ${
                        dark ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium hover:underline ${
                          dark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`text-sm font-medium ${
                          dark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal variants={slideRight} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl p-8 border ${
                dark
                  ? "bg-[#1E293B] border-slate-700"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="grid gap-4 sm:grid-cols-2 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-xs font-medium mb-1.5 ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-xs font-medium mb-1.5 ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-xs font-medium mb-1.5 ${
                    dark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hi Nimethma, I'd like to..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <FiSend size={16} />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
