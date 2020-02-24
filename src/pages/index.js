import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import {Button} from "react-bootstrap";

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <h1>Index</h1>
    <Button block variant="primary" >You can click me!</Button>
  </Layout>
)

export default IndexPage
