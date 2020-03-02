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

const SuggestedFlight = ({ title, img, flight, onClick, children }) => {
  return (
    <div className="cursor-pointer rounded overflow-hidden shadow-lg bg-white transition ease-in-out duration-300 hover:shadow-2xl" onClick={onClick}>
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
  const [selectedTrip, setSelectedTrip] = React.useState(null);
  const [showBookingModal, setShowBookingModal] = React.useState(false);

  const handleFlightSelected = (flight) => {
    setSelectedFlight(flight);
    setShowBookingModal(true);
  };

  const handleConfirmedBooking = () => {
    setShowBookingModal(false);
    // TODO @jeffrey
  }

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
          <BookingForm
            onSubmit={(d) => setBookingData(d)}
            defaultValues={location.state}
            featuredAirport={selectedTrip}
            className="-mb-40 sm:-mb-32" />
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
                  <SuggestedFlight title="The Northern Lights" img={northLight} flight="FAI" onClick={()=>setSelectedTrip("FAI")}>
                    A spectular dance of solar wind in the magnetosphere brought us this magnificent view. Fly to Fairbanks, Alaska to experience the awe yourself!
                  </SuggestedFlight>
                  <SuggestedFlight title="The Golden City" img={goldCity} flight="LAS" onClick={()=>setSelectedTrip("LAS")}>
                    If the enormous buildings, skyline, and beautiful buildings aren't enough to take your breath away, the vibrance of gold, in all forms, is bound to draw you in. That's Vegas, baby.
                  </SuggestedFlight>
                  <SuggestedFlight title="The Flight of the Balloons" img={bigBalloons} flight="ABQ" onClick={()=>setSelectedTrip("ABQ")}>
                    Travel to Albuquerque to witness the International Balloon Fiesta, a festival of color, culture, celebration. Where will your flights take you?   
                  </SuggestedFlight>
                  <SuggestedFlight title="The Islands of Aloha" img={hawaii} flight="HNL" onClick={()=>setSelectedTrip("HNL")}>
                    With the best beaches, foods, and natural beauties to be found in the US, Hawaii is a must for the frequent traveler, the once-in-a-lifetime honeymoon, and everything in between.
                  </SuggestedFlight>
                  <SuggestedFlight title="The CN Tower" img={cnTower} flight="YYR" onClick={()=>setSelectedTrip("YYR")}>
                    Ontario holds many treasures, and one you cannot miss is the CN Tower, once the tallest tower ever. Even for the faint of heart, it's an experience worth every penny.
                  </SuggestedFlight>
                  <SuggestedFlight title="The Golden Gate" img={goldenGate} flight="SFO" onClick={()=>setSelectedTrip("SFO")}>
                    California holds many of the most famous attractions and the Golden Gate is one of them. With foggy mornings and a cool ocean breeze at all times, you never know where this bridge will take you.
                  </SuggestedFlight>
                </div>
              </>
            )
          }
        </div>
      </div>

      <ConfirmFlightModal
        flight={selectedFlight}
        selectedClass={bookingData?.flightClass}
        isOpen={showBookingModal}
        onConfirm={handleConfirmedBooking}
        onCancel={() => setShowBookingModal(false)}/>
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