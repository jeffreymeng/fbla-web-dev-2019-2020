import React from "react";
import classNames from 'classnames';

const FlightInfoCard = ({ flight, className }) => {
  return (
    <div className={classNames("rounded overflow-hidden shadow-md bg-white", className)}>
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {flight.depart.airports.join(" — ")}
        </h3>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">
          <pre>{JSON.stringify(flight, null, 2)}</pre>
        </p>
      </div>
    </div>
  );
};

export default FlightInfoCard;