import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"

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
        <h2 className="job__section-heading">Program Information</h2>
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
              If you accumulate 20,000 miles, you become a Diamond Member of our Frequent Flyer Program!
              Diamond members enjoy priority boarding, free checked bags, and complimentary beverages on all our flights.
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default FrequentFlyerProgramPage
