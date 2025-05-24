import React from "react";

const MapSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Location</h2>
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-orange-100">
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
    </section>
  );
};

export default MapSection;
