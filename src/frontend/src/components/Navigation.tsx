import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why VerdRa", href: "#why-verdra" },
  { label: "Life Cycle", href: "#life-cycle" },
  { label: "Contribute", href: "#contribute" },
  { label: "Benefits", href: "#benefits" },
  { label: "Expansion Vision", href: "#expansion-vision" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Update active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1E7F4F, #4CAF50)",
                  }}
                >
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div
                  className="absolute inset-0 rounded-full animate-pulse-glow"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(76,175,80,0.3) 0%, transparent 70%)",
                  }}
                />
              </div>
              <span
                className="font-heading font-black text-2xl tracking-widest animate-logo-pulse"
                style={{ color: "#4CAF50", letterSpacing: "0.2em" }}
              >
                VERDRA
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-300 rounded-full group ${
                      isActive
                        ? "text-verdra-leaf"
                        : "text-verdra-beige/80 hover:text-verdra-leaf"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Hover glow bg */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-verdra-leaf/10 shadow-glow-sm"
                          : "opacity-0 group-hover:opacity-100 bg-verdra-leaf/8"
                      }`}
                    />
                    {/* Active underline */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                        style={{
                          background: "#4CAF50",
                          boxShadow: "0 0 8px rgba(76,175,80,0.8)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-verdra-beige/80 hover:text-verdra-leaf transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          role="button"
          tabIndex={0}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMobileOpen(false);
          }}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 glass-card transition-transform duration-400 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <div className="flex items-center gap-2 mb-8">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1E7F4F, #4CAF50)",
                }}
              >
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span
                className="font-heading font-black text-xl tracking-widest"
                style={{ color: "#4CAF50" }}
              >
                VERDRA
              </span>
            </div>
            <div className="section-divider mb-6" />
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-3 rounded-xl font-body font-medium text-base transition-all duration-200 ${
                      isActive
                        ? "text-verdra-leaf bg-verdra-leaf/10 shadow-glow-sm"
                        : "text-verdra-beige/80 hover:text-verdra-leaf hover:bg-verdra-leaf/8"
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-auto">
              <div className="section-divider mb-4" />
              <p className="text-xs font-body text-verdra-beige/40 text-center">
                Rooted in Purpose. Connected by Vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
