import React, { useState } from "react";

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading page
    setShowThankYou(true);
    setTimeout(() => {
      setShowForm(false);
      setShowThankYou(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="relative">
      {/* NAVBAR */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <i className="fa-solid fa-database fa-2x text-white"></i>
          <p className="text-white font-mono text-lg">Portfolio</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col md:flex-row text-xl gap-3 items-center mb-4 md:mb-0">
          <a href="#" className="text-white font-mono">
            Project
          </a>
          <a href="#" className="text-white font-mono">
            Technologies
          </a>
          <a href="#" className="text-white font-mono">
            About
          </a>
        </div>

        {/* Hire Me Button */}
        <div className="flex">
          <button
            onClick={() => setShowForm(true)}
            className="w-[100px] h-[50px] bg-blue-500 text-white font-serif rounded-[10px] hover:bg-blue-600 transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
            {!showThankYou ? (
              <>
                <h2 className="text-xl font-bold mb-4">
                  What project are you looking for?
                </h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                    required
                  />
                  <textarea
                    placeholder="Project Description"
                    rows={4}
                    className="border p-2 rounded"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-red-500 hover:underline"
                  >
                    Cancel
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 p-6">
                <div className="animate-bounce text-green-600 text-4xl">✅</div>
                <p className="text-lg font-semibold text-center text-gray-800">
                  Thank you! I'll get back to you soon. 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
