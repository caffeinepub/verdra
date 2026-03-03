import { Award, Bell, MapPin, Navigation, Tag } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const benefits = [
  {
    icon: <Tag className="w-7 h-7" />,
    title: "Engraved Donor Nameplate",
    description: "Your name etched permanently on your tree",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: "Geo-Tag Location Tracking",
    description: "Find your tree on the map anytime",
  },
  {
    icon: <Navigation className="w-7 h-7" />,
    title: "Visit Anytime",
    description: "Walk up to your tree and watch it grow",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Contribution Certificate",
    description: "Official certificate of your green legacy",
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "Digital Growth Updates",
    description: "Receive regular updates on your tree's journey",
  },
];

function BenefitCard({
  benefit,
  index,
}: { benefit: (typeof benefits)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " visible" : ""} group glass-card rounded-2xl p-6 transition-all duration-400 cursor-default`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 30px rgba(76,175,80,0.25), 0 20px 40px rgba(0,0,0,0.3)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(76,175,80,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
        (e.currentTarget as HTMLDivElement).style.borderColor = "";
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,127,79,0.3), rgba(76,175,80,0.2))",
          border: "1px solid rgba(76,175,80,0.25)",
          color: "#4CAF50",
        }}
      >
        {benefit.icon}
      </div>

      <h3
        className="font-heading font-semibold text-base mb-2"
        style={{ color: "#F5F1E8" }}
      >
        {benefit.title}
      </h3>
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: "rgba(245,241,232,0.55)" }}
      >
        {benefit.description}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: missionRef, isVisible: missionVisible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="benefits"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050f0a 0%, #0a1a12 50%, #050f0a 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,127,79,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
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
            Your Rewards
          </p>
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4"
            style={{ color: "#F5F1E8" }}
          >
            What You Receive as a{" "}
            <span className="gradient-text">Contributor</span>
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "rgba(245,241,232,0.6)" }}
          >
            Every contribution is honored with meaningful, lasting recognition.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-20">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>

        {/* Mission statement */}
        <div
          id="mission"
          ref={missionRef}
          className={`reveal ${missionVisible ? "visible" : ""} relative rounded-3xl overflow-hidden`}
          style={{
            background:
              "linear-gradient(135deg, rgba(15,61,46,0.8) 0%, rgba(30,127,79,0.4) 50%, rgba(15,61,46,0.8) 100%)",
            border: "1px solid rgba(76,175,80,0.2)",
          }}
        >
          {/* Glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(76,175,80,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 py-16 px-8 sm:px-12 lg:px-20 text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(76,175,80,0.5))",
                }}
              />
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{
                  background: "#4CAF50",
                  boxShadow: "0 0 12px rgba(76,175,80,0.8)",
                }}
              />
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(76,175,80,0.5), transparent)",
                }}
              />
            </div>

            <p
              className="text-xs font-body font-medium tracking-widest uppercase mb-4"
              style={{ color: "#4CAF50" }}
            >
              Our Mission
            </p>

            <h2
              className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-glow"
              style={{ color: "#F5F1E8" }}
            >
              <span className="gradient-text">1 Lakh Trees</span>
              <br />
              by End of 2026
            </h2>

            <p
              className="font-body text-lg max-w-2xl mx-auto"
              style={{ color: "rgba(245,241,232,0.65)" }}
            >
              VerdRa is committed to planting{" "}
              <span className="font-semibold" style={{ color: "#4CAF50" }}>
                100,000 trees
              </span>{" "}
              across urban landscapes by December 2026 — creating a greener,
              healthier future for generations to come.
            </p>

            {/* Progress visual */}
            <div className="mt-10 max-w-md mx-auto">
              <div
                className="flex justify-between text-xs font-body mb-2"
                style={{ color: "rgba(245,241,232,0.5)" }}
              >
                <span>Progress</span>
                <span style={{ color: "#4CAF50" }}>Goal: 1,00,000 trees</span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: "8%",
                    background: "linear-gradient(90deg, #1E7F4F, #4CAF50)",
                    boxShadow: "0 0 10px rgba(76,175,80,0.6)",
                  }}
                />
              </div>
              <p
                className="text-xs font-body mt-2 text-center"
                style={{ color: "rgba(245,241,232,0.4)" }}
              >
                Every tree planted brings us closer to our goal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
