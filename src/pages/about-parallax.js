import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import "../styles/about-parallax.scss";
import "../styles/jobs.scss";

const FrequentFlyerProgramPage = () => (
  <Layout>
    <SEO title="Frequent Flyer Program" />
    <div className="wrapper">
    <div className="job-hero parallax">
      <h1 className="job-hero__title mb-6 lg:mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">About <span className="job-hero__title__emphasis">Us</span></h1>
      <p className="job-hero__subtitle text-2xl md:text-3xl lg:text-4xl xl:text-4xl">The story of Coastal Airlines</p>
    </div>

    {/* See https://www.alaskaair.com/content/mileage-plan */}

    <div className="job-apply__container" id="apply">
      <div className="job-apply">
        <h2 className="section-heading">What is the Coastal Airlines Frequent Flyer Program?</h2>
        <p style={{ fontSize: "1.25rem" }}>The Coastal Airlines Frequent Flyer Program is a customer loyalty program that
          rewards customers like you for choosing Coastal Airlines. The more you travel with us,
          the more rewards you earn!</p>

        <div style={{ marginBottom: "5rem" }} />

        <h2 className="section-heading">How it Works</h2>
        <div className="numbered-sections-list numbered-sections-list--green">
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              01
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Earn Points</h3>
              For each mile you fly, you earn one point in Coastal Airline's Frequent Flyer Program.
            </div>
          </div>
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              02
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Spend Points</h3>
              Redeem your points for free flights with Coastal Airlines! Just 15,000 points is enough for a
              flight to Hawaii.
            </div>
          </div>
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              03
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Diamond Members</h3>
              When you accumulate 20,000 points in a year, you will become a Diamond Member of our Frequent Flyer Program!
              Diamond members enjoy priority boarding, free checked bags, and complimentary beverages on all our
              flights.
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-gray-900">
      <div className="lg:flex">
        <div className="hidden lg:block flex-1 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')" }}/>
        <div className="flex-1 flex items-center justify-center">
          <div className="p-12 max-w-2xl lg:mr-auto lg:ml-12">
            <h2 className="text-blue-100 text-6xl mb-12">
              <span className="text-teal-300">Diamond</span> <br />Members<span className="text-teal-300">.</span>
            </h2>
            <p className="text-blue-200 text-xl">If you earn more than 20,000 points, you automatically
              become a Diamond Member of our Frequent Flyer Program.</p>
            <p className="text-blue-200 text-xl">Diamond members enjoy priority boarding, free checked bags, and
              complimentary beverages on all our
              flights.</p>
            {/* if time maybe want to make ^ bullet points */}
          </div>
        </div>
      </div>
    </div>
</div>
  </Layout>
)

export default FrequentFlyerProgramPage
