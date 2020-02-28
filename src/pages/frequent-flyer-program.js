import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import FFPRewardsSpender from "../components/FFPRewardsSpender"

const FrequentFlyerProgramPage = () => (
  <Layout>
    <SEO title="Frequent Flyer Program" />

    <div className="job-hero">
      <h1 className="job-hero__title">Frequent Flyer <span className="job-hero__title__emphasis">Program</span></h1>
      <p className="job-hero__subtitle">Earn rewards for flying more.</p>
    </div>

    {/* See https://www.alaskaair.com/content/mileage-plan */}

    <div className="job-apply__container" id="apply">
      <div className="job-apply">
        <h2 className="section-heading">What are Frequent Flyer Programs?</h2>
        <p style={{ fontSize: "1.25rem" }}>Coastal Airlines Frequent Flyer Program is a customer loyalty program that
          rewards
          customers for flying with choosing Coastal Airlines. The more you travel with us,
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
              If you accumulate 20,000 points, you become a Diamond Member of our Frequent Flyer Program!
              Diamond members enjoy priority boarding, free checked bags, and complimentary beverages on all our
              flights.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900">
      <div className="lg:flex">
        <div className="flex-1 flex items-center">
          <div className="p-12 max-w-2xl ml-auto">
            <h2 className="text-blue-100 text-6xl mb-12">
              One Mile<span className="text-teal-300">,</span> <br />One Point<span className="text-teal-300">.</span>
            </h2>
            <p className="text-blue-200 text-xl">Each mile you fly with us gives you one Frequent Flyer Program point.
              Redeem your points for free flights!</p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/jobs-bg.jpg" />
        </div>
      </div>
    </div>

    <div className="bg-gray-100 pt-24 pb-32">
      <div className="narrow-container">
        <h2 className="section-heading section-heading--center">Spend your Rewards</h2>
        <p className="text-gray-700 text-xl text-center mb-12">
          Use the tool below to explore how you can use your points! Select an origin and destination region
          and see how many points you need to get a flight for free.
        </p>
      </div>
      <FFPRewardsSpender />
    </div>

    <div className="bg-gray-900">
      <div className="lg:flex">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        </div>
        <div className="flex-1 flex items-center">
          <div className="p-12 max-w-2xl mr-auto xl:ml-24 lg:ml-12">
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
  </Layout>
)

export default FrequentFlyerProgramPage
