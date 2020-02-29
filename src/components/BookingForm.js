import React from "react"
import "../styles/index.scss"
import "../styles/flatpickr/light.scss"
import Flatpickr from "react-flatpickr"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"
import Select, {components} from "react-select"
import classNames from "classnames"


const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: "transparent",
    "&:hover": {
      borderColor: provided.borderColor,
    },
    width: "auto",
  }),
  indicatorSeparator: (provided, state) => ({
    display: "none",
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: 20,
  }),
}
const airportCustomSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: "transparent",
    backgroundColor: "#EDF2F7",
    padding: "8px",
    "&:hover": {
      backgroundColor: "#F7FAFC",
    },
    width: "auto",
  }),
  indicatorSeparator: (provided, state) => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    display: "none",
  })
}

const AirportSelect = ({ id, onChange, value, dropUp, isStarting }) => {
  const parseAirports = (airports) => {
    const abbvMap = {
      HI: "Hawaii",
      CA: "California",
      NM: "New Mexico",
      CO: "Colorado",
      WA: "Washington",
      AZ: "Arizona",
      UT: "Utah",
      OR: "Oregon",
      NV: "Nevada",
      AK: "Alaska",
      "Mexico": "Mexico",
      "Canada": "Canada",
    }
    // Transform into object
    let data = airports.map(info => {
      let data = info.split(" - ")
      let state = data[1].split(", ")[1]
      return {
        name: data[0],
        location: data[1],
        city: data[1].split(",")[0],
        state: state,
        code: data[2],
        full: info,
        countryPriority: (state !== "Canada" && state !== "Mexico") ? 1 : state === "Canada" ? 2 : 3,
      }
    })
    // Sort by country, then state, then lexicographically
    data.sort((a, b) => {
      if (a.countryPriority !== b.countryPriority) {
        return a.countryPriority - b.countryPriority
      }
      if (a.state !== b.state) {
        return a.state.localeCompare(b.state)
      }
      return a.name.localeCompare(b.name)
    })

    // Transform into options parsable by react select
    let options = []
    let stateIndex = -1
    data.forEach((airport, i) => {
      if (i == 0 || options[stateIndex].label !== abbvMap[airport.state]) {
        options.push({
          label: abbvMap[airport.state],
          options: [],
        })
        stateIndex++
      }
      options[stateIndex].options.push({
        label: `${airport.name} - ${airport.city}, ${abbvMap[airport.state]} - ${airport.code}`,
        value: airport.code,
        ...airport,
      })

    })
    return options

  }
  const airports = [
    "Albuquerque International Sunport - Albuquerque, NM - ABQ",
    "Denver International Airport - Denver, CO - DEN",
    "Las Vegas McCarran International Airport - Las Vegas, NV - LAS",
    "Los Angeles International Airport - Los Angeles, CA - LAX",
    "Phoenix Sky Harbor International Airport - Phoenix, AZ - PHX",
    "San Francisco International Airport - San Fransisco, CA - SFO",
    "Seattle-Tacoma International Airport - SeaTac, WA - SEA",
    "Portland International Airport - Portland, OR - PDX",
    "Oakland International Airport - Oakland, CA - OAK",
    "Salt Lake City International Airport - Salt Lake City, UT - SLC",
    "San Diego International Airport - San Diego, CA - SAN",
    "Honolulu International Airport - Honolulu, HI - HNL",
    "Kona International Airport - Kailua, HI - KOA",
    "Anchorage International Airport - Anchorage, AK - ANC",
    "Fairbanks International Airport - Fairbanks, AK - FAI",
    "Tijuana International Airport - Tijuana, Mexico - TIJ",
    "Puerto Vallarta International Airport - Puerto Vallarta, Mexico - PVR",
    "Vancouver International Airport - British Columbia, Canada - YVR",
    "Toronto Pearson International Airport - Ontario, Canada - YYZ",
  ]
  const options = parseAirports(airports)
  const customFilterOption = (option, rawInput) => {
    const words = rawInput.split(" ")
    return words.reduce(
      (acc, cur) => acc && option.label.toLowerCase().includes(cur.toLowerCase()),
      true,
    )
  }
  const Option = props => {
    return (
      <components.Option {...props}>
        <b>{props.data.code} - {props.data.name}</b><br />
        <span className={props.isSelected ? "" : "text-muted"}>{props.data.location}</span>
      </components.Option>
    )
  }
  const SingleValue = ({ children, ...props }) => {
    return (
      <components.SingleValue {...props}>{props.data.code + " - " + props.data.name}</components.SingleValue>
    )
  }
  const getOptWithValue = (value) => {
    let result = ""
    options.forEach(el => {
      if (el.options.filter(opt => opt.code === value)[0])
        result = el.options.filter(opt => opt.code === value)[0]
    })
    return result

  }
  return (

    <Select id={id}
            styles={airportCustomSelectStyles}
            filterOption={customFilterOption}
            options={options}
            menuPlacement={dropUp ? "top" : "auto"}
            components={{
              Option,
              SingleValue,
            }}
            noOptionsMessage={() => <><b>It looks like we do not fly to that airport yet!</b> Are you sure you spelled
              the name correctly?</>}
            placeholder={isStarting ? "Choose a starting airport" : "Choose a destination airport"}
            value={getOptWithValue(value)}
            onChange={(val) => onChange(val.code)}
    />

  )
}

