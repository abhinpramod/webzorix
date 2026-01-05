import { motion } from "framer-motion";

const services = [
  {
    title: "Business Websites",
    desc: "High-converting websites designed to attract clients, build trust, and grow your business online.",
  },
  {
    title: "Web Applications",
    desc: "Custom web apps built to automate processes, manage users, and scale with your business.",
  },
  {
    title: "Landing Pages",
    desc: "Focused landing pages built for ads, promotions, and lead generation with clear CTAs.",
  },
  {
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, fast, and conversion-focused experiences.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-black text-white py-11"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            What we <span className="text-emerald-400">do</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            We help businesses turn ideas into powerful digital experiences
            that bring real results.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg-px-10 ">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-8 hover:border-emerald-400/40 transition"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
