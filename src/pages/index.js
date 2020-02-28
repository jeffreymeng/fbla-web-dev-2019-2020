import React from "react"
import { Container, Button } from "react-bootstrap"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import "../styles/flatpickr/light.scss"
import { graphql, StaticQuery } from "gatsby"
import { FormControl, Col, Jumbotron, Form } from "react-bootstrap"
import Flatpickr from "react-flatpickr";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
const BookingForm = ({ onSubmit }) => {
  const [isRoundTrip, setIsRoundTrip] = React.useState(true);
  const [passengers, setPassengers] = React.useState(1);
  const [dates, setDates] = React.useState(["", ""]);
  const [airports, setAirports] = React.useState(["", ""]);
  return (
    <Form>

      <Form.Row>
        <Form.Group as={Col} lg={4} sm={12} controlId="formTripType">
          <Form.Label >Trip Type</Form.Label>
          <Form.Control as="select" value={isRoundTrip ? "rt" : "ow"} onChange={(e) => setIsRoundTrip(e.target.value === "rt")}>
            <option value="rt">Round Trip</option>
            <option value="ow">One Way</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}  lg={8} sm={12}>
          <Form.Label htmlFor="depart">Airports</Form.Label>
          <InputGroup className="mb-3">

            <FormControl
              id="depart"
               placeholder="Depart"
              onChange={(e) => {
                let val = e.target.value;
                setAirports(prevState => [val, prevState[1]])
              }}
              value={airports[0]}
            />
            <InputGroup.Prepend>
              <Button variant="secondary" onClick={() => {
                setAirports((oldState) => {
                  let newState = oldState.slice();
                  // swap first and second elements
                  newState.unshift(newState.pop());
                  return newState;
                })
              }}>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
            </InputGroup.Prepend>
            <FormControl
              id="arrive"
               placeholder="Arrive"
              onChange={(e) => {
                let val = e.target.value;
                setAirports(prevState => [prevState[0], val])
              }}
              value={airports[1]}
            />
          </InputGroup>
        </Form.Group>

      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} sm={isRoundTrip ? 6 : 12} lg={isRoundTrip ? 4 : 8} controlId="formStartDate">
          <Form.Label>{isRoundTrip ? "Start" : ""} Date</Form.Label>

          <Form.Control as={Flatpickr}
            onChange={(date) => setDates(prevState => [date, prevState[1]])}
            value={dates[0]}
             options={{
              altInput: true,
              altFormat: "F j, Y",
              dateFormat: "Y-m-d",
              mode: "single",
              minDate: "today",
              maxDate: "2021-06-30"
            }} placeholder={`Choose a${isRoundTrip ? " start" : "'"} date for your trip`}/>

        </Form.Group>
        <Form.Group as={Col} sm={6} lg={4} controlId="formEndDate" hidden={!isRoundTrip} >
          <Form.Label>End Date</Form.Label>

          <Form.Control as={Flatpickr}

                        onChange={(date) => setDates(prevState => [prevState[0], date])}
                        value={dates[1]}
          options={{
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            mode: "single",
            minDate: "today",
            maxDate: "2021-06-30"
          }} placeholder={`Choose an end date for your trip`}
          isInvalid={new Date(dates[0]).getTime() > new Date(dates[1]).getTime()}
          />

          <Form.Control.Feedback type="invalid">The end date cannot be before the start date! <a onClick={() => {
            setDates((oldState) => {
              let newState = oldState.slice();
              // swap first and second elements
              newState.unshift(newState.pop());
              return newState;
            })
          }}>Swap Dates</a></Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} sm={12} lg={4} controlId="formPassengers">
          <Form.Label>Passengers</Form.Label>
          <Form.Control type="number" min={1} value={passengers} onChange={(e) => setPassengers(e.target.value)}  isInvalid={passengers && (passengers < 1 || passengers > 9)} />
          <Form.Control.Feedback type="invalid">
            {passengers > 9 ? "For more than 9 passengers, please contact our group bookings office at 1 (800) 475-2048" : passengers < 1 ? "You must have at least 1 passenger!" : "Please enter a number between 1 and 9."}
          </Form.Control.Feedback>
        </Form.Group>

      </Form.Row>



      <Button variant="primary" block onClick={() => {
        onSubmit({
          roundTrip:isRoundTrip,
          passengers,
          departAirport:airports[0],
          arriveAirport:airports[1],
          startDate:dates[0],
          endDate:(isRoundTrip ? dates[1] : undefined)
        })
      }}>
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
        lightFooter
      >
        <SEO
          title="Home"
        />
        <Container className="container">
          <h1 className="index-hero-large text-center">Where will we be flying today?</h1>
          <Jumbotron className="py-4">
            <h1 className="index-hero-small">Where will we be flying today?</h1>
            <BookingForm onSubmit={(data) => console.log(data)} />

          </Jumbotron>

        </Container>
      </Layout>
    )}
  />
)

export default IndexPage
