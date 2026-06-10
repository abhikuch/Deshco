import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Step = {
  step: string;
  title: string;
  description: string;
};

type Props = {
  steps: readonly Step[];
};

export default function HowItWorks({ steps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <div ref={containerRef} className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
      <div className="lg:sticky lg:top-32">
        <motion.div style={{ y: imageY }} className="overflow-hidden rounded-2xl">
          <img
            src="/images/how-it-works.png"
            alt="Luxury interior"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group border-b border-ink/10 py-10 first:pt-0 last:border-b-0"
          >
            <div className="flex items-start gap-6">
              <span className="heading-display text-4xl text-gold/40 transition-colors group-hover:text-gold md:text-5xl">
                {step.step}
              </span>
              <div>
                <h3 className="heading-display mb-3 text-2xl md:text-3xl">{step.title}</h3>
                <p className="max-w-md leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
