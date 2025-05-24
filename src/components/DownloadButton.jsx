import React from "react";

const DownloadButton = ({ downloadFunction }) => {
  return (
    <div>
      <button
        onClick={downloadFunction}
        type="button"
        className="flex items-center cursor-pointer group  text-sm h-10 rounded-lg px-7 py-6 hover:underline  bg-white hover:text-white  border-orange-600 text-orange-500 hover:bg-orange-400 "
      >
        Download Free PDF
        <div className="bg-orange-600 animate-bounce text-orange-400 group-hover:bg-white ml-3 rounded-full h-7 w-7 flex items-center justify-center">
          <svg
            className="text-white group-hover:text-orange-600 "
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1v12m6-4-5.5 5L1 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;
