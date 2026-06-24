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
    <div ref={containerRef} className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
      <div className="order-2 lg:order-1 lg:sticky lg:top-28">
        <motion.div
          style={{ y: imageY }}
          className="relative aspect-[16/10] max-h-[220px] overflow-hidden sm:max-h-[320px] sm:aspect-[4/3] md:max-h-[420px] md:aspect-[4/5] lg:aspect-[4/3] lg:max-h-[420px] xl:max-h-[460px]"
        >
          <img
            src="/images/location-5.jpg"
            alt="Dubai holiday home managed by Deshco"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="image-scrim absolute inset-0" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="order-1 lg:order-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group border-b border-ink/10 py-7 first:pt-0 last:border-b-0 sm:py-9"
          >
            <div className="grid grid-cols-[2.75rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-5 md:grid-cols-[4.5rem_1fr] md:gap-8">
              <span className="font-display text-2xl leading-none text-gold-muted transition-colors group-hover:text-gold sm:text-3xl md:text-4xl">
                {step.step}
              </span>
              <div>
                <h3 className="heading-display mb-2 text-xl text-ink sm:mb-2.5 sm:text-2xl md:text-[1.65rem]">{step.title}</h3>
                <p className="max-w-md text-[15px] leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
