import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa"; // ⬅️ Make sure to install this

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-6 flex flex-col items-center z-50">
      <button
        onClick={scrollToTop}
        className="bg-orange-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:bg-orange-600 transition duration-300"
        aria-label="Back to Top"
      >
        <FaChevronUp className="text-xl" />
      </button>
      <span className="mt-2 text-orange-500 font-semibold text-sm">BACK TO TOP</span>
    </div>
  );
};

export default BackToTopButton;
