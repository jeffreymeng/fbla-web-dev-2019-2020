import * as seedrandom from "seedrandom";

seedrandom('I like planes', { global: true });


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
const airportCodes = {};
airports.forEach(data => {
  let tokens = data.split(" - ");
  airportCodes[tokens[2]] = {
    name:tokens[0],
    location:tokens[1],
    code:tokens[2]
  }
});
const dayOfWeekMap = {
  M:"Monday",
  Tu:"Tuesday",
  W:"Wednesday",
  Th:"Thursday",
  F:"Friday",
  Sa:"Saturday",
  Su:"Sunday"
}
let flightData = {
  SFO: {
    code: "SFO",
    flights:
      {
      SLC: {
          code: "SLC",
          time: "2:30",
          schedule: [
            {
              days: "MWF",
              times: ["8am", "12:20pm"],
              aircraft: "Boeing 737-700",
              price:800,
            },
            {
              days: "SaSu",
              times: ["8am", "2:45pm"],
              aircraft: "Boeing 737-700",
              price:900,

            },
            {
              days: "Sa",
              times: ["6pm"],
              aircraft:"Boeing 787-7 Dreamliner",
              price:900,
            }
          ]
        },
        LAS: {
          code: "LAS",
          time: "1:20",
          schedule: [
            {
              days: "WThFSaSu",
              times: ["7am", "11am", "5pm"],
              aircraft: "Boeing 737-700",
              price: 480,
            },
            {
              days: "MTu",
              times: ["7am", "2:45pm"],
              aircraft: "Boeing 737-700",
              price: 220,

            }
          ]
        },

    }
  },
  LAS:{
    code:"LAS",
    flights:{
      SLC:{
        code:"SLC",
        time:"0:45",
        schedule: [
          {
            days:"MTuWThFSaSu",
            times:["9am"],
            aircraft: "Boeing 737-700",
            price:210,
          },
          {
            days:"MTuWThFSaSu",
            times:["5pm", "7pm"],
            aircraft: "Boeing 737-700",
            price:400,
          },
          {
            days:"ThFSaSu",
            times:["1:30pm"],
            aircraft: "Boeing 787-8 Dreamliner",
            price:490,
          }
        ]
      }
    }
  },
  SLC:{
    code:"SLC",
    flights:{
      SFO:{
        code:"SFO",
        time:"2:40",
        schedule: [
          {
            days:"MTuWThFSaSu",
            times:["9am", "10:10pm", "5pm"],
            aircraft: "Boeing 787-8 Dreamliner",
            price:1080,
          },

        ]
      }
    }
  }

};
// "SFO-SLC 787-300 1hr 30min MWF: 12:20pm SaSu: 8am 2:45pm Sa: 6pm"
// const parseFlights = (flights) => {
//   flights.forEach((string) => {
//     let tokens = flights.split(" ");
//     let airports = tokens[0].split("-");
//     let plane = ""
//   })
// };



// BEGIN GENERATING FLIGHTS //
// console.group("Generating Flights...");

let locations = { OAK: { latitude: 37.804363, longitude: -122.271111, isHub:false},
  LAX: { latitude: 34.052235, longitude: -118.243683, isHub:false},
  FAI: { latitude: 64.837776, longitude: -147.716385, isHub:false},
  ABQ: { latitude: 35.081206, longitude: -106.654514, isHub:false},
  ANC: { latitude: 61.208400, longitude: -149.890815, isHub:false},
  DEN: { latitude: 39.752642, longitude: -104.967042, isHub:true},
  HNL: { latitude: 21.329299, longitude: -157.919581, isHub:false},
  KOA: { latitude: 19.740591, longitude: -156.043164, isHub:false},
  LAS: { latitude: 36.174819, longitude: -115.141362, isHub:false},
  PDX: { latitude: 45.505649, longitude: -122.678018, isHub:false},
  PHX: { latitude: 33.437134, longitude: -112.008003, isHub:true},
  PVR: { latitude: 20.680468, longitude: -105.252709, isHub:false},
  SAN: { latitude: 32.733593, longitude: -117.193390, isHub:false},
  SEA: { latitude: 47.605999, longitude: -122.324905, isHub:false},
  SFO: { latitude: 37.621950, longitude: -122.380189, isHub:true},
  SLC: { latitude: 40.753444, longitude: -111.881691, isHub:false},
  TIJ: { latitude: 32.542879, longitude: -116.973975, isHub:false},
  YVR: { latitude: 49.196522, longitude: -123.182722, isHub:true},
  YYZ: { latitude: 43.678881, longitude: -79.628596, isHub:false}}

// https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
function randn_bm() {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random();
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  // changed from 0, 1 to 0.25, 0.75
  if (num > 0.75 || num < 0.25) return randn_bm(); // resample between 0 and 1
  num = (num-0.25)*2;
  return num;
}

// https://www.geodatasource.com/developers/javascript
const calcDistanceBetween = (a, b) => {
  let lat1 = locations[a].latitude, lon1 = locations[a].longitude,
    lat2 = locations[b].latitude, lon2 = locations[b].longitude, unit = "K";
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0;
  }
  else {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit==="K") { dist = dist * 1.609344 }
    if (unit==="N") { dist = dist * 0.8684 }
    return dist;
  }
}
const genPrice = (distance) => {
  let basePrice = 88;
  let costPerKM = 0.11;

  let additionalCost = distance*costPerKM;
  let variance = (randn_bm()-0.5)*0.5*additionalCost;

  return basePrice + additionalCost - variance;
}

