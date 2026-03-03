import { Eye, Leaf, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ─── Floating Leaf Particles (lightweight — less dense than WhyVerdraExists) ─── */
interface LeafParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
}

function FloatingLeaves() {
  const [leaves, setLeaves] = useState<LeafParticle[]>([]);

  useEffect(() => {
    const generated: LeafParticle[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 6 + Math.random() * 10,
      duration: 16 + Math.random() * 14,
      delay: Math.random() * 20,
      rotation: Math.random() * 360,
      opacity: 0.12 + Math.random() * 0.22,
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
            aria-hidden="true"
            width={leaf.size}
            height={leaf.size * 1.4}
            viewBox="0 0 20 28"
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

/* ─── Value Card ─── */
interface ValueCardProps {
  icon: React.ReactNode;
  label: string;
  delay: number;
  ocid: string;
}

function ValueCard({ icon, label, delay, ocid }: ValueCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      data-ocid={ocid}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-3 rounded-xl p-4 cursor-default"
      style={{
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: hovered ? "rgba(15,61,46,0.55)" : "rgba(15,61,46,0.40)",
        border: hovered
          ? "1px solid rgba(76,175,80,0.30)"
          : "1px solid rgba(76,175,80,0.15)",
        boxShadow: hovered
          ? "0 0 20px rgba(76,175,80,0.20), 0 8px 24px rgba(0,0,0,0.3)"
          : "0 4px 16px rgba(0,0,0,0.2)",
        transform: isVisible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(28px)",
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease`,
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{
          background: hovered
            ? "linear-gradient(135deg, rgba(30,127,79,0.45), rgba(76,175,80,0.28))"
            : "linear-gradient(135deg, rgba(30,127,79,0.28), rgba(76,175,80,0.15))",
          border: "1px solid rgba(76,175,80,0.25)",
          boxShadow: hovered ? "0 0 14px rgba(76,175,80,0.3)" : "none",
          transition: "all 0.35s ease",
          color: "#4CAF50",
        }}
      >
        {icon}
      </div>
      <span
        className="font-heading font-semibold text-sm text-center leading-tight"
        style={{ color: "#F5F1E8" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Main Component ─── */
export default function AboutVerdraSection() {
  /* Scroll reveal refs */
  const { ref: sectionLabelRef, isVisible: sectionLabelVisible } =
    useScrollReveal({ threshold: 0.2 });
  const { ref: logoRef, isVisible: logoVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { ref: headlineRef, isVisible: headlineVisible } = useScrollReveal({
    threshold: 0.15,
  });
  const { ref: introRef, isVisible: introVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { ref: visionRef, isVisible: visionVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { ref: howRef, isVisible: howVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal({
    threshold: 0.1,
  });

  const steps = [
    {
      num: 1,
      text: "Citizens sponsor a tree.",
      ocid: "about-verdra.how-it-works.item.1",
    },
    {
      num: 2,
      text: "VerdRa plants and maintains the tree in designated public spaces.",
      ocid: "about-verdra.how-it-works.item.2",
    },
    {
      num: 3,
      text: "The tree is geo-tagged, tracked, and connected to the contributor.",
      ocid: "about-verdra.how-it-works.item.3",
    },
  ];

  const values = [
    {
      icon: <Leaf className="w-5 h-5" />,
      label: "Sustainability",
      ocid: "about-verdra.values.item.1",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Transparency",
      ocid: "about-verdra.values.item.2",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Community Ownership",
      ocid: "about-verdra.values.item.3",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Long-Term Impact",
      ocid: "about-verdra.values.item.4",
    },
  ];

  return (
    <>
      {/* Keyframe for logo float */}
      <style>{`
        @keyframes verdra-float {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-14px); }
        }
      `}</style>

      <section
        id="about-verdra"
        data-ocid="about-verdra.section"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0a1a0f 0%, #0F3D2E 40%, #1a1208 80%, #0a0f08 100%)",
        }}
      >
        {/* Ambient green glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 20% 50%, rgba(30,127,79,0.10) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 40%, rgba(76,175,80,0.07) 0%, transparent 60%)",
          }}
        />

        {/* Top & bottom gradient fades for seamless blending */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Floating leaf particles */}
        <FloatingLeaves />

        {/* ─── Section Eyebrow ─── */}
        <div className="relative z-10 pt-28 pb-4 px-4 sm:px-6 flex justify-center">
          <div
            ref={sectionLabelRef as React.RefObject<HTMLDivElement>}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(76,175,80,0.10)",
              border: "1px solid rgba(76,175,80,0.28)",
              opacity: sectionLabelVisible ? 1 : 0,
              transform: sectionLabelVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-verdra-leaf animate-pulse" />
            <span
              className="text-xs font-body font-semibold tracking-widest uppercase"
              style={{ color: "#4CAF50" }}
            >
              Who We Are
            </span>
          </div>
        </div>

        {/* ─── Main Two-Column Grid ─── */}
        <div className="relative z-10 px-4 sm:px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* ════════════════════════════════
                LEFT — Logo Panel
            ════════════════════════════════ */}
            <div
              ref={logoRef as React.RefObject<HTMLDivElement>}
              className="flex items-center justify-center lg:sticky lg:top-28"
              style={{
                opacity: logoVisible ? 1 : 0,
                transform: logoVisible ? "translateX(0)" : "translateX(-40px)",
                transition:
                  "opacity 1.0s cubic-bezier(0.16,1,0.3,1), transform 1.0s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Outer glass panel */}
              <div
                className="relative flex items-center justify-center rounded-3xl p-10 sm:p-14"
                style={{
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  background: "rgba(15,61,46,0.35)",
                  border: "1px solid rgba(76,175,80,0.20)",
                  boxShadow:
                    "0 0 0 1px rgba(76,175,80,0.08), 0 0 60px rgba(76,175,80,0.10), 0 24px 64px rgba(0,0,0,0.5)",
                  minWidth: "240px",
                }}
              >
                {/* Radial ambient glow behind logo */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(76,175,80,0.18) 0%, transparent 70%)",
                  }}
                />

                {/* Corner accent sparkles */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full"
                  style={{
                    background: "#4CAF50",
                    boxShadow: "0 0 10px rgba(76,175,80,0.8)",
                    animation: "pulse-glow 3s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#1E7F4F",
                    boxShadow: "0 0 8px rgba(30,127,79,0.7)",
                    animation: "pulse-glow 3s ease-in-out 1.5s infinite",
                  }}
                />

                {/* Logo image with float animation */}
                <img
                  src="/assets/uploads/Untitled-design-1-1--1.png"
                  alt="VerdRa — Urban Greening Initiative"
                  className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-2xl"
                  style={{
                    animation: "verdra-float 4s ease-in-out infinite alternate",
                    filter: "drop-shadow(0 0 24px rgba(76,175,80,0.35))",
                  }}
                />
              </div>
            </div>

            {/* ════════════════════════════════
                RIGHT — Text Content
            ════════════════════════════════ */}
            <div className="flex flex-col gap-10">
              {/* Section Headline */}
              <div
                ref={headlineRef as React.RefObject<HTMLDivElement>}
                style={{
                  opacity: headlineVisible ? 1 : 0,
                  transform: headlineVisible
                    ? "translateY(0)"
                    : "translateY(28px)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <h2
                  className="font-heading font-bold text-4xl sm:text-5xl tracking-tight leading-tight"
                  style={{ color: "#F5F1E8", letterSpacing: "-0.01em" }}
                >
                  About <span className="gradient-text text-glow">VerdRa</span>
                </h2>
                {/* Subtle divider line */}
                <div
                  className="mt-4 h-px w-24 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(76,175,80,0.6), transparent)",
                  }}
                />
              </div>

              {/* Introductory Paragraph */}
              <div
                ref={introRef as React.RefObject<HTMLDivElement>}
                style={{
                  opacity: introVisible ? 1 : 0,
                  transform: introVisible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
                }}
              >
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "rgba(245,241,232,0.72)" }}
                >
                  VerdRa is a citizen-led urban greening initiative focused on
                  transforming public streets into thriving green corridors.
                  Rooted in purpose and driven by collective responsibility,
                  VerdRa aims to reconnect people with nature — right outside
                  their homes.
                </p>
              </div>

              {/* Vision Block */}
              <div
                ref={visionRef as React.RefObject<HTMLDivElement>}
                data-ocid="about-verdra.vision.card"
                className="rounded-xl p-5"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  background: "rgba(15,61,46,0.30)",
                  borderLeft: "2px solid #4CAF50",
                  border: "1px solid rgba(76,175,80,0.14)",
                  borderLeftWidth: "2px",
                  borderLeftColor: "#4CAF50",
                  opacity: visionVisible ? 1 : 0,
                  transform: visionVisible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
                }}
              >
                <h3
                  className="font-heading font-semibold text-sm tracking-widest uppercase mb-3"
                  style={{ color: "#4CAF50" }}
                >
                  Our Vision
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(245,241,232,0.72)" }}
                >
                  To transform urban landscapes into living ecosystems by
                  empowering citizens to actively participate in restoring
                  greenery — one tree at a time.
                </p>
              </div>

              {/* Mission Block */}
              <div
                ref={missionRef as React.RefObject<HTMLDivElement>}
                data-ocid="about-verdra.mission.card"
                className="rounded-xl p-5"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  background: "rgba(15,61,46,0.30)",
                  border: "1px solid rgba(76,175,80,0.14)",
                  borderLeftWidth: "2px",
                  borderLeftColor: "#4CAF50",
                  opacity: missionVisible ? 1 : 0,
                  transform: missionVisible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.20s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.20s",
                }}
              >
                <h3
                  className="font-heading font-semibold text-sm tracking-widest uppercase mb-3"
                  style={{ color: "#4CAF50" }}
                >
                  Our Mission
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(245,241,232,0.72)" }}
                >
                  VerdRa seeks to plant 1 lakh trees by the end of 2026,
                  beginning in Tirupati and expanding across Andhra Pradesh.
                  Through structured collaboration with local authorities and
                  community members, we aim to make sustainable urban
                  development accessible and participatory.
                </p>
              </div>

              {/* How VerdRa Works Block */}
              <div
                ref={howRef as React.RefObject<HTMLDivElement>}
                style={{
                  opacity: howVisible ? 1 : 0,
                  transform: howVisible ? "translateY(0)" : "translateY(24px)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.10s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.10s",
                }}
              >
                <h3
                  className="font-heading font-semibold text-sm tracking-widest uppercase mb-5"
                  style={{ color: "#4CAF50" }}
                >
                  How VerdRa Works
                </h3>

                <div className="flex flex-col gap-4">
                  {steps.map((step, i) => (
                    <div
                      key={step.num}
                      data-ocid={step.ocid}
                      className="flex items-start gap-4"
                      style={{
                        opacity: howVisible ? 1 : 0,
                        transform: howVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.12}s`,
                      }}
                    >
                      {/* Step number circle */}
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm font-heading"
                        style={{
                          background:
                            "linear-gradient(135deg, #1E7F4F, #4CAF50)",
                          color: "#F5F1E8",
                          boxShadow: "0 0 12px rgba(76,175,80,0.35)",
                          minWidth: "2rem",
                        }}
                      >
                        {step.num}
                      </div>

                      {/* Step text */}
                      <div className="flex flex-col gap-0.5 pt-1">
                        <p
                          className="font-body text-sm leading-relaxed"
                          style={{ color: "rgba(245,241,232,0.80)" }}
                        >
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connector line decoration */}
                <div className="mt-1 ml-3.5 flex flex-col gap-0">
                  {/* Vertical line through steps */}
                </div>
              </div>

              {/* Core Values Block */}
              <div
                ref={valuesRef as React.RefObject<HTMLDivElement>}
                style={{
                  opacity: valuesVisible ? 1 : 0,
                  transform: valuesVisible
                    ? "translateY(0)"
                    : "translateY(24px)",
                  transition:
                    "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.10s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.10s",
                }}
              >
                <h3
                  className="font-heading font-semibold text-sm tracking-widest uppercase mb-5"
                  style={{ color: "#4CAF50" }}
                >
                  Our Core Values
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {values.map((val, i) => (
                    <ValueCard
                      key={val.label}
                      icon={val.icon}
                      label={val.label}
                      delay={i * 80}
                      ocid={val.ocid}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* end right column */}
          </div>
        </div>

        {/* Bottom section divider */}
        <div className="relative z-10 px-4 sm:px-6 pb-4 pt-8">
          <div className="max-w-7xl mx-auto section-divider" />
        </div>
      </section>
    </>
  );
}
