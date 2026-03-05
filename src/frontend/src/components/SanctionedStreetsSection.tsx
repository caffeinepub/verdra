import { MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const streets = [
  "Gollavanigunta 60ft Road",
  "Hero Honda Road",
  "Poolavanigunta 80ft Road",
  "Ankura Road",
  "Thondaman Chakravarthy Road",
  "Korlagunta Main Road",
  "DBR Road",
  "DBR Chinthalachenu Link Road",
  "Chinthalachenu 80ft Road",
  "Panguluri Seethamma Marg",
  "Gangammagudi Road",
  "Godha Devi Road",
  "Konkachenaih Gunta",
  "Blue Rock Opp 80ft Road",
  "Opposite Bharath Petrol Bunk",
  "Tirumala Bye Pass Road",
  "Sathyanarayana Puram",
  "Guest Line Days & L Shape Road",
  "Akkarampalli 40ft Road",
  "Khadhi Colony 40ft Road",
  "Opp. DMart Sachivalayam Road",
  "Marasa Sarovar 40ft Road",
];

function StreetCard({ name, index }: { name: string; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " visible" : ""} glass-card rounded-2xl p-5 relative cursor-default transition-all duration-400`}
      style={{
        transitionDelay: `${Math.min(index, 11) * 60}ms`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow =
          "0 0 20px rgba(76,175,80,0.2), 0 12px 30px rgba(0,0,0,0.3)";
        el.style.borderColor = "rgba(76,175,80,0.35)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "";
        el.style.borderColor = "";
      }}
    >
      {/* Street number badge */}
      <span
        className="absolute top-3 right-4 text-xs font-body font-medium"
        style={{ color: "rgba(76,175,80,0.4)" }}
      >
        #{index + 1}
      </span>

      {/* Icon row */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,127,79,0.3), rgba(76,175,80,0.2))",
            border: "1px solid rgba(76,175,80,0.25)",
          }}
        >
          <MapPin className="w-5 h-5" style={{ color: "#4CAF50" }} />
        </div>

        {/* Street name */}
        <h3
          className="font-heading font-semibold text-sm leading-snug flex-1 pr-5"
          style={{ color: "#F5F1E8" }}
        >
          {name}
        </h3>
      </div>

      {/* Subtle green accent line */}
      <div
        className="h-0.5 w-8 rounded-full"
        style={{
          background: "linear-gradient(90deg, #4CAF50, transparent)",
        }}
      />
    </div>
  );
}

export default function SanctionedStreetsSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="sanctioned-streets"
      data-ocid="sanctioned-streets.section"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050f0a 0%, #0a1a12 50%, #050f0a 100%)",
      }}
    >
      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(30,127,79,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Left ambient glow */}
      <div
        className="absolute top-1/4 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,127,79,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Right ambient glow */}
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(76,175,80,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle grid/map pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(76,175,80,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76,175,80,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 reveal ${titleVisible ? "visible" : ""}`}
        >
          <p
            className="text-xs font-body font-medium tracking-widest uppercase mb-3"
            style={{ color: "#4CAF50" }}
          >
            Tirupati Urban Greening
          </p>

          <h2
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "#F5F1E8" }}
          >
            Currently <span className="gradient-text">Sanctioned Streets</span>
          </h2>

          <p
            className="font-body text-base max-w-xl mx-auto mb-6"
            style={{ color: "rgba(245,241,232,0.6)" }}
          >
            Approved plantation streets under the VerdRa urban greening
            initiative in Tirupati.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-px flex-1 max-w-[100px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(76,175,80,0.5))",
              }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#4CAF50",
                boxShadow: "0 0 8px rgba(76,175,80,0.8)",
              }}
            />
            <div
              className="h-px flex-1 max-w-[100px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(76,175,80,0.5), transparent)",
              }}
            />
          </div>
        </div>

        {/* Streets grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {streets.map((street, i) => (
            <StreetCard key={street} name={street} index={i} />
          ))}
        </div>

        {/* Footer count badge */}
        <div
          className={`reveal ${titleVisible ? "visible" : ""} mt-12 text-center`}
          style={{ transitionDelay: "700ms" }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,61,46,0.8), rgba(30,127,79,0.4))",
              border: "1px solid rgba(76,175,80,0.2)",
              boxShadow: "0 0 20px rgba(76,175,80,0.08)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: "#4CAF50",
                boxShadow: "0 0 8px rgba(76,175,80,0.8)",
              }}
            />
            <span
              className="font-body text-sm font-medium"
              style={{ color: "rgba(245,241,232,0.75)" }}
            >
              <span
                className="font-heading font-bold text-base"
                style={{ color: "#4CAF50" }}
              >
                {streets.length}
              </span>{" "}
              streets approved for greening in Tirupati
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
