import { TreePine, Sprout, Leaf, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    icon: <TreePine className="w-6 h-6" />,
    label: 'Sponsor',
    description: 'Choose to sponsor a tree for ₹2,000',
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    label: 'Plant',
    description: 'We plant your tree in Tirupati',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    label: 'Grow',
    description: 'Watch your tree flourish over time',
  },
];

export default function ContributeSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="contribute"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a1a12 0%, #050f0a 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(30,127,79,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center mb-14 reveal ${titleVisible ? 'visible' : ''}`}
        >
          <p className="text-xs font-body font-medium tracking-widest uppercase mb-3" style={{ color: '#4CAF50' }}>
            Take Action
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: '#F5F1E8' }}>
            Adopt a Tree.{' '}
            <span className="gradient-text">Build a Greener Future.</span>
          </h2>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: 'rgba(245,241,232,0.6)' }}>
            Be part of the movement that's transforming Tirupati — and soon, all of India.
          </p>
        </div>

        {/* Main contribution card */}
        <div
          ref={cardRef}
          className={`reveal ${cardVisible ? 'visible' : ''} glass-card rounded-3xl overflow-hidden`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Info */}
            <div className="p-8 lg:p-12">
              {/* Price badge */}
              <div
                className="inline-flex items-baseline gap-1 mb-6 px-5 py-2.5 rounded-2xl"
                style={{
                  background: 'rgba(76,175,80,0.12)',
                  border: '1px solid rgba(76,175,80,0.25)',
                }}
              >
                <span className="font-heading font-black text-4xl" style={{ color: '#4CAF50' }}>₹2,000</span>
                <span className="font-body text-sm" style={{ color: 'rgba(245,241,232,0.6)' }}>/ tree</span>
              </div>

              <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: '#F5F1E8' }}>
                Sponsor a Dwarf Gulmohar
              </h3>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'rgba(245,241,232,0.65)' }}>
                Your contribution plants a Dwarf Gulmohar tree in the streets of{' '}
                <span className="font-semibold" style={{ color: '#4CAF50' }}>Tirupati, Andhra Pradesh</span>.
                Each tree comes with a personalized nameplate, geo-tag, and digital growth updates.
              </p>

              {/* Location badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
                style={{
                  background: 'rgba(107,79,42,0.2)',
                  border: '1px solid rgba(107,79,42,0.35)',
                }}
              >
                <span className="text-xs font-body font-medium" style={{ color: '#c4a06a' }}>
                  📍 Currently planting in Tirupati, AP
                </span>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col gap-3">
                <button
                  disabled
                  className="w-full py-4 rounded-2xl font-heading font-bold text-base tracking-wide cursor-not-allowed relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30,127,79,0.5), rgba(76,175,80,0.4))',
                    color: 'rgba(245,241,232,0.6)',
                    border: '1px solid rgba(76,175,80,0.3)',
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    Contributions Opening Soon
                  </span>
                </button>
                <p className="text-center text-xs font-body" style={{ color: 'rgba(245,241,232,0.4)' }}>
                  Payment functionality is not yet active. Stay tuned for launch.
                </p>
              </div>
            </div>

            {/* Right: Process steps */}
            <div
              className="p-8 lg:p-12 flex flex-col justify-center"
              style={{
                background: 'rgba(15,61,46,0.4)',
                borderLeft: '1px solid rgba(76,175,80,0.1)',
              }}
            >
              <h4 className="font-heading font-semibold text-sm tracking-widest uppercase mb-8" style={{ color: '#4CAF50' }}>
                How It Works
              </h4>

              <div className="flex flex-col gap-0">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Icon + connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(76,175,80,0.15)',
                          border: '1px solid rgba(76,175,80,0.3)',
                          color: '#4CAF50',
                        }}
                      >
                        {step.icon}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-px flex-1 my-2"
                          style={{ background: 'rgba(76,175,80,0.2)', minHeight: '24px' }}
                        />
                      )}
                    </div>

                    {/* Text */}
                    <div className="pb-6">
                      <h5 className="font-heading font-bold text-base mb-1" style={{ color: '#F5F1E8' }}>
                        {step.label}
                      </h5>
                      <p className="font-body text-sm" style={{ color: 'rgba(245,241,232,0.55)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
