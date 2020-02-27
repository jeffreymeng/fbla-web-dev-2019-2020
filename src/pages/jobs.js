import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import {Button} from "react-bootstrap";

const JobsPage = () => (
  <>
      {/*<Layout>*/}
      {/*  <SEO title="Apply for a Job" />*/}
      {/*</Layout>*/}

      <Layout>
        <div className="job-hero">
          <h1 className="job-hero__title">Looking for a <span className="job-hero__title__emphasis">Job</span>?</h1>
          <p className="job-hero__subtitle">Travel the world for a living at NorthEast Airlines!</p>
          <div className="job-hero__buttons">
            <Button variant="success" className="job-hero__buttons__button">Learn More</Button>
            <Button variant="success" className="job-hero__buttons__button job-hero__buttons__button--inverse">Apply Now</Button>
          </div>
        </div>
      </Layout>

  </>
)

export default JobsPage
