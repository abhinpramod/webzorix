import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HERO_CONTENT = [
  {
    title: (
      <>
        We build websites
        <br />
        that <span className="text-gray-400">bring clients</span>
      </>
    ),
    subtitle:
      "Conversion-focused websites designed to turn visitors into paying customers.",
  },
  {
    title: (
      <>
        Websites that
        <br />
        <span className="text-gray-400">grow your business</span>
      </>
    ),
    subtitle:
      "We combine design, strategy, and performance to increase real revenue.",
  },
  {
    title: (
      <>
        Not just design.
        <br />
        <span className="text-gray-400">Real results.</span>
      </>
    ),
    subtitle:
      "Built for startups and businesses that care about measurable growth.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 md:pt-32 bg-black text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 xl:gap-20 items-center">
        {/* TEXT */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                {HERO_CONTENT[index].title}
              </h1>

              <p className="mt-5 text-gray-400 text-base md:text-lg max-w-lg">
                {HERO_CONTENT[index].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <motion.a
              href="#contact"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 12px 30px rgba(255,255,255,0.35)",
                  "0 0 0px rgba(0,0,0,0.8)",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white text-black px-7 py-3 rounded-xl font-medium"
            >
              Get Started
            </motion.a>

            <a
              href="#work"
              className="border border-white/20 px-7 py-3 rounded-xl text-white hover:border-white/50 transition-all"
            >
              View Work
            </a>
          </div>
        </div>

        {/* VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden md:block relative"
        >
          <div className="h-[420px] rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 shadow-2xl overflow-hidden">
            <img
              src="/hero image.png"
              alt="Web Development"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
