import React, { useEffect } from "react"
import Layout from "../components/layout/layout"
import { Link } from "gatsby"
import ServerContext from "../context/ServerContext"

import "../styles/card.css"
import { navigate } from "../../.cache/gatsby-browser-entry"

const getDescriptionString = obj => {
  if (obj.layover) {
    return `${obj.airports[0]} to ${obj.airports[1]} (${obj.times[0]}), ${obj.layover} (${obj.times[1]}), ${obj.airports[1]} to ${obj.airports[2]} (${obj.times[2]})`
  } else {
    return `${obj.airports[0]} to ${obj.airports[1]} (${obj.length})`
  }
}

const CheckoutPage = ({ location }) => {
  const server = React.useContext(ServerContext)

  useEffect(() => {
    if (!server.user || !server.checkoutState) return
    if (window != null) {
      require("../card")
      new Card({
        // a selector or DOM element for the form where users will
        // be entering their information
        form: "#checkoutForm", // *required*
        // a selector or DOM element for the container
        // where you want the card to appear
        container: "#cardJS", // *required*

        formSelectors: {
          numberInput: "input#number", // optional — default input[name="number"]
          expiryInput: "input#expiry", // optional — default input[name="expiry"]
          cvcInput: "input#cvc", // optional — default input[name="cvc"]
          nameInput: "input#name", // optional - defaults input[name="name"]
        },

        width: 320, // optional — default 350px
        formatting: true, // optional - default true

        // Strings for translation - optional
        messages: {
          validDate: "valid\ndate", // optional - default 'valid\nthru'
          monthYear: "mm/yyyy", // optional - default 'month/year'
        },

        // Default placeholders for rendered fields - optional
        placeholders: {
          number: "•••• •••• •••• ••••",
          name: "Full Name",
          expiry: "••/••",
          cvc: "•••",
        },

        masks: {
          cardNumber: "•", // optional - mask card number
        },

        // if true, will log helpful messages for setting up Card
        debug: false, // optional - default false
      })
    }
  }, [server.user, server.checkoutState])

  let priceIdx = 0;
  if (server.checkoutState) {
    priceIdx = server.checkoutState.bookingData.flightClass==="economy"?0:(server.checkoutState.bookingData.flightClass==="business"?1:2);
  }
  let totPrice = 0;
  if (server.checkoutState) {
    totPrice = (server.checkoutState.depart.price[priceIdx] + (server.checkoutState.arrive ? server.checkoutState.arrive.price[priceIdx] : 0));
  }

  const handleSubmit = e => {
    e.preventDefault()
    server.pushFlights({
      depart: JSON.stringify(server.checkoutState.depart),
      arrive: JSON.stringify(server.checkoutState.arrive),
    }).then(() => navigate("/my-flights"));
    server.updateCheckoutState(null);
  }

  return (
    <Layout>
      <div className="min-h-content-area flex flex-col bg-gray-50">
        <div className="bg-gray-800">
          <div className="md:flex md:items-center md:justify-between max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-2 pb-6">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9">
                My Cart
              </h2>
            </div>
          </div>
        </div>
        <div className="w-100 flex-1 pt-8">
          {!server.user ? <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              Before you can continue, you need to <Link to="sign-in" className="">sign in</Link>
              {/*  or <Link to="sign-in" state={{*/}
              {/*continueTo:"checkout",*/}
              {/*continueState:server.checkoutState*/}
              {/*}}>create an account</Link>*/}
              !
            </div> :

            <>
              {(server.checkoutState == null || server.checkoutState == {}) && <p className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-3xl text-indigo-700 font-bold">Your cart is empty!</p>}
              {
                server.checkoutState &&
                <form id="checkoutForm" className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8" onSubmit={handleSubmit}>
                  <div className="lg:flex">
                    <div className="lg:w-72 lg:order-2">
                      <div className="text-purple-700 uppercase font-semibold">Total Cost</div>
                      <div className="text-6xl font-semibold mb-8">${totPrice}</div>

                      <div className="rounded overflow-hidden shadow-lg bg-white max-w-xs">
                        <div className="px-6 pt-4">
                          <div className="font-bold text-xl">{server.checkoutState.depart.airports.join(" — ")}</div>
                          <div className="text-gray-700 text-sm mb-2">{server.checkoutState.depart.aircraft.join(", ")}</div>
                          <p className="text-gray-700 text-base">
                            {getDescriptionString(server.checkoutState.depart)}
                          </p>
                        </div>
                        <div className="pl-6 pr-4 pt-2 pb-4 flex justify-between items-baseline">
                          <span className="text-purple-700 font-semibold">${server.checkoutState.depart.price[priceIdx]}</span>
                          <span className="inline-flex">
                            <button type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-600 hover:text-red-700 hover:bg-red-50 focus:outline-none focus:border-red-50 focus:shadow-outline-red active:bg-red-50 transition ease-in-out duration-150">
                              Remove
                            </button>
                          </span>
                        </div>
                      </div>

                      {
                        server.checkoutState.arrive &&
                        <div className="rounded overflow-hidden shadow-lg bg-white max-w-xs mt-4">
                          <div className="px-6 pt-4">
                            <div className="font-bold text-xl">{server.checkoutState.arrive.airports.join(" — ")}</div>
                            <div className="text-gray-700 text-sm mb-2">{server.checkoutState.arrive.aircraft.join(", ")}</div>
                            <p className="text-gray-700 text-base">
                              {getDescriptionString(server.checkoutState.arrive)}
                            </p>
                          </div>
                          <div className="pl-6 pr-4 pt-2 pb-4 flex justify-between items-baseline">
                            <span className="text-purple-700 font-semibold">${server.checkoutState.arrive.price[priceIdx]}</span>
                            <span className="inline-flex">
                            <button type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-600 hover:text-red-700 hover:bg-red-50 focus:outline-none focus:border-red-50 focus:shadow-outline-red active:bg-red-50 transition ease-in-out duration-150">
                              Remove
                            </button>
                          </span>
                          </div>
                        </div>
                      }
                    </div>
                    <div className="mt-12 lg:mt-0 lg:flex-1 lg:mr-10 lg:mr-20">
                      <div>
                        <div>
                          <div>
                            <div>
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Personal Information
                              </h3>
                              <p className="mt-1 text-sm leading-5 text-gray-500">
                                For demonstration purposes, no validation or input will be required, so feel free to submit without
                                the hassle of filling out any information that would normally be required.
                              </p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 row-gap-4 col-gap-4 sm:grid-cols-6">
                              <div className="sm:col-span-3">
                                <label htmlFor="first_name"
                                       className="block text-sm font-medium leading-5 text-gray-700">
                                  First name
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="first_name"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label htmlFor="last_name"
                                       className="block text-sm font-medium leading-5 text-gray-700">
                                  Last name
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="last_name"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>

                              <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                  Email address
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="email" type="email"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>

                              <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-5 text-gray-700">
                                  Country / Region
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <select id="country"
                                          className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                  </select>
                                </div>
                              </div>

                              <div className="sm:col-span-6">
                                <label htmlFor="street_address"
                                       className="block text-sm font-medium leading-5 text-gray-700">
                                  Street address
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="street_address"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">
                                  City
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="city"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">
                                  State / Province
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="state"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>

                              <div className="sm:col-span-2">
                                <label htmlFor="zip" className="block text-sm font-medium leading-5 text-gray-700">
                                  ZIP / Postal
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <input id="zip"
                                         className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 border-t border-gray-200 pt-6">
                            <div>
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Billing
                              </h3>
                              <p className="mt-1 text-sm leading-5 text-gray-500">
                                For demonstration purposes, try entering any number (i.e. 5555-5555-5555-5555). The card will NOT be
                                charged.
                              </p>
                            </div>
                            <div className="mt-2 sm:flex sm:items-center">
                              <div className="flex-1 order-2 max-w-full overflow-hidden">
                                <div id="cardJS"/>
                              </div>
                              <div className="mt-4 sm:mt-0">
                                <div className="max-w-xs mx-auto">
                                  <fieldset>
                                    <legend className="block text-sm font-medium leading-5 text-gray-700">Card Details
                                    </legend>
                                    <div className="mt-1 bg-white rounded-md shadow-sm">
                                      <div>
                                        <input id="name"
                                               aria-label="Cardholder name"
                                               className="form-input relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                               placeholder="Cardholder name"/>
                                      </div>
                                      <div className="-mt-px">
                                        <input id="number"
                                               aria-label="Card number"
                                               className="form-input relative block w-full rounded-none bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                               placeholder="Card number"/>
                                      </div>
                                      <div className="-mt-px flex">
                                        <div className="w-1/2 flex-1 min-w-0">
                                          <input id="expiry"
                                                 aria-label="Card expiration date"
                                                 className="form-input relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                                 placeholder="MM / YY"/>
                                        </div>
                                        <div className="-ml-px flex-1 min-w-0">
                                          <input id="cvc"
                                                 aria-label="Card CVC"
                                                 className="form-input relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                                 placeholder="CVC"/>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-8 border-t border-gray-200 pt-5">
                    <div className="flex justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <Link to="/"
                        className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                    Cancel
                  </Link>
                </span>
                      <span className="ml-3 inline-flex rounded-md shadow-sm">
                  <button type="submit"

                          className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                    Book Flights
                  </button>
                </span>
                    </div>
                  </div>
                </form>
              }
            </>
          }
        </div>
      </div>
    </Layout>
  )
}

export default CheckoutPage