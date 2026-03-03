import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Leaf {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  drift: number;
  opacity: number;
}

function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generated: Leaf[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 8 + Math.random() * 16,
      duration: 10 + Math.random() * 14,
      delay: Math.random() * 12,
      rotation: Math.random() * 360,
      drift: (Math.random() - 0.5) * 120,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setLeaves(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute bottom-0"
          style={{
            left: `${leaf.x}%`,
            animation: `float-leaf ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.4}
            viewBox="0 0 20 28"
            aria-hidden="true"
            style={{
              opacity: leaf.opacity,
              transform: `rotate(${leaf.rotation}deg)`,
            }}
          >
            <path
              d="M10 2 C10 2, 18 8, 18 16 C18 22, 14 26, 10 26 C6 26, 2 22, 2 16 C2 8, 10 2, 10 2Z"
              fill="#4CAF50"
            />
            <path
              d="M10 4 L10 24"
              stroke="#1E7F4F"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;

  const handleScrollDown = () => {
    const el = document.getElementById("life-cycle");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const lightRays = [
    { pos: 15, opacity: 0.06, skew: -5, blur: 8, rayWidth: 20 },
    { pos: 35, opacity: 0.08, skew: -2, blur: 8, rayWidth: 30 },
    { pos: 55, opacity: 0.1, skew: 1, blur: 8, rayWidth: 40 },
    { pos: 75, opacity: 0.12, skew: 4, blur: 8, rayWidth: 50 },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050f0a 0%, #0F3D2E 60%, #0a2a1e 100%)",
      }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
      >
        <img
          src="/assets/generated/hero-bg-lush-green.dim_1920x1080.jpg"
          alt="Cinematic forest background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45) saturate(1.2)" }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,127,79,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {lightRays.map((ray, i) => (
          <div
            key={ray.pos}
            className="absolute top-0 bottom-0 animate-light-ray"
            style={{
              left: `${ray.pos}%`,
              width: `${ray.rayWidth}px`,
              background: `linear-gradient(180deg, rgba(76,175,80,0.0) 0%, rgba(76,175,80,${ray.opacity}) 30%, rgba(76,175,80,0.0) 100%)`,
              animationDelay: `${i * 1.2}s`,
              transform: `skewX(${ray.skew}deg)`,
              filter: `blur(${ray.blur}px)`,
            }}
          />
        ))}
      </div>

      {/* Floating leaves */}
      <FloatingLeaves />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 opacity-0 animate-fade-in delay-100"
          style={{
            background: "rgba(76,175,80,0.12)",
            border: "1px solid rgba(76,175,80,0.3)",
            animationFillMode: "forwards",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-verdra-leaf animate-pulse" />
          <span
            className="text-xs font-body font-medium tracking-widest uppercase"
            style={{ color: "#4CAF50" }}
          >
            Urban Greening Initiative
          </span>
        </div>

        {/* Headline — Cormorant Garamond display font */}
        <h1
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-6 opacity-0 animate-fade-in-up delay-200"
          style={{
            color: "#F5F1E8",
            animationFillMode: "forwards",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            letterSpacing: "-0.01em",
          }}
        >
          Rooted in{" "}
          <span className="gradient-text text-glow italic">Purpose.</span>
          <br />
          Connected by{" "}
          <span className="gradient-text text-glow italic">Vision.</span>
        </h1>

        {/* Subheadline — Lora serif font */}
        <p
          className="font-serif font-light text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-400"
          style={{
            color: "rgba(245,241,232,0.75)",
            animationFillMode: "forwards",
            lineHeight: "1.75",
            letterSpacing: "0.01em",
          }}
        >
          Transforming streets into living green corridors —{" "}
          <em className="font-medium not-italic" style={{ color: "#4CAF50" }}>
            one tree at a time.
          </em>
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-600"
          style={{ animationFillMode: "forwards" }}
        >
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contribute")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1E7F4F, #4CAF50)",
              color: "#F5F1E8",
              boxShadow:
                "0 0 20px rgba(76,175,80,0.4), 0 4px 20px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 35px rgba(76,175,80,0.6), 0 4px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 20px rgba(76,175,80,0.4), 0 4px 20px rgba(0,0,0,0.3)";
            }}
          >
            Adopt a Tree
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("life-cycle")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 rounded-full font-heading font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(245,241,232,0.08)",
              color: "#F5F1E8",
              border: "1px solid rgba(245,241,232,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(245,241,232,0.14)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(76,175,80,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(245,241,232,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(245,241,232,0.2)";
            }}
          >
            Explore Our Mission
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-800 animate-bounce-subtle"
        style={{
          animationFillMode: "forwards",
          color: "rgba(245,241,232,0.5)",
        }}
      >
        <span className="text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
}
