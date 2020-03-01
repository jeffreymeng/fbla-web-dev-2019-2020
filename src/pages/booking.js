import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BookingForm from "../components/BookingForm"
import { navigate } from "gatsby-link"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

const SuggestedFlight = ({ title, img, flight, children }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <div className="h-64 lg:h-48">
        {/*todo center this?*/}
        <img className="w-full h-full object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
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

const BookingPage = ({ data }) => {
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
          <BookingForm onSubmit={(data) => navigate("otherpage", {
            state: data,
          })} dropUp className="-mb-40 sm:-mb-32" />
        </div>
      </div>

      <div className="bg-gray-100 pt-40 sm:pt-32 pb-10 sm:pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="uppercase text-indigo-700 font-bold mb-4">Featured Trips</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SuggestedFlight title="The Coldest Sunset" flight="SFO to LAX">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit tempore ut?
            </SuggestedFlight>
            <SuggestedFlight title="The Coldest Sunset" flight="SFO to LAX">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit tempore ut?
            </SuggestedFlight>
            <SuggestedFlight title="The Coldest Sunset" flight="SFO to LAX">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit tempore ut?
            </SuggestedFlight>
            <SuggestedFlight title="The Coldest Sunset" flight="SFO to LAX">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit tempore ut?
            </SuggestedFlight>
            <SuggestedFlight title="The Coldest Sunset" flight="SFO to LAX">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit tempore ut?
            </SuggestedFlight>
            <SuggestedFlight title="The Coldest Sunset" flight="SFO to LAX">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae corporis dolores doloribus eaque eius eos, fugiat hic labore magni nulla odio provident quaerat quis repellat sit tempore ut?
            </SuggestedFlight>
          </div>
        </div>
      </div>
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