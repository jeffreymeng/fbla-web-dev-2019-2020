import React from "react"
import ServerContext from "../context/ServerContext"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import FlightInfoCard from "../components/FlightInfoCard"

const MyFlightsPage = () => {
  const [flights, setFlights] = React.useState([])
  let server = React.useContext(ServerContext)
  React.useEffect(() => {
    server.user?.uid && server.getFlights().then((data) => {
      data = data.map(o => {
        return {
          depart: JSON.parse(o.depart),
          arrive: o.arrive && JSON.parse(o.arrive),
        }
      })
      setFlights(data)
      console.log(data)

    })
  }, [server.user])
  return (
    <Layout>
      <SEO title="My Flights"/>

      <div className="min-h-content-area flex flex-col bg-gray-50">
        <div className="bg-gray-800">
          <div className="md:flex md:items-center md:justify-between max-w-3xl mx-auto px-4 md:px-6 lg:px-8 pt-2 pb-6">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9">
                My Flights
              </h2>
            </div>
          </div>
        </div>
        <div className="w-100 flex-1 pt-8">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            {/*<pre>{flights.map(x => JSON.stringify(x, null, 2))}</pre>*/}
            {flights.map(x => <FlightInfoCard flight={x} className="mb-6" />)}
          </div>
        </div>
      </div>
    </Layout>
)
}

export default MyFlightsPage;