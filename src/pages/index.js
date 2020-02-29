import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import { graphql, StaticQuery, navigate } from "gatsby"
import BookingForm from "../components/BookingForm";
import bgImage from "../images/bg.jpg"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "bg.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        // pageInfo={{ pageName: "index" }}
        // lightFooter
      >
        <SEO
          title="Home"
        />

        <div className="pt-32 pb-12 relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center -z-10" style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundColor: "blue",
            filter: "contrast(70%)",
            backgroundBlendMode: "multiply",
          }}/>
          <h1 className="px-4 text-center text-white text-4xl tracking-tight leading-10 font-extrabold text-gray-50 sm:text-5xl sm:leading-none md:text-6xl">Where will we be flying today?</h1>

          <BookingForm onSubmit={(data) => navigate("otherpage", {
            state:data
          })} dropUp className="relative" style={{
            bottom: "-7rem",
          }} />
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
