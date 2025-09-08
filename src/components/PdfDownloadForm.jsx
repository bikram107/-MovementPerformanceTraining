import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseBackend.js";
import eBook from "../assets/eBook.pdf";

const PdfDownloadForm = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // simple Gmail regex
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // reset form + status whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setStatus("");
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check Gmail format
    if (!gmailRegex.test(email)) {
      setStatus("❌ Please enter a valid Gmail address.");
      return;
    }

    // Insert into Supabase
    const { error } = await supabase.from("Leads").insert({ name, email });
    if (error) {
      console.error(error);
      setStatus("❌ Error: " + error.message);
      return;
    }

    // ✅ Trigger download of imported PDF
    const link = document.createElement("a");
    link.href = eBook;
    link.download = "eBook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close modal after successful submit
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 mx-4 relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Please fill out the form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>

            {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default PdfDownloadForm;
