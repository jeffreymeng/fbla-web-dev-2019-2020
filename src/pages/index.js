import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import { graphql, StaticQuery, navigate } from "gatsby"
import BookingForm from "../components/BookingForm";

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
        pageInfo={{ pageName: "index" }}
        backgroundImage={data.desktop.childImageSharp.fluid}
        lightFooter
      >
        <SEO
          title="Home"
        />
        <Container className="container">
          <h1 className="index-hero-large text-center">Where will we be flying today?</h1>
          <Jumbotron className="py-4">
            <h1 className="index-hero-small">Where will we be flying today?</h1>
            <BookingForm onSubmit={(data) => navigate("otherpage", {
              state:data
            })} dropUp />

          </Jumbotron>

        </Container>
      </Layout>
    )}
  />
)

export default IndexPage
