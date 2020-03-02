import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import FFPRewardsSpender from "../components/FFPRewardsSpender"

const FrequentFlyerProgramPage = () => (
  <Layout parallax>
    <SEO title="Frequent Flyer Program" />

    <div className="job-hero py-12 md:py-16 lg:py-24">
      <h1 className="job-hero__title mb-6 lg:mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">Frequent Flyer <span className="job-hero__title__emphasis">Program</span></h1>
      <p className="job-hero__subtitle text-2xl md:text-3xl lg:text-4xl xl:text-4xl">Earn rewards for flying more.</p>
    </div>

    {/* See https://www.alaskaair.com/content/mileage-plan */}

    <div className="job-apply__container" id="apply">
      <div className="job-apply">
        <h2 className="section-heading">What is Beach Club?</h2>
        <p style={{ fontSize: "1.25rem" }}>Beach Club is Coastal Airlines' Frequent Flyer Program. It is a customer loyalty program that
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
              For each mile you fly, you earn at least one Beach Club point. However, you'll often earn much more based on what dates you fly, how expensive your ticket is, and what class you book.
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
              When you accumulate 20,000 points in a year, you will become a Diamond Beach Club Member!
              Diamond members enjoy priority boarding, free checked bags, and complimentary beverages on all our
              flights.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900">
      <div className="lg:flex">
        <div className="flex-1 flex items-center justify-center">
          <div className="px-12 py-24 max-w-2xl lg:ml-auto">
            <h2 className="text-blue-100 text-6xl mb-12">
              One Mile<span className="text-teal-300">,</span> <br />One Point<span className="text-teal-300">.</span>
            </h2>
            <p className="text-blue-200 text-xl">Each mile you fly with us gives you at least one Beach Club point. You may earn more than one point per mile when booking specific promotional routes, special dates, or business/first class.
              Redeem your points for free flights!</p>
          </div>
        </div>
        <div className="hidden lg:block flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/jobs-bg.jpg')" }}/>
      </div>
    </div>

    <div className="bg-gray-100 pt-24 pb-32">
      <div className="narrow-container">
        <h2 className="section-heading section-heading--center">Spend your Rewards</h2>
        <p className="text-gray-700 text-xl text-center mb-12">
          Use the tool below to explore how you can use your points! Select an origin and destination region
          and receive an instant estimate of the average number of points you need to score a <i>free flight</i>!
        </p>
      </div>
      <FFPRewardsSpender />
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
              become a Diamond Beach Club Member.</p>
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
