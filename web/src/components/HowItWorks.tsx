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

  const imageY = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);

  return (
    <div ref={containerRef} className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div className="lg:sticky lg:top-28">
        <motion.div
          style={{ y: imageY }}
          className="relative max-h-[420px] overflow-hidden md:max-h-none md:aspect-[4/5]"
        >
          <img
            src="/images/location-5.jpg"
            alt="Dubai holiday home managed by Deshco"
            className="h-full min-h-[280px] w-full object-cover object-center"
            loading="lazy"
          />
          <div className="image-scrim absolute inset-0" aria-hidden="true" />
        </motion.div>
      </div>

      <div>
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group border-b border-ink/10 py-9 first:pt-0 last:border-b-0"
          >
            <div className="grid grid-cols-[3.5rem_1fr] gap-5 md:grid-cols-[4.5rem_1fr] md:gap-8">
              <span className="font-display text-3xl leading-none text-gold-muted transition-colors group-hover:text-gold md:text-4xl">
                {step.step}
              </span>
              <div>
                <h3 className="heading-display mb-2.5 text-2xl text-ink md:text-[1.65rem]">{step.title}</h3>
                <p className="max-w-md text-[15px] leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
