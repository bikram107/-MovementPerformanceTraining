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
    <div className="w-full px-6 py-46 bg-gradient-to-br from-white via-orange-50 to-white text-gray-800">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-orange-500">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            We’d love to hear from you! Whether you’re curious about features,
            have feedback, or just want to chat — we’re here to help.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p>info@movementfitness.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p>+1 234 567 890</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p>123 Movement Street, Fitness City, World</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="name"
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
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="email"
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
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-1"
                htmlFor="message"
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
    </div>
  );
};

export default ContactForm;
