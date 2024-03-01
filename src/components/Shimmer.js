import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {[...Array(14)].map((val , index) => (
        <div key={index} className="m-5 w-[220px] h-[250px] animate-pulse bg-gray-300"></div>
      ))}
    </div>
  );
};

export default Shimmer;
