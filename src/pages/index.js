import React from "react"
import { Container, Button } from "react-bootstrap"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import "../styles/flatpickr/light.scss"
import { graphql, StaticQuery } from "gatsby"
import { FormControl, Col, Jumbotron, Form } from "react-bootstrap"
import Flatpickr from "react-flatpickr";

const BookingForm = () => {
  const [isRoundTrip, setIsRoundTrip] = React.useState(true);
  const [passengers, setPassengers] = React.useState(1);
  return (
    <Form>

      <Form.Row>
        <Form.Group as={Col} lg={4} sm={12} controlId="formTripType">
          <Form.Label>Trip Type</Form.Label>
          <Form.Control as="select" value={isRoundTrip ? "rt" : "ow"} onChange={(e) => setIsRoundTrip(e.target.value === "rt")}>
            <option value="rt">Round Trip</option>
            <option value="ow">One Way</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}  lg={4} sm={6} controlId="formDepart">
          <Form.Label>Depart</Form.Label>
          <Form.Control type="text" placeholder="Enter an airport..." />
        </Form.Group>

        <Form.Group as={Col}  lg={4} sm={6} controlId="formArrive">
          <Form.Label>Arrive</Form.Label>
          <Form.Control type="text" placeholder="Enter an airport..." />

        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} sm={12} lg={8} controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control as={Flatpickr} placeholder={`Choose a date ${isRoundTrip ? "range " : ""}for your trip`} />
        </Form.Group>
        <Form.Group as={Col} sm={12} lg={4} controlId="formPassengers">
          <Form.Label>Passengers</Form.Label>
          <Form.Control type="number" min={1} value={passengers} onChange={(e) => setPassengers(e.target.value)}  isInvalid={passengers && (passengers < 1 || passengers > 9)} />
          <Form.Control.Feedback type="invalid">
            {passengers > 9 ? "For more than 9 passengers, please contact our group bookings office at 1 (800) 475-2048" : passengers < 1 ? "You must have at least 1 passenger!" : "Please enter a number between 1 and 9."}
          </Form.Control.Feedback>
        </Form.Group>

      </Form.Row>



      <Button variant="primary" block type="submit">
        Find Flights
      </Button>
    </Form>
  )
}


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
        <Container className="container">
          <h1 className="index-hero-large text-center">Where will we be flying today?</h1>
          <Jumbotron className="py-4">
            <h1 className="index-hero-small">Where will we be flying today?</h1>
            <BookingForm />

          </Jumbotron>

        </Container>
      </Layout>
    )}
  />
)

export default IndexPage
