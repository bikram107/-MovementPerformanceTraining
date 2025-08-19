import React, { useState } from "react";
import { supabase } from "../supabaseBackend.js";

const PdfDownloadForm = ({ isOpen, handleClose, submitted, setSubmitted }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Leads")
      .insert({ name, email });

    if (error) {
      console.error(error);
      setStatus("❌ Error: " + error.message);
    } else {
      // console.log("✅ Data inserted:", data);
      // setStatus("✅ Data submitted successfully!");
      setName("");
      setEmail("");
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 mx-4 relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            {!submitted ? (
              <>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Please fill out the form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Thank you!
                </h3>
                <a
                  href="/assets/fitness-guide.pdf" // adjust this path
                  download
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full inline-block"
                >
                  Click to Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PdfDownloadForm;
