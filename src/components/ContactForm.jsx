import { useState } from "react";
import { supabase } from "../supabaseBackend";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from("Messages")
      .insert({ name, email, message });

    if (error) {
      console.error(error);
      toast.error("❌ Failed to send message. Please try again.");
    } else {
      toast.success("✅ Message submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-white px-6 py-25 max-w-[90%] mx-auto">
      {/* Main Theme Heading */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 tracking-wide mb-4">
          Get In Touch With Us
        </h1>
        <p className="mx-auto max-w-xl text-lg md:text-xl text-gray-700 font-light leading-relaxed">
          We’re here to help — whether you have questions, feedback, or just want to connect with us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Info Panel */}
        <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 md:p-8 shadow-lg border border-orange-200 flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-orange-500">Contact Us</h2>

            <div>
              <h4 className="font-semibold text-gray-800 text-lg mb-0.5">Email</h4>
              <p className="text-gray-600 select-text">chloebarrettraining@icloud.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg mb-0.5">Phone</h4>
              <p className="text-gray-600 select-text">0498 471 509</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg mb-0.5">Location</h4>
              <p className="text-gray-600 select-text">469 Kawana Way, Birtinya QLD 4575</p>
            </div>
          </div>

          {/* Map Container */}
          <div
            className="mt-6 rounded-xl overflow-hidden border border-orange-100 shadow"
            style={{ height: "250px" }}
          >
            <iframe
              title="Movement Fitness Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.110016738286!2d153.11453461081553!3d-26.740865085948123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b939e7c5306bd61%3A0x67bf78399ce1921c!2s469%20Kawana%20Way%2C%20Birtinya%20QLD%204575!5e0!3m2!1sen!2sau!4v1747015165108!5m2!1sen!2sau"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-orange-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-orange-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-orange-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-orange-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-orange-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                rows="4"
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
