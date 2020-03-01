import React from "react";
import FlightData from "./flightData";

const FlightResults = ({ value }) => {
  const daysOfWeekReadable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysOfWeek = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  let dayOfWeek = value.startDate?.getDay();
  let flights = [];
  FlightData[value.departAirport]?.flights[value.arriveAirport].schedule.forEach((rule) => {
    if (rule.days.indexOf(dayOfWeek) > -1) {

    }
  })


  return (
    <>
      {daysOfWeek[dayOfWeek]}
      {JSON.stringify(flights)}
    </>
  )
};

export default FlightResults;