import React from "react";
import ServerContext from "../context/ServerContext"
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

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
    <Layout>
      <SEO title="My Flights"/>
    <h1>My Flights</h1>
  {flights.map(x => JSON.stringify(x))}

  </Layout>
  )
}

export default MyFlightsPage;