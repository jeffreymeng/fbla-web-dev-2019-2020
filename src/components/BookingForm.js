import React from "react"
import "../styles/index.scss"
import "../styles/flatpickr/light.scss"
import Flatpickr from "react-flatpickr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import Select, {components} from 'react-select'
import classNames from "classnames";



const AirportSelect = ({id, onChange, value, dropUp}) => {
  const parseAirports = (airports) => {
    const abbvMap = {
      HI:"Hawaii",
      CA:"California",
      NM:"New Mexico",
      CO:"Colorado",
      WA:"Washington",
      AZ:"Arizona",
      UT:"Utah",
      OR:"Oregon",
      NV:"Nevada",
      AK:"Alaska",
      "Mexico":"Mexico",
      "Canada":"Canada",
    }
    // Transform into object
    let data = airports.map(info => {
      let data = info.split(" - ");
      let state = data[1].split(", ")[1];
      return {
        name: data[0],
        location:data[1],
        city:data[1].split(",")[0],
        state:state,
        code:data[2],
        full:info,
        countryPriority:(state !== "Canada" && state !== "Mexico") ? 1 : state === "Canada" ? 2 : 3
      }
    });
    // Sort by country, then state, then lexicographically
    data.sort((a, b) => {
      if (a.countryPriority !== b.countryPriority) {
        return a.countryPriority - b.countryPriority;
      }
      if (a.state !== b.state) {
        return a.state.localeCompare(b.state);
      }
      return a.name.localeCompare(b.name);
    });

    // Transform into options parsable by react select
    let options = [];
    let stateIndex = -1;
    data.forEach((airport, i) => {
      if (i == 0 || options[stateIndex].label !== abbvMap[airport.state]) {
        options.push({
          label:abbvMap[airport.state],
          options:[]
        });
        stateIndex ++;
      }
      options[stateIndex].options.push({
        label:`${airport.name} - ${airport.city}, ${abbvMap[airport.state]} - ${airport.code}`,
        value:airport.code,
        ...airport
      });

    });
    return options;

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
  const options = parseAirports(airports);
  const customFilterOption = (option, rawInput) => {
    const words = rawInput.split(' ');
    return words.reduce(
      (acc, cur) => acc && option.label.toLowerCase().includes(cur.toLowerCase()),
      true,
    );
  };
  const Option = props => {
    return (
      <components.Option {...props}>
        <b>{props.data.code} - {props.data.name}</b><br />
        <span className={props.isSelected ? "" : "text-muted"}>{props.data.location}</span>
      </components.Option>
    );
  };
  const SingleValue = ({ children, ...props }) => {
    return (
      <components.SingleValue {...props}>{props.data.code + " - " + props.data.name}</components.SingleValue>
    );
  }
  const getOptWithValue = (value) => {
    let result = "";
    options.forEach(el => {
      if (el.options.filter(opt => opt.code === value)[0])
        result = el.options.filter(opt => opt.code === value)[0];
    });
    return result;

  }
  return (

    <Select id={id}
            filterOption={customFilterOption}
            options={options}
            menuPlacement={dropUp ? "top" : "auto"}
            components={{
              Option,
              SingleValue
            }}
            noOptionsMessage={() => <><b>It looks like we do not fly to that airport yet!</b> Are you sure you spelled the name correctly?</>}
            placeholder={"Choose an airport..."}
            value={getOptWithValue(value)}
            onChange={(val) => onChange(val.code)}
    />

  )
}

const BookingForm = ({ onSubmit, dropUp, defaultValues, className, style }) => {
  defaultValues = defaultValues || {};
  const [isRoundTrip, setIsRoundTrip] = React.useState(defaultValues.isRoundTrip || true);
  const [passengers, setPassengers] = React.useState(defaultValues.passengers || 1);
  const [dates, setDates] = React.useState([defaultValues.startDate || "", defaultValues.endDate || ""]);
  const [airports, setAirports] = React.useState([defaultValues.departAirport || "", defaultValues.arriveAirport || ""]);
  const datepickerOptions = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    mode: "single",
    minDate: "today",
    maxDate: "2021-06-30"
  };

  return (
    <div className={classNames("max-w-3xl mx-auto bg-white p-12 shadow-lg", className)} style={style}>
      <form>
        <select
          className="block appearance-none"
          value={isRoundTrip ? "rt" : "ow"}
          onChange={(e) => setIsRoundTrip(e.target.value === "rt")}
        >
          <option value="rt">Round Trip</option>
          <option value="ow">One Way</option>
        </select>
      </form>
    </div>
  )
}

export default BookingForm;
