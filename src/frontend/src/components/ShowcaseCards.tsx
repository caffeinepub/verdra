import { useScrollReveal } from "../hooks/useScrollReveal";

const cards = [
  {
    image: "/assets/generated/verdra-urban-green-street.dim_1200x800.jpg",
    tagline: "Streets Transformed by Nature",
    description: "Urban corridors reimagined as living canopies of green.",
  },
  {
    image: "/assets/generated/verdra-people-nature.dim_1200x800.jpg",
    tagline: "Communities Growing Together",
    description: "People and nature thriving side by side in the city.",
  },
  {
    image: "/assets/generated/verdra-transformation.dim_1200x800.jpg",
    tagline: "From Concrete to Canopy",
    description: "Witnessing the breathtaking power of environmental change.",
  },
];

function ShowcaseCard({
  card,
  index,
}: { card: (typeof cards)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " visible" : ""} group relative overflow-hidden rounded-2xl cursor-pointer`}
      style={{
        transitionDelay: `${index * 150}ms`,
        aspectRatio: "4/3",
      }}
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.tagline}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{ filter: "brightness(0.75) saturate(1.1)" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(76,175,80,0.4), 0 0 30px rgba(76,175,80,0.2)",
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Tagline pill */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
          style={{
            background: "rgba(76,175,80,0.2)",
            border: "1px solid rgba(76,175,80,0.35)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-verdra-leaf" />
          <span
            className="text-xs font-heading font-semibold tracking-wider uppercase"
            style={{ color: "#4CAF50" }}
          >
            {card.tagline}
          </span>
        </div>
        <p
          className="font-body text-sm"
          style={{ color: "rgba(245,241,232,0.7)" }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function ShowcaseCards() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #050f0a 0%, #0a1a12 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 reveal ${titleVisible ? "visible" : ""}`}
        >
          <p
            className="text-xs font-body font-medium tracking-widest uppercase mb-3"
            style={{ color: "#4CAF50" }}
          >
            Our Impact
          </p>
          <h2
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "#F5F1E8" }}
          >
            Transforming Urban Landscapes
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <ShowcaseCard key={card.tagline} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
