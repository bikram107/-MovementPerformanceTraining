import React, { useState } from "react";
import question from "../assets/question_svg.svg";

const faqData = [
  {
    question: "What makes your programs different from general fitness plans?",
    answer:
      "Our programs are specifically designed for kitesurfers and wingfoilers, focusing on the unique demands of these sports. Leveraging my background as a national kitesurfing athlete and exercise physiology student, the training emphasizes sport-specific mobility, strength, and injury prevention. We incorporate biomechanics and evidence-based methodologies to enhance performance and resilience.",
  },
  {
    question:
      "Are these programs suitable for beginners or only advanced athletes?",
    answer:
      "Absolutely! Our programs cater to all levels, offering progressions and regressions to match your current fitness and experience. Whether you're new to the sport or an experienced athlete, the training adapts to your needs.",
  },
  {
    question: "Can I follow the program without access to a gym?",
    answer:
      "Yes. While gym access provides more training diversity, some of our programs are designed to be effective with minimal equipment at home. A yoga mat and a few bands are sufficient to start. Recommended home equipment includes suspension straps, therabands, minibands, dumbbells, and sliders",
  },
  {
    question:
      "Why do kitesurfers and wingfoilers need structured mobility and strength training?",
    answer:
      "These sports involve dynamic movements, requiring joint stability, balance, and muscular endurance. Structured training helps prevent common injuries, correct asymmetries, and enhance overall performance on the water.",
  },
  {
    question: "How is this program tailored for the demands of boardsports?",
    answer:
      "The training focuses on movement patterns and neuromuscular control specific to surfing, kitesurfing and wingfoiling. Emphasis is placed on shoulder and hip stability, core strength, and spinal mobility to meet the dynamic demands of these sports.",
  },
  {
    question:
      "How long are the sessions, and how many days per week should I train?",
    answer:
      "Sessions typically last between 45 minutes to 80 minutes. Depending on your goals and current activity levels, programs range from 2 to 5 training days per week.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "To begin, you'll need access to a gym or some home gym equipment. We recommend you to have a yoga mat, a few resistance bands and some dumbbells to start. For a more comprehensive setup, consider adding suspension straps, therabands, minibands, kettlebells, and sliders. ",
  },
  {
    question:
      " Is this a one-time program or do you offer ongoing progression?",
    answer:
      "Our programs are designed for ongoing progression. After completing an initial phase, we offer subsequent stages to continue challenging your body and advancing your performance.",
  },
  {
    question:
      "How soon will I start to see improvements in my mobility or performance?",
    answer:
      "While individual results vary, many clients notice improvements in mobility and strength within a few weeks. Consistent training leads to enhanced performance and reduced injury risk over time.",
  },
  {
    question: "What if I have an injury – can I still follow the program?",
    answer:
      "Yes, but it's essential to consult with a healthcare professional before starting. Your coach can work with your physiotherapist and tailor the program to accommodate your injury, focusing on safe movements and gradual progression.",
  },
  {
    question: "Do I get coaching or feedback on my technique/form?",
    answer:
      "Yes. We provide weekly check-in forms to monitor your progress and offer regular calls to adjust your program and keep you accountable. To ensure proper technique and continuous improvement, you are encouraged to send videos of you performing some of the exercises in your program.",
  },
  {
    question: "How do I access the program after I purchase it?",
    answer:
      "Upon purchase, you'll receive access to the program through our online platform. This includes detailed instructions, video demonstrations, and all necessary resources to guide your training journey.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Show first 5 if collapsed, all if expanded
  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section className="py-5 my-10 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left: Accordion */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {visibleFaqs.map((faq, index) => (
              <div
                key={index}
                className="border hover:border-3 hover:border-orange-500 rounded-md p-4"
              >
                <button
                  className="flex justify-between w-full text-left font-medium text-gray-800 cursor-pointer"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl ">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`mt-2 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See More / See Less Button */}
          {faqData.length > 5 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-orange-600 font-semibold hover:underline focus:outline-none"
                aria-expanded={showAll}
              >
                {showAll ? "See Less ▲" : "See More ▼"}
              </button>
            </div>
          )}
        </div>

        {/* Right: Vector/Image */}
        <div className="w-full lg:w-1/2">
          <img src={question} alt="FAQ Vector" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
