import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import {Button} from "react-bootstrap";

const OtherPage = () => (
  <Layout>
    <SEO title="Index" />
    <h1>Other Page</h1>
    <Button variant="success" >I'm Green and small!</Button>
  </Layout>
)

export default OtherPage
