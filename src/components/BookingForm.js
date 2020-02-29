import React from "react"
import "../styles/index.scss"
import "../styles/flatpickr/light.scss"
import { Button, Col, Form } from "react-bootstrap"
import Flatpickr from "react-flatpickr";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import Select, {components} from 'react-select'



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

const BookingForm = ({ onSubmit, dropUp, defaultValues }) => {
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
    <Form>
      <Form.Row>
        <Form.Group as={Col} lg={2} sm={12} controlId="formTripType">
          <Form.Label >Trip Type</Form.Label>
          <Form.Control as="select" value={isRoundTrip ? "rt" : "ow"} onChange={(e) => setIsRoundTrip(e.target.value === "rt")}>
            <option value="rt">Round Trip</option>
            <option value="ow">One Way</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={isRoundTrip ? 6 : 12} lg={isRoundTrip ? 4 : 8} controlId="formStartDate">
          <Form.Label>{isRoundTrip ? "Start" : ""} Date</Form.Label>

          <Form.Control as={Flatpickr}
                        className="datepicker"
                        onChange={(date) => setDates(prevState => [date, prevState[1]])}
                        value={dates[0]}
                        options={datepickerOptions} placeholder={`Choose a${isRoundTrip ? " start" : "'"} date for your trip`}/>

        </Form.Group>
        <Form.Group as={Col} sm={6} lg={4} controlId="formEndDate" hidden={!isRoundTrip} >
          <Form.Label>End Date</Form.Label>

          <Form.Control as={Flatpickr}
                        className="datepicker"
                        onChange={(date) => setDates(prevState => [prevState[0], date])}
                        value={dates[1]}
                        options={datepickerOptions} placeholder={`Choose an end date for your trip`}
                        isInvalid={new Date(dates[0]).getTime() > new Date(dates[1]).getTime()}
          />

          <Form.Control.Feedback type="invalid">The end date cannot be before the start date! <a onClick={() => {
            setDates((oldState) => {
              let newState = oldState.slice();
              // swap first and second elements
              newState.unshift(newState.pop());
              return newState;
            })
          }}>Swap Dates</a></Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} sm={12} lg={2} controlId="formPassengers">
          <Form.Label>Passengers</Form.Label>
          <Form.Control type="number" min={1} value={passengers} onChange={(e) => setPassengers(e.target.value)}  isInvalid={passengers && (passengers < 1 || passengers > 9)} />
          <Form.Control.Feedback type="invalid">
            {passengers > 9 ? "For more than 9 passengers, please contact our group bookings office at 1 (800) 475-2048" : passengers < 1 ? "You must have at least 1 passenger!" : "Please enter a number between 1 and 9."}
          </Form.Control.Feedback>
        </Form.Group>

      </Form.Row>
      <Form.Row>

        <Form.Group as={Col}  lg={5} xs={9}>
          <Form.Label htmlFor="depart">Depart</Form.Label>
          <AirportSelect id="depart"
                         onChange={(val) =>
                           setAirports(prevState => [val, prevState[1]])
                         }
                         value={airports[0]}
                         dropUp={dropUp}
          />
        </Form.Group>
        <Form.Group as={Col}  lg={2} xs={3}>
          <Form.Label style={{
            visibility:"hidden"
          }}>Swap</Form.Label>
          <Button variant="secondary" block onClick={() => {
            setAirports((oldState) => {
              let newState = oldState.slice();
              // swap first and second elements
              newState.unshift(newState.pop());
              return newState;
            });
          }}>
            <span className="d-inline d-lg-none">Swap</span>
            <FontAwesomeIcon className="d-none d-lg-inline-block" icon={faExchangeAlt} />
          </Button>
        </Form.Group>
        <Form.Group as={Col}  lg={5} sm={12}>
          <Form.Label htmlFor="arrive">Arrive</Form.Label>
          <Form.Control
            hidden
            isInvalid={airports[0] != "" && airports[0] == airports[1]}
          ></Form.Control>
          <AirportSelect
            id="arrive"
            onChange={(val) =>
            setAirports(prevState => [prevState[0], val])
            }
            value={airports[1]}
            dropUp={dropUp}

          />

          <Form.Control.Feedback type="invalid">
            Your arrival airport cannot be the same as your departure airport!
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>


      <Button variant="primary" block onClick={() => {
        onSubmit({
          roundTrip:isRoundTrip,
          passengers,
          departAirport:airports[0],
          arriveAirport:airports[1],
          startDate:dates[0],
          endDate:(isRoundTrip ? dates[1] : undefined)
        })
      }}>
        Find Flights
      </Button>
    </Form>
  )
}

export default BookingForm;
