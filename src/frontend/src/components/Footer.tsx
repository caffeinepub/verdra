import { Heart, Leaf } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "verdra-app",
  );

  return (
    <footer
      className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "#050f0a",
        borderTop: "1px solid rgba(76,175,80,0.1)",
      }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(76,175,80,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
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

          {/* Tagline */}
          <p
            className="font-body text-sm text-center"
            style={{ color: "rgba(245,241,232,0.4)" }}
          >
            Rooted in Purpose. Connected by Vision.
          </p>

          {/* Links */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 text-xs font-body"
            style={{ color: "rgba(245,241,232,0.4)" }}
          >
            {[
              "Home",
              "Life Cycle",
              "Contribute",
              "Benefits",
              "Expansion Vision",
            ].map((link) => (
              <button
                type="button"
                key={link}
                onClick={() => {
                  const id = link.toLowerCase().replace(/ /g, "-");
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-verdra-leaf transition-colors duration-200"
                style={{ color: "rgba(245,241,232,0.4)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#4CAF50";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,241,232,0.4)";
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body"
          style={{ color: "rgba(245,241,232,0.3)" }}
        >
          <p>© {year} VERDRA. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <Heart
              className="w-3 h-3 fill-current"
              style={{ color: "#4CAF50" }}
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors duration-200"
              style={{ color: "#4CAF50" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
