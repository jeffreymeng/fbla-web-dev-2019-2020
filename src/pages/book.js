import React, { useCallback, useContext, useEffect } from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BookingForm from "../components/BookingForm"
import { navigate } from "gatsby-link"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"
import FlightResults from "../components/FlightResults"
import ConfirmFlightModal from "../components/ConfirmFlightModal"
import Transition from "../components/Transition"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import ServerContext from "../context/ServerContext"


const SuggestedFlight = ({ title, img, flight, onClick, children }) => {
  return (
    <div className="cursor-pointer rounded overflow-hidden shadow-lg bg-white transition ease-in-out duration-300 hover:shadow-2xl" onClick={onClick}>
      <div className="h-64 lg:h-48">
        {/*todo center this?*/}
        <Img className="w-full h-full object-cover" fluid={img}
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
  const server = useContext(ServerContext);
  const [bookingData, setBookingData] = React.useState(null)
  // const [selectedFlight, setSelectedFlight] = React.useState(null);
  const [departFlight, setDepartFlight] = React.useState(null);
  const [arriveFlight, setArriveFlight] = React.useState(null);
  const [selectedTrip, setSelectedTrip] = React.useState(null);
  const [showBookingModal, setShowBookingModal] = React.useState(false);
  const [showCheckoutBanner, setShowCheckoutBanner] = React.useState(false); // todo make not false


  const handleConfirmedBooking = () => {
    // console.log(departFlight, arriveFlight)
    server.updateCheckoutState({
      depart:departFlight,
      arrive:arriveFlight,
      bookingData
    }).then(() => {
      navigate("checkout")
    });
  }
  const returnTripData = Object.assign({}, bookingData);
  // swap
  [returnTripData.departAirport, returnTripData.arriveAirport] = [returnTripData.arriveAirport, returnTripData.departAirport];
  return (
    <Layout>
      <SEO
        title="Book Now"
      />

      <div className="pt-16 pb-6 sm:pt-32 sm:pb-12 relative z-40">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden -z-10">
          <Img className="h-full" fluid={data.file.childImageSharp.fluid} />
        </div>
        <Fade bottom appear>
        <h1
          className="mb-8 sm:mb-16 px-4 text-center text-white text-4xl leading-10 font-bold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">Where
          will we be flying today?</h1>

        <div>
          <BookingForm
            onSubmit={(d) => setBookingData(d)}
            defaultValues={location.state || {}}
            dateValue={[bookingData?.startDate || new Date(), bookingData?.endDate || new Date(new Date().getTime() + 24 * 60 * 60 * 1000)]}
            onDateValueChange={(v) => setBookingData(o => {
              let clone = Object.assign({}, o);
              clone.startDate = v[0];
              clone.endDate = v[1];
              return clone;
            })}
            featuredAirport={selectedTrip}
            className="-mb-40 sm:-mb-32 px-4" />
        </div>
        </Fade>
      </div>

      <div className="bg-gray-100 pt-40 sm:pt-32 pb-10 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {
            bookingData !== null &&
            <>
              {
                <FlightResults
                  title={bookingData.roundTrip==="rt"?"Select a departure flight":null}
                  value={bookingData}
                  searchedClass={bookingData.flightClass}
                  onFlightSelected={(f) => setDepartFlight(f)}
                  isDepartResult={true}
                  // onDateChange={(d) => {
                  //   setBookingData(o => {
                  //     let clone = Object.assign({}, o);
                  //     clone.startDate = d;
                  //     return clone;
                  //   })
                  // }}
                />
              }
              {
                bookingData.roundTrip ==="rt"&&
               <>
                 <FlightResults
                  className="mt-8"
                  title="Select a return flight"
                  value={returnTripData}
                  searchedClass={bookingData.flightClass}
                  isDepartResult={false}
                  onDateChange={(d) => {
                    setBookingData(o => {
                      let clone = Object.assign({}, o);
                      clone.endDate = d;
                      return clone;
                    })
                  }}
                  onFlightSelected={(f) => setArriveFlight(f)}/>

                  </>
              }
              <div className="flex justify-end py-3">
              <button className="flex justify-center px-5 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" onClick={() => setShowBookingModal(true)} disabled={!departFlight || (!arriveFlight&&bookingData.roundTrip==="rt")}>Checkout</button>
              </div>
            </>
          }

          {
            bookingData === null &&
            (
              <>

                <div className="z-0">
                <Fade bottom appear>
                <h2 className="uppercase text-indigo-700 font-bold mb-4">Featured Trips</h2>
               
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  <SuggestedFlight title="The Northern Lights" img={data.northLight.childImageSharp.fluid} flight="FAI" onClick={()=>setSelectedTrip("FAI")}>
                    A spectular dance of solar wind in the magnetosphere brought us this magnificent view. Fly to Fairbanks, Alaska to experience the awe yourself!
                  </SuggestedFlight>
                  <SuggestedFlight title="The Golden City" img={data.goldCity.childImageSharp.fluid} flight="LAS" onClick={()=>setSelectedTrip("LAS")}>
                    If the enormous buildings, skyline, and beautiful buildings aren't enough to take your breath away, the vibrance of gold, in all forms, is bound to draw you in. That's Vegas, baby.
                  </SuggestedFlight>
                  <SuggestedFlight title="The Flight of the Balloons" img={data.bigBalloons.childImageSharp.fluid} flight="ABQ" onClick={()=>setSelectedTrip("ABQ")}>
                    Travel to Albuquerque to witness the International Balloon Fiesta, a festival of color, culture, celebration. Where will your flights take you?   
                  </SuggestedFlight>
                  <SuggestedFlight title="The Islands of Aloha" img={data.hawaii.childImageSharp.fluid} flight="HNL" onClick={()=>setSelectedTrip("HNL")}>
                    With the best beaches, foods, and natural beauties to be found in the US, Hawaii is a must for the frequent traveler, the once-in-a-lifetime honeymoon, and everything in between.
                  </SuggestedFlight>
                  <SuggestedFlight title="The CN Tower" img={data.cnTower.childImageSharp.fluid} flight="YVR" onClick={()=>setSelectedTrip("YVR")}>
                    Ontario holds many treasures, and one you cannot miss is the CN Tower, once the tallest tower ever. Even for the faint of heart, it's an experience worth every penny.
                  </SuggestedFlight>
                  <SuggestedFlight title="The Golden Gate" img={data.goldenGate.childImageSharp.fluid} flight="SFO" onClick={()=>setSelectedTrip("SFO")}>
                    California holds many of the most famous attractions and the Golden Gate is one of them. With foggy mornings and a cool ocean breeze at all times, you never know where this bridge will take you.
                  </SuggestedFlight>
                </div>
              </Fade>
              </div>
              </>
            )
          }
        </div>
      </div>

      {/* BEGIN CART/CHECKOUT BANNER */}
      <Transition
        show={showCheckoutBanner}
        enter="ease-out duration-500"
        enterFrom="opacity-0 scale-95 translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="ease-in duration-300"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 translate-y-2"
        className="transition transform fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-4">
          <div className="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <p className="ml-3 font-medium text-white truncate">
                  <span className="text-gray-400">
                    <strong className="text-white font-semibold mr-8">One flight selected</strong>
                    <span>SFO to LAX</span>
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <div className="rounded-md shadow-sm">
                  <a href="https://tailwindui.com?utm_source=tailwindcss&amp;utm_medium=footer-banner" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      {/* END CART/CHECKOUT BANNER */}

      <ConfirmFlightModal
        // flight={selectedFlight}
        loading={server.loading}
        price={bookingData && departFlight?.price[["economy", "business", "first"].indexOf(bookingData?.flightClass)] + (bookingData.roundTrip === "rt" ? arriveFlight?.price[["economy", "business", "first"].indexOf(bookingData?.flightClass)] : 0)}
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
    },
    bigBalloons: file(relativePath: { eq: "bigBalloons.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    northLight: file(relativePath: { eq: "northLight.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    goldCity: file(relativePath: { eq: "goldCity.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    hawaii: file(relativePath: { eq: "hawaii.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    cnTower: file(relativePath: { eq: "cnTower.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    goldenGate: file(relativePath: { eq: "goldenGate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`