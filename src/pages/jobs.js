import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"

const JobsPage = () => (
  <Layout>
    <SEO title="Apply for a Job" />

    <div className="job-hero">
      <h1 className="job-hero__title">Looking for a <span className="job-hero__title__emphasis">Job</span>?</h1>
        <p className="job-hero__subtitle">Travel the world for a living at Coastal Airlines!</p>
        <div className="job-hero__buttons">
            <a className="job-hero__buttons__button" href="#benefits">Learn More</a>
            <a className="job-hero__buttons__button job-hero__buttons__button--highlight"  href="#apply">Apply Now</a>
        </div>
    </div>

    <div className="job-benefits" id="benefits">
      <h2 className="job-benefits__heading">Why Us?</h2>
      <div className="job-benefits__list">
        <div className="job-benefits__list__item">
          <div className="job-benefits__list__item__number">
            01
          </div>
          <div className="job-benefits__list__item__content">
            <h3 className="job-benefits__list__item__content__title">Travel the World</h3>
            When working for Coastal Airlines, you can travel the world -- and get paid to do it!
            Visit Hawaii, Rome, Paris, and so much more with Coastal Airlines.
          </div>
        </div>
        <div className="job-benefits__list__item">
          <div className="job-benefits__list__item__number">
            02
          </div>
          <div className="job-benefits__list__item__content">
            <h3 className="job-benefits__list__item__content__title">Comprehensive Employee Benefits</h3>
            Coastal Airlines provides extremely comprehensive employee benefits to all employees.
            We provide renowned benefits including healthcare, 401(k) matching, and much more!
          </div>
        </div>
        <div className="job-benefits__list__item">
          <div className="job-benefits__list__item__number">
            03
          </div>
          <div className="job-benefits__list__item__content">
            <h3 className="job-benefits__list__item__content__title">Proven Employee Testimonials</h3>
            We have more than 500 satisfied employees! We are consistently ranked amongst
            the top airlines to work for.
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default JobsPage
