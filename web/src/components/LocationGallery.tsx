import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Location = {
  name: string;
  image: string;
};

type Props = {
  locations: readonly Location[];
};

export default function LocationGallery({ locations }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  const opacity = useTransform(scrollXProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6]);

  return (
    <div className="relative">
      <motion.div
        ref={containerRef}
        style={{ opacity }}
        className="flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {locations.map((location, index) => (
          <motion.figure
            key={location.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative min-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl md:min-w-[360px]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-6 pt-16">
              <span className="text-xs font-medium tracking-widest text-gold uppercase">
                Dubai
              </span>
              <h3 className="heading-display mt-1 text-2xl text-white">{location.name}</h3>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}
