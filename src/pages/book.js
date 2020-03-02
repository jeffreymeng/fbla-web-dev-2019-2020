import React, { useCallback, useEffect } from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BookingForm from "../components/BookingForm"
import { navigate } from "gatsby-link"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import FlightResults from "../components/FlightResults"
import ConfirmFlightModal from "../components/ConfirmFlightModal"
import bigBalloons from "../images/bigBalloons.jpg"
import northLight from "../images/northLight.jpg"
import goldCity from "../images/goldCity.png"
import hawaii from "../images/hawaii.jpg"
import cnTower from "../images/cnTower.jpg"
import goldenGate from "../images/goldenGate.jpg"

const SuggestedFlight = ({ title, img, flight, children }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white transition ease-in-out duration-300 hover:shadow-2xl">
      <div className="h-64 lg:h-48">
        {/*todo center this?*/}
        <img className="w-full h-full object-cover" src={img}
             alt="Sunset in the mountains" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {children}
        </p>
      </div>
      <span
        className="inline-block mx-6 mb-5 px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
        {flight}
      </span>
    </div>
  )
}

const BookingPage = ({ data, location }) => {
  const [bookingData, setBookingData] = React.useState(null)
  const [selectedFlight, setSelectedFlight] = React.useState(null);
  const [showBookingModal, setShowBookingModal] = React.useState(false);

  const handleFlightSelected = (flight) => {
    setSelectedFlight(flight);
    setShowBookingModal(true);
  };

  return (
    <Layout>
      <SEO
        title="Book Now"
      />

      <div className="pt-16 pb-6 sm:pt-32 sm:pb-12 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden -z-10">
          <Img className="h-full" fluid={data.file.childImageSharp.fluid} />
        </div>
        <h1
          className="mb-8 sm:mb-16 px-4 text-center text-white text-4xl leading-10 font-bold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">Where
          will we be flying today?</h1>

        <div>
          <BookingForm onSubmit={(d) => setBookingData(d)} defaultValues={location.state} className="-mb-40 sm:-mb-32" />
        </div>
      </div>

      <div className="bg-gray-100 pt-40 sm:pt-32 pb-10 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {
            bookingData !== null &&
            <FlightResults
              value={bookingData}
              searchedClass={bookingData.flightClass}
              onFlightSelected={handleFlightSelected}/>
          }

          {
            bookingData === null &&
            (
              <>
                <h2 className="uppercase text-indigo-700 font-bold mb-4">Featured Trips</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <SuggestedFlight title="The Northern Lights" img={northLight} flight="FAI">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores
                    doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit
                    tempore ut?
                  </SuggestedFlight>
                  <SuggestedFlight title="The Golden City" img={goldCity} flight="LAS">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores
                    doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit
                    tempore ut?
                  </SuggestedFlight>
                  <SuggestedFlight title="The Flight of the Balloons" img={bigBalloons} flight="ABQ">
                    Travel to Albuquerque to witness the International Balloon Fiesta, a festival of color, culture, celebration. Where will your flights take you?   
                  </SuggestedFlight>
                  <SuggestedFlight title="The Lonely Islands" img={hawaii} flight="HNL">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores
                    doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit
                    tempore ut?
                  </SuggestedFlight>
                  <SuggestedFlight title="The CN Tower" img={cnTower} flight="YYZ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores
                    doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit
                    tempore ut?
                  </SuggestedFlight>
                  <SuggestedFlight title="The Golden Gate" img={goldenGate} flight="SFO">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores
                    doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit
                    tempore ut?
                  </SuggestedFlight>
                </div>
              </>
            )
          }
        </div>
      </div>

      <ConfirmFlightModal
        isOpen={showBookingModal}
        onConfirm={() => setShowBookingModal(false)}/>
    </Layout>
  )
}

export default BookingPage

export const query = graphql`
  query {
    file(relativePath: { eq: "bg_dark.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`