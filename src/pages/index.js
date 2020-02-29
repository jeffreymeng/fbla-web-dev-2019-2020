import React, { useState } from "react"
import { Container, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import { graphql, StaticQuery, navigate } from "gatsby"
import BookingForm from "../components/BookingForm";
import Img from "gatsby-image"
import DynamicBackgroundImage from "../components/DynamicBackgroundImage"

const IndexPage = ({ data }) => {
  console.log(data);
  const [airport, setAirport] = useState();

  console.log(airport);

  return (
    <Layout
      // pageInfo={{ pageName: "index" }}
      // lightFooter
    >
      <SEO
        title="Home"
      />

      <div className="min-h-content-area relative flex items-center justify-center">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden -z-10">
          <DynamicBackgroundImage className="h-full" images={backgroundImages} currentImage={0} />
          {/*<Img className="h-full" fluid={data.file.childImageSharp.fluid} />*/}
        </div>
        <div className="pb-16">
          {/*<h1 className="mb-8 sm:mb-16 px-4 text-center text-white text-4xl tracking-tight leading-10 font-extrabold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">Coastal Airlines</h1>*/}
          <h1 className="mb-8 sm:mb-16 px-4 text-center text-white text-4xl leading-10 font-bold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl"
              style={{ textShadow: "0 0 75px black, 0 0 20px rgba(0,0,0,0.7)" }}>Where will we be flying today?</h1>

          <div>
            <BookingForm onAirportSelect={airport => setAirport(airport)}/>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default IndexPage

export const query = graphql`
  query {
    images: allFile(relativePath: { eq: "bg.jpg" }) {
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

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "bg.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 1920, quality: 100) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
`