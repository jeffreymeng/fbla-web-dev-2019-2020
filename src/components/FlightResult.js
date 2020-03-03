import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

const FlightPrice = ({ price, label }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-lg leading-5 font-medium text-gray-700 truncate">${price}</div>
      <div className="mt-1 text-sm font-light leading-5 text-gray-700 truncate">
        {label}
      </div>
    </div>
  );
}

const FlightResult = ({ flight, searchedClass, highlightPrice, onClick, hidden, isSelected }) => {
  const stopInfo = flight.airports.map((airport, idx) => {
    if (idx === 0 || idx === flight.airports.length-1) return null;
    return (idx !== 1 ? ", ": "") + flight.times[idx] + " " + airport;
  });
  if (hidden) {
    return (<></>)
  }
  return (
    <div onClick={onClick} className={classNames(
      "border-l-4 cursor-pointer block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",
      {
        "border-indigo-700": isSelected,
        "border-transparent": !isSelected
      }
    )}>
      <div className="flex items-center px-4 py-4 sm:px-6">
        <div className="min-w-0 flex-1 grid grid-cols-3 sm:grid-cols-4 sm:gap-4">
          <div className="col-span-2">
            <div className="text-lg leading-5 font-medium text-gray-700 truncate">{flight.start.toString()} – {flight.end.toString()}</div>
            <div className="hidden sm:block mt-2 text-sm font-light leading-5 text-gray-700 truncate">
              {flight.aircraft.map((name, j) => (
                <span key={j}>{j!==0?" and ":""}{name}</span>
              ))}
            </div>
            <div className="sm:hidden mt-1 text-sm font-light leading-5 text-gray-700 truncate">
              {flight.stops===0?"No Stops":"1 Stop: "}
              {stopInfo}
            </div>
          </div>
          <div>
            <span className="text-gray-700">{flight.length}</span>
            <div className="sm:mt-1 text-sm font-light leading-5 text-gray-700 truncate">
              {flight.airports.join(" – ")}
            </div>
          </div>
          <div className="hidden sm:block">
            <span
              className={classNames(
                "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 relative",
                {
                  "bg-green-100 text-green-800": flight.stops === 0,
                  "bg-yellow-100 text-yellow-800": flight.stops !== 0
                }
              )}
              style={{bottom: "0.25rem"}}>
              {flight.stops === 0 ? "Nonstop" : "1 Stop"}
            </span>
            <div className="text-sm font-light leading-5 text-gray-700 truncate">
              {stopInfo}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-8">
          <div className={classNames(
            "text-lg leading-5 font-medium truncate",
            {
              "text-gray-700": !highlightPrice,
              "text-green-500": highlightPrice
            }
          )}>
            ${}
            {flight.price[["economy", "business", "first"].indexOf(searchedClass || "")] > 999 ?
              (Math.floor(flight.price[["economy", "business", "first"].indexOf(searchedClass || "")]/1000) + ",")
              : ""}
            {Math.floor(flight.price[["economy", "business", "first"].indexOf(searchedClass || "")]%1000/100)}
            {Math.floor(flight.price[["economy", "business", "first"].indexOf(searchedClass || "")]%100/10)}
            {Math.floor(flight.price[["economy", "business", "first"].indexOf(searchedClass || "")]%10)}
          </div>
          <div className="mt-1 text-sm font-light leading-5 text-gray-700 truncate">
            {searchedClass==="economy"?"Economy":(searchedClass==="business"?"Business":"First Class")}
          </div>
        </div>
        {!isSelected?<div>
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd" />
          </svg>
        </div>:<></>}
      </div>
    </div>
  );
};

export default FlightResult;
