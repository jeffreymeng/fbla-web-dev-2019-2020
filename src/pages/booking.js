import React from "react";
import SEO from "../components/seo"
import Img from "gatsby-image"
import BookingForm from "../components/BookingForm"
import { navigate } from "gatsby-link"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

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
        <h1 className="mb-8 sm:mb-16 px-4 text-center text-white text-4xl leading-10 font-bold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">Where will we be flying today?</h1>

        <div>
          <BookingForm onSubmit={(data) => navigate("otherpage", {
            state:data
          })} dropUp className="-mb-40 sm:-mb-32" />
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen pt-40 sm:pt-32">
        Hi
      </div>
    </Layout>
  )
}

export default BookingPage;

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