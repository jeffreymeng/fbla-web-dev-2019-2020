import React from "react";
import ServerContext from "../context/ServerContext"

const MyFlightsPage = () => {
  const [flights, setFlights] = React.useState([]);
  let server = React.useContext(ServerContext);
  React.useEffect(() => {
    server.user?.uid && server.getFlights().then((data) => {
      data = data.map(o => {
        return {
          depart:JSON.parse(o.depart),
          arrive:o.arrive && JSON.parse(o.arrive),
        }
      })
      setFlights(data)
      console.log(data)

    });
  }, [server.user])
  return (
    <>
    <h1>My Flights</h1>
  {flights.map(x => JSON.stringify(x))}

  </>
  )
}

export default MyFlightsPage;