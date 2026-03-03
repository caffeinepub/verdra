import { useEffect, useRef, useState } from 'react';
import { Users, Wind, TreePine } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Floating Leaf Particle ─── */
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
    const generated: LeafParticle[] = Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 7 + Math.random() * 12,
      duration: 14 + Math.random() * 16,
      delay: Math.random() * 18,
      rotation: Math.random() * 360,
      opacity: 0.18 + Math.random() * 0.32,
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
            style={{ opacity: leaf.opacity, transform: `rotate(${leaf.rotation}deg)` }}
          >
            <path
              d="M10 2 C10 2, 18 8, 18 16 C18 22, 14 26, 10 26 C6 26, 2 22, 2 16 C2 8, 10 2, 10 2Z"
              fill="#4CAF50"
            />
            <path d="M10 4 L10 24" stroke="#1E7F4F" strokeWidth="1" fill="none" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ─── Light Rays ─── */
function LightRays() {
  const rays = [
    { pos: 10, opacity: 0.05, skew: -6, width: 18 },
    { pos: 28, opacity: 0.07, skew: -2, width: 28 },
    { pos: 50, opacity: 0.09, skew: 1, width: 38 },
    { pos: 70, opacity: 0.07, skew: 4, width: 24 },
    { pos: 88, opacity: 0.05, skew: 6, width: 16 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rays.map((ray, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 animate-light-ray"
          style={{
            left: `${ray.pos}%`,
            width: `${ray.width}px`,
            background: `linear-gradient(180deg, rgba(76,175,80,0.0) 0%, rgba(76,175,80,${ray.opacity}) 35%, rgba(76,175,80,0.0) 100%)`,
            animationDelay: `${i * 0.9}s`,
            transform: `skewX(${ray.skew}deg)`,
            filter: 'blur(10px)',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Icon Card ─── */
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  delay: number;
}

function IconCard({ icon, title, subtitle, description, delay }: IconCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-start p-8 rounded-2xl cursor-default"
      style={{
        background: hovered
          ? 'rgba(15, 61, 46, 0.72)'
          : 'rgba(15, 61, 46, 0.52)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: hovered
          ? '1px solid rgba(76, 175, 80, 0.35)'
          : '1px solid rgba(76, 175, 80, 0.15)',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(76,175,80,0.15), inset 0 1px 0 rgba(76,175,80,0.12)'
          : '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(76,175,80,0.08)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {/* Icon container */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, rgba(30,127,79,0.5), rgba(76,175,80,0.3))'
            : 'linear-gradient(135deg, rgba(30,127,79,0.3), rgba(76,175,80,0.15))',
          border: '1px solid rgba(76,175,80,0.25)',
          boxShadow: hovered ? '0 0 20px rgba(76,175,80,0.25)' : 'none',
          transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ color: '#4CAF50' }}>{icon}</div>
      </div>

      {/* Title */}
      <h4
        className="font-heading font-bold text-lg mb-1 tracking-wide"
        style={{ color: '#F5F1E8' }}
      >
        {title}
      </h4>

      {/* Subtitle */}
      <p
        className="font-body text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: '#4CAF50' }}
      >
        {subtitle}
      </p>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed"
        style={{ color: 'rgba(245,241,232,0.65)' }}
      >
        {description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-8 right-8 h-px rounded-full"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, transparent, rgba(76,175,80,0.5), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(76,175,80,0.15), transparent)',
          transition: 'all 0.45s ease',
        }}
      />
    </div>
  );
}

/* ─── Main Component ─── */
export default function WhyVerdraExists() {
  /* Scroll reveal refs */
  const { ref: headlineRef, isVisible: headlineVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: paraRef, isVisible: paraVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: purposeTitleRef, isVisible: purposeTitleVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: purposeTextRef, isVisible: purposeTextVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: moreTitleRef, isVisible: moreTitleVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: closingRef, isVisible: closingVisible } = useScrollReveal({ threshold: 0.3 });

  /* Cinematic closing line stagger */
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  const closingObserverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = closingObserverRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLine1Visible(true), 100);
          setTimeout(() => setLine2Visible(true), 600);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const purposePoints = [
    'To reconnect people with their streets.',
    'To restore shade, beauty, and ecological balance.',
    'To make urban greening a shared responsibility.',
    'To turn pride into participation.',
  ];

  return (
    <section
      id="why-verdra"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050f0a 0%, #071a10 40%, #0a2a1e 70%, #050f0a 100%)' }}
    >
      {/* Animated greenery background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/assets/generated/verdra-urban-green-street.dim_1200x800.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.12) saturate(1.4)',
          }}
        />
        {/* Radial green glow overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(30,127,79,0.12) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 50% 80%, rgba(76,175,80,0.08) 0%, transparent 60%)',
          }}
        />
        {/* Top and bottom gradient fades */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Light rays */}
      <LightRays />

      {/* Floating leaves */}
      <FloatingLeaves />

      {/* ═══════════════════════════════════════════════════
          BLOCK 1 — Bold Headline + Urban Crisis Paragraph
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        {/* Eyebrow label */}
        <div
          ref={headlineRef as React.RefObject<HTMLDivElement>}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10"
          style={{
            background: 'rgba(76,175,80,0.10)',
            border: '1px solid rgba(76,175,80,0.28)',
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-verdra-leaf animate-pulse" />
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase"
            style={{ color: '#4CAF50' }}
          >
            Why VerdRa Exists
          </span>
        </div>

        {/* Main headline */}
        <h2
          className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
          style={{
            color: '#F5F1E8',
            letterSpacing: '-0.01em',
            textShadow: '0 2px 40px rgba(0,0,0,0.6)',
            opacity: headlineVisible ? 1 : 0,
            transform: headlineVisible ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s',
          }}
        >
          Cities Are Growing.{' '}
          <span className="gradient-text text-glow italic">Nature Is Shrinking.</span>
        </h2>

        {/* Divider */}
        <div
          className="w-16 h-px mx-auto mb-10 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(76,175,80,0.6), transparent)',
            opacity: headlineVisible ? 1 : 0,
            transition: 'opacity 1s ease 0.3s',
          }}
        />

        {/* Urban crisis paragraph */}
        <div
          ref={paraRef as React.RefObject<HTMLDivElement>}
          style={{
            opacity: paraVisible ? 1 : 0,
            transform: paraVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p
            className="font-body text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: 'rgba(245,241,232,0.72)' }}
          >
            Urban expansion is accelerating at an unprecedented pace. Streets are losing their shade.
            Heat levels are rising, making cities hostile to life. Dust and pollution are increasing
            with every passing season. Citizens feel the urgency — they want to act, to contribute,
            to make a difference — but they lack a structured platform to channel that energy into
            lasting change.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BLOCK 2 — "Our Purpose" Split Layout
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 py-20 px-4 sm:px-6">
        {/* Section label */}
        <div
          ref={purposeTitleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: purposeTitleVisible ? 1 : 0,
            transform: purposeTitleVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase"
            style={{ color: '#4CAF50' }}
          >
            Our Purpose
          </span>
          <h3
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ color: '#F5F1E8', letterSpacing: '-0.01em' }}
          >
            Rooted in Responsibility
          </h3>
        </div>

        {/* Split layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px rgba(76,175,80,0.25), 0 0 40px rgba(76,175,80,0.12), 0 24px 60px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src="/assets/generated/why-verdra-purpose.dim_900x600.png"
                alt="A child watching a tree being planted — the future of urban greening"
                className="w-full h-auto object-cover"
                style={{ filter: 'brightness(0.92) saturate(1.1)' }}
              />
              {/* Subtle green overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{
                  background: 'linear-gradient(to top, rgba(15,61,46,0.6), transparent)',
                }}
              />
              {/* Corner accent */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(15,61,46,0.75)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(76,175,80,0.3)',
                }}
              >
                <span
                  className="text-xs font-body font-semibold tracking-widest uppercase"
                  style={{ color: '#4CAF50' }}
                >
                  The Vision
                </span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            ref={purposeTextRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: purposeTextVisible ? 1 : 0,
              transform: purposeTextVisible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: 'rgba(245,241,232,0.65)' }}
            >
              VerdRa was born from a simple but powerful belief — that every street deserves shade,
              every city deserves beauty, and every citizen deserves a role in shaping the world
              they live in.
            </p>

            <ul className="space-y-5">
              {purposePoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4"
                  style={{
                    opacity: purposeTextVisible ? 1 : 0,
                    transform: purposeTextVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.1}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.1}s`,
                  }}
                >
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #4CAF50, #1E7F4F)',
                      boxShadow: '0 0 8px rgba(76,175,80,0.5)',
                    }}
                  />
                  <span
                    className="font-body text-base leading-relaxed"
                    style={{ color: 'rgba(245,241,232,0.80)' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BLOCK 3 — "More Than Just Planting Trees" Cards
      ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 py-20 px-4 sm:px-6">
        {/* Section label */}
        <div
          ref={moreTitleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-16"
          style={{
            opacity: moreTitleVisible ? 1 : 0,
            transform: moreTitleVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span
            className="text-xs font-body font-semibold tracking-widest uppercase"
            style={{ color: '#4CAF50' }}
          >
            The Deeper Mission
          </span>
          <h3
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ color: '#F5F1E8', letterSpacing: '-0.01em' }}
          >
            More Than Just Planting Trees
          </h3>
        </div>

        {/* Three icon cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <IconCard
            icon={<Users className="w-6 h-6" />}
            title="Community Ownership"
            subtitle="Civic Connection"
            description="Every tree planted connects a citizen to their city in a tangible, lasting way. When people invest in their streets, they invest in each other."
            delay={0}
          />
          <IconCard
            icon={<Wind className="w-6 h-6" />}
            title="Climate Responsibility"
            subtitle="Environmental Impact"
            description="Urban trees reduce ambient heat, filter particulate matter, and improve air quality — turning streets from heat traps into breathing corridors."
            delay={120}
          />
          <IconCard
            icon={<TreePine className="w-6 h-6" />}
            title="Legacy Creation"
            subtitle="Generational Impact"
            description="Trees planted today will stand for decades. They are living monuments to the people who chose to act — a gift to every generation that follows."
            delay={240}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BLOCK 4 — Cinematic Closing Statement
      ═══════════════════════════════════════════════════ */}
      <div
        ref={closingObserverRef}
        className="relative z-10 py-28 px-4 sm:px-6 text-center"
      >
        {/* Ambient glow behind text */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(30,127,79,0.10) 0%, transparent 70%)',
          }}
        />

        <div
          ref={closingRef as React.RefObject<HTMLDivElement>}
          className="relative max-w-3xl mx-auto"
        >
          {/* Decorative top line */}
          <div
            className="w-12 h-px mx-auto mb-12 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(76,175,80,0.5), transparent)',
              opacity: line1Visible ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          />

          {/* Line 1 */}
          <p
            className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            style={{
              color: 'rgba(245,241,232,0.90)',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 40px rgba(0,0,0,0.5)',
              opacity: line1Visible ? 1 : 0,
              transform: line1Visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            This is not a project.
          </p>

          {/* Line 2 */}
          <p
            className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{
              letterSpacing: '-0.01em',
              textShadow: '0 0 40px rgba(76,175,80,0.4), 0 2px 40px rgba(0,0,0,0.5)',
              opacity: line2Visible ? 1 : 0,
              transform: line2Visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span className="gradient-text text-glow italic">
              This is a generational commitment.
            </span>
          </p>

          {/* Decorative bottom line */}
          <div
            className="w-12 h-px mx-auto mt-12 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(76,175,80,0.5), transparent)',
              opacity: line2Visible ? 1 : 0,
              transition: 'opacity 1s ease 0.4s',
            }}
          />
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="relative z-10 px-4 sm:px-6 pb-2">
        <div className="max-w-6xl mx-auto section-divider" />
      </div>
    </section>
  );
}