const codes = airports.map(x => x.split(" - ")[2]);
// console.log(codes);
const daysOfWeek = Object.keys(dayOfWeekMap);
// console.log(daysOfWeek);
const aircrafts = ["Boeing 787-8 Dreamliner", "Boeing 787-9 Dreamliner", "Boeing 787-10 Dreamliner", "Boeing 777-200", "Boeing 777-300ER", "Boeing 767-300ER", "Boeing 767-400ER", "Boeing 757-200", "Boeing 757-300", "Boeing 737-700", "Boeing 737-800", "Boeing 737-900", "Airbus 319", "Airbus 320", "Bombardier CRJ-200", "Bombardier CRJ-550", "Bombardier CRJ-700", "EMB 170", "EMB 175", "EMB 145"];
const genTime = (minHr = 0, maxHr = 24) => {
  let hr = Math.ceil(Math.random()*12);
  let am = Math.random() >= 0.5;

  let realHr = hr%12 + (am ? 0 : 12);
  if (realHr < minHr || realHr > maxHr) return genTime(minHr, maxHr);

  if (hr < 10) hr = "0" + hr;
  let min = Math.ceil(Math.random()*60/5)*5%60;
  if (min < 10) min = "0" + min;
  return `${hr}:${min}${am?"am":"pm"}`;
}

let getFlightSchedule = (from, to, count) => {
  let flights = [];
  let chosenTimes = [];
  if (count === 1) chosenTimes = [genTime(8, 18)];
  else if (count === 2) chosenTimes = [genTime(7, 12), genTime(12, 18)];
  else if (count === 3) chosenTimes = [genTime(6, 11), genTime(11, 16), genTime(16, 21)];
  let chosenTimes2 = [];
  if (count === 1) chosenTimes2 = [genTime(8, 18)];
  else if (count === 2) chosenTimes2 = [genTime(7, 12), genTime(12, 18)];
  else if (count === 3) chosenTimes2 = [genTime(6, 11), genTime(11, 16), genTime(16, 21)];
  for (let i = 0; i < count; i++) {
    let days = "";
    let mask = 0;
    for (let j = 0; j < 2 + Math.random() * (4); j++) {
      mask |= (1 << Math.floor(Math.random() * 7));
    }
    for (let j = 0; j < 7; j++) {
      if (mask & (1 << j)) {
        days += daysOfWeek[j];
      }
    }
    let times = [chosenTimes[i]];
    flights.push({
      days,
      times,
      aircraft: aircrafts[Math.floor(Math.random() * aircrafts.length)],
      price: genPrice(calcDistanceBetween(from, to))
    });

    days = "";
    let mask2 = (1 << 7)-1; mask2 ^= mask;
    if (mask2 === 0) continue;
    for (let j = 0; j < 7; j++) {
      if (mask2 & (1 << j)) {
        days += daysOfWeek[j];
      }
    }
    let times2 = [chosenTimes2[i]];
    console.log(days, times2);
    flights.push({
      days,
      times: times2,
      aircraft: aircrafts[Math.floor(Math.random() * aircrafts.length)],
      price: genPrice(calcDistanceBetween(from, to))
    });
  }
  return flights;
}

let genTimeOfFlight = (from, to) => {
  let planeSpeed = 800; // kph
  let dist = calcDistanceBetween(from, to);
  let minutes = dist/planeSpeed*60;
  let variance = (randn_bm()-0.5)*0.3*minutes;
  minutes += variance;

  let hr = Math.round(minutes/60);
  if (hr < 10) hr = "0" + hr;
  let min = Math.round(minutes%60);
  if (min < 10) min = "0" + min;
  return `${hr}:${min}`;
}

let toConnect = {};
for (let startAirport of codes) {
  if (locations[startAirport].isHub) toConnect[startAirport] = [];
}
for (let startAirport of codes) {
  let nearestHub = 1000000000;
  for (let code of codes) {
    if (code === startAirport) continue;
    if (locations[code].isHub) nearestHub = Math.min(nearestHub, calcDistanceBetween(code, startAirport));
  }
  for (let code of codes) {
    if (nearestHub === calcDistanceBetween(code, startAirport)) {
      toConnect[code].push(startAirport);
    }
  }
}

let getFlightsFromAirport = blacklist => {
  let flights = {};
  let nearestHub = 1000000000;
  for (let code of codes) {
    if (code === blacklist) continue;
    if (locations[code].isHub) nearestHub = Math.min(nearestHub, calcDistanceBetween(code, blacklist));
  }
  for (let code of codes) {
    if (code === blacklist) continue;
    let numFlights = 0;
    if (calcDistanceBetween(code, blacklist) <= nearestHub) numFlights = 1;
    if (locations[blacklist].isHub) numFlights = 2;
    // if (locations[blacklist].isHub && toConnect[blacklist].includes(code)) numFlights = 2;
    if (locations[code].isHub) numFlights = 3;
    if (numFlights === 0) continue;
    flights[code] = {
      code,
      time: genTimeOfFlight(blacklist, code),
      schedule: getFlightSchedule(blacklist, code, numFlights)
    };
  }
  return flights;
};

flightData = {};
for (let code of codes) {
  flightData[code] = {
    code,
    flights: getFlightsFromAirport(code)
  };
}
// console.log(flightData);

// console.groupEnd();
// END GENERATING FLIGHTS //




export default flightData;