import React from "react";
import FlightData from "./flightData";

const FlightResults = ({ value }) => {
  const daysOfWeekReadable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysOfWeek = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  let dayOfWeek = daysOfWeek[value.startDate?.getDay()];
  let flights = [];
  FlightData[value.departAirport]?.flights[value.arriveAirport]?.schedule.forEach((rule) => {
    // console.log(rule.days)
    if (rule.days.indexOf(dayOfWeek) > -1) {
      flights.push(rule.times);
    }
  });
  flights = flights.flat();


  return (
    <>
      {daysOfWeek[dayOfWeek]}
      {JSON.stringify(flights)}

    </>
  )
};

export default FlightResults;