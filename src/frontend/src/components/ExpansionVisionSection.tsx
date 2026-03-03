import { ArrowDown } from "lucide-react";
import { useParallax, useScrollReveal } from "../hooks/useScrollReveal";

function MapPanel({
  image,
  title,
  subtitle,
  index,
}: {
  image: string;
  title: string;
  subtitle: string;
  index: number;
}) {
  const { ref: panelRef, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  });
  const parallaxRef = useParallax(0.15);

  return (
    <div
      ref={panelRef}
      className={`reveal ${isVisible ? "visible" : ""} relative rounded-3xl overflow-hidden`}
      style={{
        transitionDelay: `${index * 200}ms`,
        minHeight: "500px",
      }}
    >
      {/* Parallax image */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.6) saturate(1.3)" }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,61,46,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(15,61,46,0.6) 100%)",
        }}
      />

      {/* Green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(76,175,80,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(76,175,80,0.2)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[500px] text-center px-8 py-16">
        {/* Step indicator */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            background: "rgba(76,175,80,0.15)",
            border: "1px solid rgba(76,175,80,0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-verdra-leaf animate-pulse" />
          <span
            className="text-xs font-body font-medium tracking-widest uppercase"
            style={{ color: "#4CAF50" }}
          >
            Phase {index + 1}
          </span>
        </div>

        <h2
          className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 text-glow"
          style={{ color: "#F5F1E8" }}
        >
          {title}
        </h2>

        <p
          className="font-body text-lg max-w-md"
          style={{ color: "rgba(245,241,232,0.65)" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ExpansionVisionSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: arrowRef, isVisible: arrowVisible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section
      id="expansion-vision"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050f0a 0%, #0a1a12 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(15,61,46,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 reveal ${titleVisible ? "visible" : ""}`}
        >
          <p
            className="text-xs font-body font-medium tracking-widest uppercase mb-3"
            style={{ color: "#4CAF50" }}
          >
            Our Vision
          </p>
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "#F5F1E8" }}
          >
            A Green Nation,{" "}
            <span className="gradient-text">One City at a Time</span>
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "rgba(245,241,232,0.6)" }}
          >
            Our expansion plan is rooted in a simple truth: every great movement
            begins locally.
          </p>
        </div>

        {/* Map panels */}
        <div className="flex flex-col gap-8">
          <MapPanel
            image="/assets/generated/verdra-ap-map.dim_900x700.jpg"
            title="Starting in Andhra Pradesh"
            subtitle="Planting the seeds of change in the land of rivers and heritage."
            index={0}
          />

          {/* Arrow connector */}
          <div
            ref={arrowRef}
            className={`reveal ${arrowVisible ? "visible" : ""} flex flex-col items-center gap-2 py-2`}
          >
            <div
              className="h-8 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(76,175,80,0.5), rgba(76,175,80,0.2))",
              }}
            />
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center animate-bounce-subtle"
              style={{
                background: "rgba(76,175,80,0.15)",
                border: "1px solid rgba(76,175,80,0.35)",
                color: "#4CAF50",
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </div>
            <div
              className="h-8 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(76,175,80,0.2), rgba(76,175,80,0.5))",
              }}
            />
          </div>

          <MapPanel
            image="/assets/generated/verdra-india-map.dim_900x700.jpg"
            title="Aiming to green the entire nation"
            subtitle="From the Himalayas to the coasts — a unified vision for a greener India."
            index={1}
          />
        </div>

        {/* Closing statement */}
        <div className="text-center mt-16">
          <p
            className="font-heading font-semibold text-xl sm:text-2xl"
            style={{ color: "rgba(245,241,232,0.5)" }}
          >
            The journey of a thousand miles begins with a{" "}
            <span className="gradient-text font-bold">single tree.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
