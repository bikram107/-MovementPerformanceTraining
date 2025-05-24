const HomeServiceCard = ({
  title,
  description,
  image,
  scale = 1,
  slideDirection = "right", // 'right', 'left', 'top', 'bottom'
  buttonText = "Learn More",
}) => {
  const getSlideInClasses = (direction) => {
    switch (direction) {
      case "left":
        return "origin-left translate-x-full group-hover:translate-x-0";
      case "right":
        return "origin-right -translate-x-full group-hover:translate-x-0";
      case "top":
        return "origin-top translate-y-full group-hover:translate-y-0";
      case "bottom":
        return "origin-bottom -translate-y-full group-hover:translate-y-0";
      default:
        return "origin-right -translate-x-full group-hover:translate-x-0";
    }
  };

  const slideClass = getSlideInClasses(slideDirection);

  return (
    <div
      className={`relative group min-w-[250px] max-w-[400px] sm:min-w-[300px] transform transition-transform duration-700 ease-in-out mx-3 flex-shrink-0`}
      style={{
        transform: `scale(${scale})`,
        opacity: scale === 1 ? 1 : 0.7,
      }}
    >
      {/* Main Card */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col relative z-10 pointer-events-none group-hover:pointer-events-none">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover rounded-t-3xl"
        />
        <div className="p-5 flex flex-col justify-between h-full">
          <h3 className="text-center text-lg font-semibold text-orange-500">
            {title}
          </h3>
        </div>
      </div>

      {/* Sliding Description Panel */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 via-white to-orange-50 p-6 rounded-3xl shadow-xl z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out ${slideClass} flex flex-col justify-between`}
      >
        <div>
          <h4 className="text-slate-900 text-md font-bold mb-2 uppercase text-center">
            Description
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed text-center">
            {description}
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-sm bg-orange-500 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
