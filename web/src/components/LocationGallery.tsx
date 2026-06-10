import { motion } from 'framer-motion';

type Location = {
  name: string;
  image: string;
};

type Props = {
  locations: readonly Location[];
};

export default function LocationGallery({ locations }: Props) {
  return (
    <div className="relative">
      <div className="container-wide">
        <div className="flex gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden">
          {locations.map((location, index) => (
            <motion.figure
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative min-w-[240px] flex-shrink-0 overflow-hidden md:min-w-[300px] lg:min-w-[320px]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-ink-soft">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-20">
                <div className="image-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="relative">
                  <span className="eyebrow text-gold-bright">Dubai</span>
                  <h3 className="heading-display mt-1 text-xl text-white md:text-2xl">
                    {location.name}
                  </h3>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}
