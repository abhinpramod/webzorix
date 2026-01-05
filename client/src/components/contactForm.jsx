import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ContactForm = () => {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("Submitting form:", form);
    e.preventDefault();

    if (!form.name || !form.email) {
      toast.error("Please fill required fields");
      return;
    }

    const response = await axios.post("http://localhost:3000/data", {form});

    if (response.status == 200) {
      
    toast.success(
      "Thanks for reaching out! Our team will contact you within 24 hours."
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
     
    }
    if (response.data.error) {
      toast.error(response.data.error || "Something went wrong");
      return;
    }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="text-lg md:text-xl font-semibold mb-3">
        Start Your Project
      </h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone (optional)"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Tell us briefly about your business"
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-700 text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
      />

      <button
        type="submit"
        className="w-full bg-white text-black py-2.5 rounded-xl font-medium hover:bg-gray-200 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
