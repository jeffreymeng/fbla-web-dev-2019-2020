import React from "react";
import FlightData from "./flightData";
import Select from "react-select";
const FlightResults = ({ value }) => {
 let flights = getFlights(value);

  const noFlights = (
    <div>
      {/*TODO*/}
      <p>Sorry, it doesn't look like we have any flights for you on the selected dates. However, we found 3 flights for you from xxxx to xxxx on 3/24</p>
    </div>
  )
  return (
    flights.length != 0  ?
    <>
      <Select options={[{
        name:"Departure Time",
        value:"depart"
      },
        {
          name:"Arrival Time",
          value:"arrival"
        },
        {
          name:"Price",
          value:"price"
        },
        {
          name:"Number of Stops",
          value:"stops"
        },
        {
          name:"Duration",
          value:"length"
        }]} />
        <label>
          <input type="checkbox" />Show nonstop only
        </label>
      <span>PRICE RANGE SELECT HERE</span>
      {
        flights.map((flight, i) => {
          return (
            <div key={i}>
              <hr />
              {flight.stops == 0 ? "Nonstop" : "1 Stop"}
              <b>{flight.start.toString()} - {flight.end.toString()}</b> ({flight.length})
              <p>{flight.airports.join(" --> ")}</p>
              <p>{flight.times?.join(" --> ")}</p>
              <div>
                <b>Aircraft: </b>
                {flight.aircraft.length > 1 ?
                  <ul>
                    {flight.aircraft.map((name, j) => <li key={j}>{name}</li>)}
                  </ul>
                  : <i>{flight.aircraft[0]}</i>
                }
              </div>
              <span>Economy: ${flight.price[0]} Business: ${flight.price[1]} First: ${flight.price[2]}</span>
            </div>
          )
        })
      }
    </>: noFlights
  )
};

function getFlights(value) {
  const MAX_LAYOVER_LENGTH = 4;

  class Time {
    /**
     * Create a time object
     * @param hour
     * @param minute
     * @param isAm
     */
    hour;
    minute;
    isAm;
    /**
     * A number, the number of hours since midnight. e.g. 6 == 6AM, 13.75 == 1:45 PM
     */
    time;
    toString() {
      return `${this.hour}:${(this.minute < 10 ? "0" : "") + this.minute} ${this.isAm ? "A." : "P."}M.`
    }
    static timeFromHourMinuteIsAm(hour, minute, isAm) {
      return hour + (isAm ? 0 : 12) + (minute/60);
    }
    _setFromString(timeString) {
      if (timeString.indexOf(":") > -1) {
        [this.hour, this.minute] = timeString.split(/:|"am"|"pm"/g).map(x => parseInt(x));
      } else {
        this.hour = parseInt(timeString);
        this.minute = 0;
      }
      this.isAm = timeString.indexOf("pm") === -1;
      this.time = Time.timeFromHourMinuteIsAm(this.hour, this.minute, this.isAm);
    }
    _setFromNumber(time) {
      if (time > 24) {
        this._setFromNumber(time - 24);
        return;
      }
      this.time = time;
      this.isAm = time < 12;
      if (time >= 13) time -= 12; // NOT this.time
      this.hour = Math.floor(time);
      this.minute = Math.round(60 * (time % 1));


    }
    constructor (hour, minute, isAm) {
      if (arguments.length == 1) {
        if (typeof hour === "string") {
          this._setFromString(hour);
        } else {
          this._setFromNumber(hour);
        }

      } else {
        this.hour = hour;
        this.minute = minute;
        this.isAm = isAm || true;
        this.time = Time.timeFromHourMinuteIsAm(hour, minute, isAm);
      }
    }
    add (time) {
      this._setFromNumber(this.time + time.time);
      return this;
    }
    subtract (time) {
      this._setFromNumber(this.time - time.time);
      return this;
    }
    toHourMinute() {
      return `${this.hour}hr${this.minute !== 0 ? " " + this.minute + "min" : ""}`;
  }

    /**
     * Returns a positive number if this flight is before the provided one, negative number if it is after, and 0 if they are equal.
     * @param time
     * @returns {number}
     */
    compareTo(time) {
      return time.time - this.time;
    }

    clone() {
      return new Time(this.time);
    }

  }
  const daysOfWeekReadable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysOfWeek = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  let dayOfWeek = daysOfWeek[value.startDate?.getDay()];
  let flights = [];
  const route = FlightData[value.departAirport]?.flights[value.arriveAirport];
  if (route){
    const add = (arr, schedule, routeTime) => {
      console.log("RT", routeTime)
      schedule.forEach((rule) => {
        // console.log(rule.days)
        if (rule.days.indexOf(dayOfWeek) > -1) {

          arr.push(
            ...rule.times.map(startTimeString => {
              let startTime = new Time(startTimeString);
              return {
                start:startTime,
                end:startTime.clone().add(routeTime),
                length:`${routeTime.hour}hr${routeTime.minute !== 0 ? " " + routeTime.minute + "min" : ""}`,
                aircraft:[rule.aircraft],
                stops:0,
                airports:[value.departAirport, value.arriveAirport],
                price:[976, 1537, 3099]//TODO
              }
            })
          );
        }
      });
    }
    add(flights, route.schedule, new Time(route.time));
    // find connecting flights via brute force LOL
    for (let layoverAirport of Object.keys(FlightData[value.departAirport]?.flights)) {
      if (layoverAirport === value.arriveAirport) continue;
      // For each one of the departure airport's destinations, search the destination's flights to see if any of them go to the requested destination.
      // If they do, make sure the layover is acceptable.
      if (Object.keys(FlightData[layoverAirport]?.flights|| {}).indexOf(value.arriveAirport) > -1) {
        // We found a possible path.
        // Now, search the schedules to find matches (layover < 2 hours)
        // For each of the initial airport's flights to the layover airport, check if there is a flight from the layover airport to the destination airport
        // within a reasonable amount of time.
        let a = [];
        let b = FlightData[value.departAirport].flights[layoverAirport];
        add(a, b.schedule, new Time(b.time));
        console.log(new Time(0,45, true));
        console.log(a);
        let cc = [];
        let bes = FlightData[layoverAirport].flights[value.arriveAirport];
        add(cc, bes.schedule, new Time(bes.time));
        a.forEach((l) => {
          cc.forEach((fj) => {
            console.log("HI",l, fj, l.start.compareTo(fj.end));
            if (l.end.compareTo(fj.start) >= 0 && l.end.compareTo(fj.start) <= MAX_LAYOVER_LENGTH) {
              console.log("BLDS", l.start.clone())
              let d = l.end.clone().subtract(l.start);
              let atLayoverTime = fj.start.clone().subtract(l.end);
              let toDestTime = fj.end.clone().subtract(fj.start);

              let travelTime = fj.end.clone().subtract(l.start);
              console.log("TT", travelTime, fj, l, bes, b)
              flights.push({
                start:l.start,
                end:fj.end,
                length:travelTime.toHourMinute(),
                layover:`Layover at ${layoverAirport}`,
                airports:[value.departAirport, layoverAirport, value.arriveAirport],
                aircraft:[l.aircraft, fj.aircraft],
                times:[d.toHourMinute(), atLayoverTime.toHourMinute(), toDestTime.toHourMinute()],
                price:[1324, 2899, 4859]//TODO

              })
            }
          })
        })
      }
    }
  }
return flights;
}

export default FlightResults;