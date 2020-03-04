import React, { useState } from "react"
import FlightData from "./flightData"
import Select from "react-select"
import FlightResult from "./FlightResult"
import "../styles/slider.scss"
import ClickAwayListener from "./ClickAwayListener"
import Transition from "./Transition"
import classNames from "classnames"
import Time from "./Time"

const FilterUI = ({ className, onSortByChange, onNonstopOnlyChange, sortLabel, NSOLabel }) => {
  const [sortOpen, setSortOpen] = useState(false)
  const [nonstopOpen, setNonstopOpen] = useState(false)
  return (
    <div>
      <ClickAwayListener onClickAway={() => setNonstopOpen(false)}
                         className={classNames("relative inline-block text-left", className)}>
        <div>
        <span className="rounded-md shadow-sm">
          <button onClick={() => setNonstopOpen(!nonstopOpen)}
                  type="button"
                  className="inline-flex justify-between w-48 rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
            {NSOLabel}
            <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd" />
            </svg>
          </button>
        </span>
        </div>
        <Transition
          show={nonstopOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="origin-top-right absolute right-0 mt-1 w-48 rounded-md z-10">
          <div className="rounded-md bg-white"
               style={{
                 "box-shadow": "0 1px 3px rgba(60,64,67, 0.3), 0 4px 8px 3px rgba(60,64,67, 0.15)",
               }}>
            <div className="py-1">

              <a onClick={e => {
                e.preventDefault();
                setNonstopOpen(false);
                onNonstopOnlyChange && onNonstopOnlyChange(false);
              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                All Flights
              </a>
              <a onClick={e => {
                e.preventDefault();
                setNonstopOpen(false);
                onNonstopOnlyChange && onNonstopOnlyChange(true);
              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Nonstop Only
              </a>
            </div>
          </div>
        </Transition>
      </ClickAwayListener>

      <ClickAwayListener onClickAway={() => setSortOpen(false)}
                         className={classNames("relative inline-block text-left ml-4", className)}>
        <div>
        <span className="rounded-md shadow-sm">
          <button onClick={() => setSortOpen(!sortOpen)}
                  type="button"
                  className="inline-flex justify-between w-56 rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
            {sortLabel}
            <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd" />
            </svg>
          </button>
        </span>
        </div>
        <Transition
          show={sortOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="origin-top-right absolute right-0 mt-1 w-56 rounded-md z-10">
          <div className="rounded-md bg-white"
               style={{
                 "box-shadow": "0 1px 3px rgba(60,64,67, 0.3), 0 4px 8px 3px rgba(60,64,67, 0.15)",
               }}>
            <div className="py-1">
              <a onClick={e => {
                e.preventDefault();
                setSortOpen(false);
                onSortByChange({
                  label: "Departure Time",
                  value: "depart",
                });
              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Departure Time
              </a>
              <a onClick={e => {
                e.preventDefault();
                setSortOpen(false);
                onSortByChange({
                  label: "Arrival Time",
                  value: "arrive",
                });
              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Arrival Time
              </a>
              <a onClick={e => {
                e.preventDefault();
                setSortOpen(false);
                onSortByChange({
                  label: "Price",
                  value: "price",
                });
              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Price
              </a>
              <a onClick={e => {
                e.preventDefault();
                setSortOpen(false);
                onSortByChange({
                  label: "Number of stops",
                  value: "stops",
                });

              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Number of Stops
              </a>
              <a onClick={e => {
                e.preventDefault();
                setSortOpen(false);
                onSortByChange({
                  label: "Trip Time",
                  value: "length",
                });
              }}
                 href="#"
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Duration
              </a>
            </div>
          </div>
        </Transition>
      </ClickAwayListener>
    </div>
  )
}

const FlightResults = ({ title, value, searchedClass, onFlightSelected, className, isDepartResult, onDateChange }) => {
  const daysOfWeek = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
  let dayOfWeek = daysOfWeek[value[isDepartResult ? "startDate" : "endDate"]?.getDay()];
  const [selected, setSelected] = React.useState(-1);

  const defaults = {
    sort: {
      label:"Departure Time",
      value:"depart"
    },
    nonstopOnly: false,
    // minPrice: 0,
    // maxPrice: 20000,
  }
  const [sort, setSort] = React.useState(defaults.sort);
  const [nonstopOnly, setNonstopOnly] = React.useState(defaults.nonstopOnly);
  let flights = getFlights(value, dayOfWeek);
  let flightFound = flights.length > 0;
  flights = flights.filter((flight) => {
    return !((nonstopOnly && flight.stops > 0)/* || (flight.price[classIdx] < minPrice || flight.price[classIdx] > maxPrice)*/)
  }).sort((a,b) => {
    let compare = function (a, b, comparison, depth) {
      comparison = comparison || "depart";
      depth = depth === undefined ? 0 : depth;
      // Make sure we sort in priority of ["depart", "arrive", "length", "stops", "price"] to break ties.
      switch(comparison) {

        case "depart":
          let byDepart = b.start.compareTo(a.start);
          if (byDepart !== 0) return byDepart
          else if (depth === 0) return compare(a, b, undefined,1);
        case "arrive":
          let byArrive = b.end.compareTo(a.end);
          if (byArrive !== 0) return byArrive;
          else if (depth === 0) return compare(a, b, undefined,1);
        case "length":
          let byLength = b.travelTime.compareTo(a.travelTime);
          if (byLength !== 0) return byLength;
          else if (depth === 0) return compare(a, b, undefined,1);
        case "stops":
          let byStops = a.stops - b.stops;
          if (byStops !== 0) return byLength;
          else if (depth === 0) return compare(a, b, undefined,1);
        case "price":
          let byClass = a.price[classIdx] - b.price[classIdx];
          return byClass; // even if it's equal to 0
        default:
          throw "SortFlightsError: Unrecognized comparison";
      }
    }
    let result = compare(a, b, sort.value);
    return result !== 0 ? result : compare(a, b, "depart");
  });
 const classIdx = ["economy", "business", "first"].indexOf(searchedClass); // class index
 let cheapestPrice = 10000000;
 for (let i = 0; i < flights.length; i++) {
   cheapestPrice = Math.min(cheapestPrice, flights[i].price[classIdx]);
 }

 const getBestAlternative = (value, before, findAmount) => {
   // console.log(value, before, findAmount, "BATNA");
    // before: boolean, if true, finds closest flight that is before the selected date, if false, finds closest flight after.
    let numFound = 0;// This function returns as many days possible with flights (at most 6, since it only searches within a week), up to findAmount
   let result = [];
   let OneDay = 24 * 60 * 60 * 1000;
   for (let i = 1; i < 7; i ++) {
     let newIndex = daysOfWeek.indexOf(dayOfWeek) + ((before ? -1 : 1)*i);
     if (newIndex > 6) {
       newIndex -= 7;
     }
     if (newIndex < 0) {
       newIndex += 7;
     }
     //
     if (getFlights(value, daysOfWeek[newIndex], true)) {
      result.push(new Date(value[isDepartResult ? "startDate" : "endDate"].getTime()+(OneDay*(before ? -1 : 1)*i)));
      numFound ++;
      // console.log("dasf", result[result.length - 1])
      if (numFound >= findAmount) break;
    }
   }
   return result;
 };
  const FormatDate = (date) => {
    if (!date) return "";
    return `${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]}, ${["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
  const noFlightsMessage = (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>Sorry, it doesn't look like we have any flights from {value.departAirport} to {value.arriveAirport} on {FormatDate(value[isDepartResult ? "startDate" : "endDate"])}.
      </p>
      <b>However, we found flights on the following days between {value.departAirport} and {value.arriveAirport}:</b>
      <ul>
        {[...getBestAlternative(value, true, 3),...getBestAlternative(value, false, 3)]
          .sort((a,b) => a.getTime()-b.getTime())
          .map((date, i) => {
          return (
            <li key={i} hidden={!date}>
              {FormatDate(date)}
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    flightFound ?
      <div className={className}>
        <div className="ml-4 mb-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <FilterUI
            sortLabel={"Sort By: " + sort.label}
            NSOLabel={"Show: " + (nonstopOnly ? "Nonstop Only" : "All Flights")}
            onSortByChange={v => setSort(v)}
            onNonstopOnlyChange={v => setNonstopOnly(v)}
          />
        </div>

        {flights.length === 0 &&
        <div>
          <p>Sorry, but we couldn't find any flights for you that match your filters.</p>
          <a onClick={() => {
            setNonstopOnly(defaults.nonstopOnly);
            // setMinPrice(defaults.minPrice)//
            // setMaxPrice(defaults.maxPrice)//
          }}>Reset All Filters</a>
        </div>}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul>
            {
              flights.map((flight, i) => {
                if (selected !== -1 && selected !== i) {
                  return <></>;
                }

                return (
                  <li key={i} className={classNames({
                    "border-t border-gray-200": i !== 0,
                  })}>
                    <FlightResult
                      flight={flight}
                      searchedClass={searchedClass}
                      highlightPrice={flight.price[classIdx] === cheapestPrice}
                      // onClick={e => onFlightSelected(flight)}
                      isSelected={selected == i}
                      onClick = {() => {
                        setSelected(i);
                        onFlightSelected(flight);
                      }}
                    />
                  </li>
                )
              })
            }
<li hidden={selected === -1}>
  <div className={classNames(
    "border-l-4 cursor-pointer block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",
      "border-indigo-700"
  )}
  onClick={() => setSelected(-1)}
  >
    <div className="flex items-center px-4 py-4 sm:px-6">
      <div className="min-w-0 flex-1 grid grid-cols-3 sm:grid-cols-4 sm:gap-4">
        {/*<div className="col-span-2">*/}
          <div className="text-lg leading-5 font-medium text-gray-700 truncate">
            Change Selection
          </div></div></div></div>
{/*</div>*/}
</li>
          </ul>
        </div>
      </div> : noFlightsMessage
  )
}

function getFlights(value, dayOfWeek, testMode) {
  let testPassed = false;
  testMode = testMode === undefined ? false : testMode;
  const MAX_LAYOVER_LENGTH = 5;

  // Time = 0 means 12:00 AM!
  // The first time in each AM/PM category is 12, NOT 1


  // const daysOfWeekReadable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let flights = []
  const route = FlightData[value.departAirport]?.flights[value.arriveAirport]
  // console.log(value.departAirport, value, route, 3988)
  const add = (arr, schedule, routeTime) => {
    // console.log("RT", routeTime)
    schedule.forEach((rule) => {
      // console.log(rule, "rule", rule.days, dayOfWeek, rule.days.indexOf(dayOfWeek), testMode)
      if (rule.days.indexOf(dayOfWeek) > -1) {
        if (testMode) {
          testPassed = true;
          return;
        }
        arr.push(
          ...rule.times.map(startTimeString => {
            let startTime = new Time(startTimeString);
            let totalPrice = 1.1208 * (rule.price);
            return {
              start: startTime,
              end: startTime.clone().add(routeTime),
              travelTime: routeTime,
              length: routeTime.toHourMinute(),
              aircraft: [rule.aircraft],
              stops: 0,
              airports: [value.departAirport, value.arriveAirport],
              price: [totalPrice, totalPrice * 2.184, totalPrice * 3.892].map(x => Math.round(x))
            }
          }),
        )
      }
    })
  }
  if (route) {

    add(flights, route.schedule, new Time(route.time))
  }
    // console.log(value.departAirport, Object.keys(FlightData[value.departAirport]?.flights || {}))
    // find connecting flights via brute force LOL
    for (let layoverAirport of Object.keys(FlightData[value.departAirport]?.flights || {})) {
      if (layoverAirport === value.arriveAirport) continue;
      // console.log("Testing", layoverAirport)
      // For each one of the departure airport's destinations, search the destination's flights to see if any of them go to the requested destination.
      // If they do, make sure the layover is acceptable.
      if (Object.keys(FlightData[layoverAirport]?.flights || {}).indexOf(value.arriveAirport) > -1) {
        // We found a possible path.
        // Now, search the schedules to find matches (layover < 2 hours)
        // For each of the initial airport's flights to the layover airport, check if there is a flight from the layover airport to the destination airport
        // within a reasonable amount of time.
        let layoverFlights = []
        let toLayoverFlight = FlightData[value.departAirport].flights[layoverAirport]
        add(layoverFlights, toLayoverFlight.schedule, new Time(toLayoverFlight.time))
        // console.log(new Time(0,45, true));
        // console.log(layoverFlights);
        let destFlights = []
        let toDestFlight = FlightData[layoverAirport].flights[value.arriveAirport]
        add(destFlights, toDestFlight.schedule, new Time(toDestFlight.time))
        layoverFlights.forEach((flightToLayover) => {
          if (testPassed) return;
          destFlights.forEach((flightToDest) => {
            // console.log("HI",flightToLayover, flightToDest, flightToLayover.start.compareTo(flightToDest.end));
            if (flightToLayover.end.compareTo(flightToDest.start) >= 0 && flightToLayover.end.compareTo(flightToDest.start) <= MAX_LAYOVER_LENGTH) {
              // console.log("BLDS", flightToLayover.start.clone())
              let toLayoverTime = flightToLayover.end.clone().subtract(flightToLayover.start)
              let atLayoverTime = flightToDest.start.clone().subtract(flightToLayover.end)
              let toDestTime = flightToDest.end.clone().subtract(flightToDest.start)

              let travelTime = flightToDest.end.clone().subtract(flightToLayover.start)
              // console.log("TT", travelTime, flightToDest, flightToLayover, toDestFlight, toLayoverFlight)
              let totalPrice = 1.1208 * (toLayoverFlight.price + toDestFlight.price);
              // console.log(totalPrice,flightToLayover.price, "TPP")
              if (testMode) {
                testPassed = true;
                return;
              }
              flights.push({
                start:flightToLayover.start,
                end:flightToDest.end,
                travelTime:travelTime,
                length:travelTime.toHourMinute(),
                layover:`Layover at ${layoverAirport}`,
                airports:[value.departAirport, layoverAirport, value.arriveAirport],
                aircraft:[flightToLayover.aircraft, flightToDest.aircraft],
                times:[toLayoverTime.toHourMinute(), atLayoverTime.toHourMinute(), toDestTime.toHourMinute()],
                price:flightToLayover.price.map((x, i) => x + flightToDest.price[i]),
                stops:1,

              })
            }
          })
        })
      }

  }
  if (testMode) return testPassed;
  return flights
}

export default FlightResults