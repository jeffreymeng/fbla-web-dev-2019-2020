import React from "react";
import classNames from 'classnames';

const formatTime = obj => {
  let hr = obj.hour; if (hr < 10) hr = "0" + hr;
  let min = obj.minute; if (min < 10) min = "0" + min;
  return `${hr}:${min} ${obj.isAm ? "AM" : "PM"}`
}

const getDescriptionString = obj => {
  if (obj.layover) {
    return `${obj.airports[0]} to ${obj.airports[1]} (${obj.times[0]}), ${obj.layover} (${obj.times[1]}), ${obj.airports[1]} to ${obj.airports[2]} (${obj.times[2]})`
  } else {
    return `${obj.airports[0]} to ${obj.airports[1]} (${obj.length})`;
  }
}

const FlightInfoCard = ({ flight, className }) => {
  return (
    <div className={classNames("rounded overflow-hidden shadow-md bg-white", className)}>
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-xl leading-6 font-bold text-gray-900">
          {flight.depart.airports.join(" — ")}
        </h3>
      </div>
      <div className="px-6 py-4">
        {flight.arrive && <div className="font-semibold text-indigo-700 text-sm uppercase mb-2">Departure Flight</div>}
        <div className="font-semibold text-gray-700 text-lg">{formatTime(flight.depart.start)} to {formatTime(flight.depart.end)}</div>
        <div className="text-gray-700 mb-2">{flight.depart.aircraft.join(", ")}</div>

        <div className="font-semibold text-gray-700">
          {getDescriptionString(flight.depart)}
        </div>

        {flight.arrive &&
        (
          <>
            <div className="border-t border-gray-200 mt-6 pt-6 font-semibold text-indigo-700 text-sm uppercase mb-2">Arrival Flight</div>
            <div className="font-semibold text-gray-700 text-lg">{formatTime(flight.depart.start)} to {formatTime(flight.depart.end)}</div>
            <div className="text-gray-700 mb-2">{flight.depart.aircraft.join(", ")}</div>

            <div className="font-semibold text-gray-700">
            {getDescriptionString(flight.depart)}
            </div>
          </>
        )}
        {/*<p className="text-gray-700 text-base">*/}
        {/*  <pre>{JSON.stringify(flight, null, 2)}</pre>*/}
        {/*</p>*/}
      </div>
    </div>
  );
};

export default FlightInfoCard;