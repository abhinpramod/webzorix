import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white px-2.5 sm:px-4 md:px-6 lg:px-12 pt-8 pb-20 md:pt-10 md:pb-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="self-center px-6 sm:px-0">
          <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let’s Build a Website <br />
            That Brings You Clients
          </h2>

          <p className="mt-4 text-gray-400 text-base md:text-lg max-w-md">
            Tell us about your business and challenges.
            We’ll respond with a clear plan to help you attract more customers online.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-300 text-sm md:text-base">
                Free consultation
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-300 text-sm md:text-base">
                No obligation
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-gray-300 text-sm md:text-base">
                Response within 24 hours
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-neutral-900 p-6 md:p-8 rounded-3xl shadow-2xl">
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default Contact;
