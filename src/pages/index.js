import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";

const CustomGroup = ({col, label, placeholder, type, onChange}) => (
  <Form.Group className={col ? `col-${col}` : ""}>
    <Form.Label className="text-gray-600" style={{
      fontSize: "0.875em",
      fontWeight: 400,
    }}>{label}</Form.Label>
    {/*TODO: refactor so form.control can be different types*/}
    <Form.Control className="rounded-pill" type={type || "text"} placeholder={placeholder} onChange={onChange}  />
  </Form.Group>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Index"/>

    <Container>
      <Row style={{
        height:"100%"
      }}>
        <Col lg={6}>
          <h1>Index</h1>
          <Button block variant="primary">You can click me!</Button>
          <h1>I want to fly to </h1>

        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
