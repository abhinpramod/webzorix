import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-32 px-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-emerald-400">Us</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Webzorix Solutions is a creative web development company dedicated to helping
            businesses grow online. We focus on building websites and web apps that attract
            clients, increase engagement, and deliver measurable results.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm-px-2">
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-4 text-center">
              <h3 className="font-semibold text-lg">Professional</h3>
              <p className="text-gray-400 text-sm mt-1">Clean and efficient solutions</p>
            </div>
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-4 text-center">
              <h3 className="font-semibold text-lg">Creative</h3>
              <p className="text-gray-400 text-sm mt-1">Unique designs for your brand</p>
            </div>
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-4 text-center">
              <h3 className="font-semibold text-lg">Reliable</h3>
              <p className="text-gray-400 text-sm mt-1">Projects delivered on time</p>
            </div>
            <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-xl p-4 text-center">
              <h3 className="font-semibold text-lg">Supportive</h3>
              <p className="text-gray-400 text-sm mt-1">We guide you every step</p>
            </div>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="h-[400px] rounded-2xl bg-[#0D0D0D] border border-[#1F1F1F] overflow-hidden flex items-center justify-center">
            <img
              src="aboutUs.png"
              alt="About Us"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
