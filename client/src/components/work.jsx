import { motion } from "framer-motion";

const workProjects = [
  {
    title: "LocalFinder",
    desc: "A role-based platform for construction contractors to showcase work, hire employees, and generate leads, with a secure admin panel.",
    link: "https://my-localfinder.vercel.app/",
    status: "Live",
  },
  {
    title: "CareMall Online",
    desc: "An online marketplace allowing users to buy products, explore offers, and sell items through a multi-vendor style system.",
    link: "https://caremallonline.com/",
    status: "Live",
  },
  {
    title: "Expense Tracker",
    desc: "A simple and effective expense tracking web app to record daily spending and calculate monthly expense insights.",
    link: "https://expence-tracker-xi-eight.vercel.app/",
    status: "Live",
  },
  {
    title: "Tripeazy – Travel & Tourism Platform",
    desc: "A full-featured travel and tourism platform with admin, agency, and user roles, focused on package management and bookings.",
    link: null,
    status: "In Progress",
  },
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen bg-[#0D0D0D] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            Selected <span className="text-emerald-400">Work</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Real projects built to solve real business problems — not demo templates.
          </p>
        </motion.div>

        {/* Work Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-4 lg:px-10">
          {workProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-[#1F1F1F] bg-[#1A1A1A] p-6 hover:border-emerald-400/40 transition flex flex-col justify-between"
            >
              <div>
                {/* Status */}
                <span
                  className={`inline-block mb-4 text-xs px-3 py-1 rounded-full ${
                    project.status === "Live"
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-yellow-400/10 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-emerald-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              ) : (
                <span className="mt-6 text-gray-500 text-sm">
                  Case study coming soon
                </span>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
