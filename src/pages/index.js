import React from "react"
import { Container, Button } from "react-bootstrap"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import { graphql, StaticQuery } from "gatsby"
import { FormControl, InputGroup } from "react-bootstrap"

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
      >
        <SEO
          title="Home"
        />
        <Container className="text-center container">
          <header className="major">
            <h1>Where would you like to fly today?</h1>
            <div>

              <InputGroup className="mb-3" style={{

                height:"3em"
              }}>
                <FormControl type="text" size="lg" className="input-large" style={{
                  backgroundColor:"rgba(255,255,255,0.3)",
                  color:"white",
                  height:"3em"
                }} />
                <InputGroup.Append>
                  <Button variant="outline-light">Book Now</Button>
                </InputGroup.Append>
              </InputGroup>

            </div>
          </header>
        </Container>
      </Layout>
    )}
  />
)

export default IndexPage
