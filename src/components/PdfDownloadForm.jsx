import React, { useState } from "react";

const PdfDownloadForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setSubmitted(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could also add validation here
    setSubmitted(true);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
      >
        Download PDF
      </button>

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