const roundTripOptions = [
  { label: "Round Trip", value: "rt" },
  { label: "One Way", value: "ow" },
]

const passengersOptions = [
  { label: "1 Passenger", value: 1 },
  { label: "2 Passengers", value: 2 },
  { label: "3 Passengers", value: 3 },
  { label: "4 Passengers", value: 4 },
  { label: "5 Passengers", value: 5 },
  { label: "6 Passengers", value: 6 },
  { label: "7 Passengers", value: 7 },
  { label: "8 Passengers", value: 8 },
  { label: "9 Passengers", value: 9 },
]

const flightClassOptions = [
  { label: "Economy", value: "economy" },
  { label: "Business", value: "business" },
  { label: "First Class", value: "first" },
]

const BookingForm = ({ onSubmit, dropUp, defaultValues, className, style }) => {
  defaultValues = defaultValues || {}
  const [roundTrip, setRoundTrip] = React.useState(defaultValues.roundTrip || roundTripOptions[0])
  const [passengers, setPassengers] = React.useState(defaultValues.passengers || passengersOptions[0])
  const [flightClass, setFlightClass] = React.useState(defaultValues.flightClass || flightClassOptions[0])
  const [dates, setDates] = React.useState([defaultValues.startDate || "", defaultValues.endDate || ""])
  const [airports, setAirports] = React.useState([defaultValues.departAirport || "", defaultValues.arriveAirport || ""])
  const datepickerOptions = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    mode: "single",
    minDate: "today",
    maxDate: "2021-06-30",
  }

  return (
    <div className="px-4">
      <div className={classNames("max-w-4xl mx-auto bg-white p-4 sm:p-8 shadow-lg rounded", className)} style={style}>
        <form>
          <div className="block sm:inline-block " style={{ width: "130px" }}> {/* eww ugly magic number */}
            <Select
              styles={customSelectStyles}
              options={roundTripOptions}
              value={roundTrip}
              onChange={(v) => setRoundTrip(v)} />
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-6 block inline-block w-40">
            <Select
              styles={customSelectStyles}
              options={passengersOptions}
              value={passengers}
              onChange={(v) => setPassengers(v)} />
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-6 block sm:inline-block w-32">
            <Select
              styles={customSelectStyles}
              options={flightClassOptions}
              value={flightClass}
              onChange={(v) => setFlightClass(v)} />
          </div>
          <div className="flex flex-wrap justify-center mt-3">
            <div className="flex-1 booking-form-left-select">
              <AirportSelect id="depart"
                             onChange={(val) =>
                               setAirports(prevState => [val, prevState[1]])
                             }
                             value={airports[0]}
                             dropUp={dropUp}
                             isStarting
              />
            </div>
            <div className="sm:hidden" style={{flexBasis: "100%"}}/>
            <button className="relative z-10 self-center inline-block w-10 h-10 my-2 sm:my-0 rounded-full flex items-center justify-center bg-blue-50 sm:bg-white"
                    onClick={(e) => {
                      e.preventDefault();
                      setAirports((oldState) => {
                        let newState = oldState.slice();
                        // swap first and second elements
                        newState.unshift(newState.pop());
                        return newState;
                      });
                    }}>
              <label className="sr-only">Swap</label>
              <FontAwesomeIcon className="text-blue-800" icon={faExchangeAlt} />
            </button>
            <div className="sm:hidden" style={{flexBasis: "100%"}}/>
            <div className="flex-1 booking-form-right-select">
              {/*<Form.Control*/}
              {/*  hidden*/}
              {/*  isInvalid={airports[0] != "" && airports[0] == airports[1]}*/}
              {/*></Form.Control>*/}
              <AirportSelect
                id="arrive"
                onChange={(val) =>
                  setAirports(prevState => [prevState[0], val])
                }
                value={airports[1]}
                dropUp={dropUp}

              />

              {/*<Form.Control.Feedback type="invalid">*/}
              {/*  Your arrival airport cannot be the same as your departure airport!*/}
              {/*</Form.Control.Feedback>*/}
            </div>
            <div className="md:hidden" style={{flexBasis: "100%"}}/>
            <span className="mt-2 md:mt-0 md:ml-4 inline-flex rounded-md shadow-sm">
              <button type="button"
                      className={classNames(
                        "inline-flex items-center px-6 py-2 border border-transparent text-base leading-6",
                        "font-medium rounded-md text-green-800 bg-green-200 hover:bg-green-100 focus:outline-none",
                        "focus:border-green-200 focus:shadow-outline-green active:bg-green-200 transition ease-in-out duration-150"
                      )}>
                Search
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm
