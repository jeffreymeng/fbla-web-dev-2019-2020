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
const flightData = {
  SFO: {
    code: "SFO",
    flights:
      {
      SLC: {
        code: "SLC",
        schedule: [
          {
            days: "MWF",
            times: ["8am", "12:20pm"]
          },
          {
            days: "SaSu",
            times: ["8am", "2:45pm"]
          },
          {
            days: "Sa",
            times: ["6pm"]
          }
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








export default flightData;