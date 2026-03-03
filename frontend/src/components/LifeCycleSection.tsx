import { useScrollReveal } from '../hooks/useScrollReveal';

const stages = [
  {
    image: '/assets/generated/verdra-lifecycle-1-seed.dim_400x400.png',
    stage: 'Seed',
    number: '01',
    description: 'A tiny seed holds the promise of a mighty tree.',
  },
  {
    image: '/assets/generated/verdra-lifecycle-2-sprout.dim_400x400.png',
    stage: 'Sprouting Seedling',
    number: '02',
    description: 'The first green shoots break through the soil.',
  },
  {
    image: '/assets/generated/verdra-lifecycle-3-sapling.dim_400x400.png',
    stage: 'Young Sapling',
    number: '03',
    description: 'Roots deepen as the sapling reaches for light.',
  },
  {
    image: '/assets/generated/verdra-lifecycle-4-growing.dim_400x400.png',
    stage: 'Growing Plant',
    number: '04',
    description: 'Leaves unfurl, drawing life from sun and rain.',
  },
  {
    image: '/assets/generated/verdra-lifecycle-5-mature.dim_400x400.png',
    stage: 'Maturing Tree',
    number: '05',
    description: 'Branches spread wide, providing shade and shelter.',
  },
  {
    image: '/assets/generated/verdra-lifecycle-6-flowering.dim_400x400.png',
    stage: 'Fully Grown',
    number: '06',
    description: 'Vibrant blooms crown the tree in full glory.',
  },
];

function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="reveal group flex flex-col items-center text-center"
      style={{
        transitionDelay: `${index * 100}ms`,
        ...(isVisible ? { opacity: 1, transform: 'translateY(0)' } : {}),
      }}
    >
      {/* Image container */}
      <div
        className="relative w-full max-w-[180px] aspect-square mb-4 rounded-2xl overflow-hidden transition-all duration-400 group-hover:scale-105"
        style={{
          background: 'rgba(15,61,46,0.6)',
          border: '1px solid rgba(76,175,80,0.15)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 25px rgba(76,175,80,0.35), 0 0 50px rgba(76,175,80,0.1)';
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(76,175,80,0.4)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(76,175,80,0.15)';
        }}
      >
        <img
          src={stage.image}
          alt={stage.stage}
          className="w-full h-full object-contain p-4 transition-transform duration-400 group-hover:scale-110"
        />
        {/* Stage number badge */}
        <div
          className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(76,175,80,0.2)',
            border: '1px solid rgba(76,175,80,0.4)',
          }}
        >
          <span className="text-xs font-heading font-bold" style={{ color: '#4CAF50' }}>
            {stage.number}
          </span>
        </div>
      </div>

      {/* Stage name */}
      <h3 className="font-heading font-semibold text-sm sm:text-base mb-1.5" style={{ color: '#F5F1E8' }}>
        {stage.stage}
      </h3>

      {/* Description */}
      <p className="font-body text-xs sm:text-sm leading-relaxed" style={{ color: 'rgba(245,241,232,0.55)' }}>
        {stage.description}
      </p>
    </div>
  );
}

export default function LifeCycleSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="life-cycle"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1a12 0%, #0F3D2E 50%, #0a1a12 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(30,127,79,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 reveal ${titleVisible ? 'visible' : ''}`}
        >
          <p className="text-xs font-body font-medium tracking-widest uppercase mb-3" style={{ color: '#4CAF50' }}>
            Nature's Journey
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{ color: '#F5F1E8' }}>
            Life Cycle of the{' '}
            <span className="gradient-text">Dwarf Gulmohar</span>
          </h2>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(245,241,232,0.6)' }}>
            From a single seed to a magnificent flowering tree — witness the remarkable journey of nature's artistry.
          </p>
        </div>

        {/* Connector line (desktop) */}
        <div className="hidden lg:block relative mb-4">
          <div
            className="absolute top-[90px] left-[calc(100%/12)] right-[calc(100%/12)] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(76,175,80,0.3), rgba(76,175,80,0.5), rgba(76,175,80,0.3), transparent)' }}
          />
        </div>

        {/* Stages grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
