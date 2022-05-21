import React from "react";

function FoodCard() {
  return (
    <div className="bg-last w-96 h-96 rounded-lg ">
      <div className="p-3">
        <p className="font-frank text-secondary text-xl">title</p>
      </div>
      <div className="flex justify-between p-3">
        <div className="flex text-primary border mb-3 border-primary rounded-full justify-center items-center px-2">
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>3 mins</span>
        </div>

        <button className="rounded-full   bg-primary w-8 h-8 flex justify-center items-center hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="rounded-b-lg"><img className="rounded-b-lg "   src="http://1.bp.blogspot.com/--sbXcXkwXm4/Tl2TtJMBdNI/AAAAAAAABoQ/jixOrvcb1ys/s1600/IMAG0009.jpg" alt="" /></div>
    </div>
  );
}

export default FoodCard;
