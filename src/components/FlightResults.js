import React, { useState } from "react"
import FlightData from "./flightData"
import Select from "react-select"
import FlightResult from "./FlightResult"
import ReactSlider from "react-slider"
import "../styles/slider.scss"
import ClickAwayListener from "./ClickAwayListener"
import Transition from "./Transition"
import classNames from "classnames"

const FilterUI = ({ className, sortBy }) => {
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
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
            Nonstop Only
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
          className="origin-top-right absolute right-0 mt-1 w-40 rounded-md z-10">
          <div className="rounded-md bg-white"
               style={{
                 "box-shadow": "0 1px 3px rgba(60,64,67, 0.3), 0 4px 8px 3px rgba(60,64,67, 0.15)",
               }}>
            <div className="py-1">
              <a href="#" onClick={e => sortBy("depart")}
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Nonstop Only
              </a>
              <a href="#" onClick={e => sortBy("arrival")}
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                All Flights
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
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
            Sort By
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
          className="origin-top-right absolute right-0 mt-1 w-40 rounded-md z-10">
          <div className="rounded-md bg-white"
               style={{
                 "box-shadow": "0 1px 3px rgba(60,64,67, 0.3), 0 4px 8px 3px rgba(60,64,67, 0.15)",
               }}>
            <div className="py-1">
              <a href="#" onClick={e => sortBy("depart")}
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Departure Time
              </a>
              <a href="#" onClick={e => sortBy("arrival")}
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Arrival Time
              </a>
              <a href="#" onClick={e => sortBy("price")}
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Price
              </a>
              <a href="#" onClick={e => sortBy("stops")}
                 className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Number of Stops
              </a>
              <a href="#" onClick={e => sortBy("length")}
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

const FlightResults = ({ title, value, searchedClass, onFlightSelected, className }) => {
  const defaults = {
    sort: {
      label: "Departure Time",
      value: "depart",
    },
    nonstopOnly: false,
    minPrice: 0,
    maxPrice: 20000,
  }
  const [sort, setSort] = React.useState(defaults.sort)
  const [nonstopOnly, setNonstopOnly] = React.useState(defaults.nonstopOnly)
  const [minPrice, setMinPrice] = React.useState(defaults.minPrice)
  const [maxPrice, setMaxPrice] = React.useState(defaults.maxPrice)


  let flights = getFlights(value)

  const classIdx = ["economy", "business", "first"].indexOf(searchedClass)
  let cheapestPrice = 10000000
  for (let i = 0; i < flights.length; i++) {
    cheapestPrice = Math.min(cheapestPrice, flights[i].price[classIdx])
  }

  const noFlights = (
    <div>
      {/*TODO*/}
      <p>Sorry, it doesn't look like we have any flights for you on the selected dates. However, we found 3 flights for
        you from xxxx to xxxx on 3/24</p>
    </div>
  )
  let filteredFlights = flights.filter((flight) => {
    return !((nonstopOnly && flight.stops > 0) || (flight.price[classIdx] < minPrice || flight.price[classIdx] > maxPrice))
  })
  return (
    flights.length != 0 ?
      <div className={className}>
        <div className="ml-4 mb-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <FilterUI
            sortBy={v => setSort(v)} />
        </div>

        {/*/>*/}
        {/*  <label>*/}
        {/*    <input type="checkbox" checked={nonstopOnly} onChange={(e) => setNonstopOnly(e.target.checked)} />Show nonstop flights only*/}
        {/*  </label>*/}
        {/*<b>Price Range:</b>*/}
        {/*<ReactSlider*/}
        {/*  min={0}*/}
        {/*  max={20000}*/}
        {/*  step={10}*/}
        {/*  className="slider"*/}
        {/*  thumbClassName="slider-thumb"*/}
        {/*  trackClassName="slider-track"*/}
        {/*  value={[minPrice, maxPrice]}*/}
        {/*  ariaLabel={['Lower thumb', 'Upper thumb']}*/}
        {/*  ariaValuetext={state => `Thumb value ${state.valueNow}`}*/}
        {/*  renderThumb={(props, state) => <div {...props}>${state.valueNow}</div>}*/}
        {/*  pearling*/}
        {/*  minDistance={100}*/}
        {/*  onChange={(v) => {*/}
        {/*    // console.log("HI", v)*/}
        {/*    setMinPrice(v[0]);*/}
        {/*    setMaxPrice(v[1]);*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<hr />*/}
        {filteredFlights.length === 0 &&
        <div>
          <p>Sorry, but we couldn't find any flights for you that match your filters.</p>
          <a onClick={() => {
            setNonstopOnly(defaults.nonstopOnly)
            setMinPrice(defaults.minPrice)
            setMaxPrice(defaults.maxPrice)
          }}>Reset All Filters</a>
        </div>}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul>
            {
              filteredFlights.map((flight, i) => {


                return (
                  <li key={i} className={classNames({
                    "border-t border-gray-200": i !== 0,
                  })}>
                    <FlightResult
                      flight={flight}
                      searchedClass={searchedClass}
                      highlightPrice={flight.price[classIdx] === cheapestPrice}
                      onClick={e => onFlightSelected(flight)} />
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div> : noFlights
  )
}

function getFlights(value) {
  const MAX_LAYOVER_LENGTH = 4

  class Time {
    /**
     * Create a time object
     * @param hour
     * @param minute
     * @param isAm
     */
    hour
    minute
    isAm
    /**
     * A number, the number of hours since midnight. e.g. 6 == 6AM, 13.75 == 1:45 PM
     */
    time

    toString() {
      return `${this.hour}:${(this.minute < 10 ? "0" : "") + this.minute} ${this.isAm ? "A" : "P"}M`
    }

    static timeFromHourMinuteIsAm(hour, minute, isAm) {
      return hour + (isAm ? 0 : 12) + (minute / 60)
    }

    _setFromString(timeString) {
      if (timeString.indexOf(":") > -1) {
        [this.hour, this.minute] = timeString.split(/:|"am"|"pm"/g).map(x => parseInt(x))
      } else {
        this.hour = parseInt(timeString)
        this.minute = 0
      }
      this.isAm = timeString.indexOf("pm") === -1
      this.time = Time.timeFromHourMinuteIsAm(this.hour, this.minute, this.isAm)
    }

    _setFromNumber(time) {
      if (time > 24) {
        this._setFromNumber(time - 24)
        return
      }
      this.time = time
      this.isAm = time < 12
      if (time >= 13) time -= 12 // NOT this.time
      this.hour = Math.floor(time)
      this.minute = Math.round(60 * (time % 1))


    }

    constructor(hour, minute, isAm) {
      if (arguments.length == 1) {
        if (typeof hour === "string") {
          this._setFromString(hour)
        } else {
          this._setFromNumber(hour)
        }

      } else {
        this.hour = hour
        this.minute = minute
        this.isAm = isAm || true
        this.time = Time.timeFromHourMinuteIsAm(hour, minute, isAm)
      }
    }

    add(time) {
      this._setFromNumber(this.time + time.time)
      return this
    }

    subtract(time) {
      this._setFromNumber(this.time - time.time)
      return this
    }

    toHourMinute() {
      return `${this.hour}h${this.minute !== 0 ? " " + this.minute + "m" : ""}`
    }

    /**
     * Returns a positive number if this flight is before the provided one, negative number if it is after, and 0 if they are equal.
     * @param time
     * @returns {number}
     */
    compareTo(time) {
      return time.time - this.time
    }

    clone() {
      return new Time(this.time)
    }

  }

  const daysOfWeekReadable = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const daysOfWeek = ["Su", "M", "Tu", "W", "Th", "F", "Sa"]
  let dayOfWeek = daysOfWeek[value.startDate?.getDay()]
  let flights = []
  const route = FlightData[value.departAirport]?.flights[value.arriveAirport]
  if (route) {
    const add = (arr, schedule, routeTime) => {
      // console.log("RT", routeTime)
      schedule.forEach((rule) => {
        // console.log(rule.days)
        if (rule.days.indexOf(dayOfWeek) > -1) {

          arr.push(
            ...rule.times.map(startTimeString => {
              let startTime = new Time(startTimeString)
              return {
                start: startTime,
                end: startTime.clone().add(routeTime),
                length: `${routeTime.hour}h${routeTime.minute !== 0 ? " " + routeTime.minute + "m" : ""}`,
                aircraft: [rule.aircraft],
                stops: 0,
                airports: [value.departAirport, value.arriveAirport],
                price: [976, 1537, 3099],//TODO
              }
            }),
          )
        }
      })
    }
    add(flights, route.schedule, new Time(route.time))
    // find connecting flights via brute force LOL
    for (let layoverAirport of Object.keys(FlightData[value.departAirport]?.flights)) {
      if (layoverAirport === value.arriveAirport) continue
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
          destFlights.forEach((flightToDest) => {
            // console.log("HI",flightToLayover, flightToDest, flightToLayover.start.compareTo(flightToDest.end));
            if (flightToLayover.end.compareTo(flightToDest.start) >= 0 && flightToLayover.end.compareTo(flightToDest.start) <= MAX_LAYOVER_LENGTH) {
              // console.log("BLDS", flightToLayover.start.clone())
              let toLayoverTime = flightToLayover.end.clone().subtract(flightToLayover.start)
              let atLayoverTime = flightToDest.start.clone().subtract(flightToLayover.end)
              let toDestTime = flightToDest.end.clone().subtract(flightToDest.start)

              let travelTime = flightToDest.end.clone().subtract(flightToLayover.start)
              // console.log("TT", travelTime, flightToDest, flightToLayover, toDestFlight, toLayoverFlight)
              flights.push({
                start: flightToLayover.start,
                end: flightToDest.end,
                length: travelTime.toHourMinute(),
                layover: `Layover at ${layoverAirport}`,
                airports: [value.departAirport, layoverAirport, value.arriveAirport],
                aircraft: [flightToLayover.aircraft, flightToDest.aircraft],
                times: [toLayoverTime.toHourMinute(), atLayoverTime.toHourMinute(), toDestTime.toHourMinute()],
                price: [1324, 2899, 4859],//TODO
                stops: 1,
              })
            }
          })
        })
      }
    }
  }
  return flights
}

export default FlightResults