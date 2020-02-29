import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import {Button, Container} from "react-bootstrap";
import BookingForm from "../components/BookingForm";

const OtherPage = () => (
  <Layout>
    <SEO title="Index" />
    <Container>
      <h1>Book Your Flight</h1>
      <BookingForm defaultValues={location.state} onSubmit={(d) => console.log(d)} />
    </Container>
  </Layout>
)

export default OtherPage
