import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import FFPRewardsSpender from "../components/FFPRewardsSpender"

import "../styles/index.scss"
import "../styles/about.scss"
import "../styles/parallax.scss"
import { Link } from "gatsby"
import beachClubHeader from "../images/beachClubp1.jpg"

import AnchorLink from 'react-anchor-link-smooth-scroll'

import boatMount from "../images/boatMount.jpg"



const FrequentFlyerProgramPage = () => (
  <Layout>
    <SEO title="Beach Club+" />




<div class="relative bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto ">
    <div class="relative ml-auto z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <div class="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-6xl sm:leading-none md:text-10xl">
            Beach<span className="text-indigo-600"> Club+</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 pt-10 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
        <p>Earn rewards for flying more: </p><p className="about_emphasis  mt-3 text-lg text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">Giving You What You Deserve. </p>
          </p>
          <div class="mx-15 md:mx-0 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start  pt-10 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <AnchorLink href="#Section1" offset="0" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 ">
                Learn More
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
      <svg class="hidden lg:block absolute left-0 inset-y-0 h-full w-48 text-white transform -translate-x-1/2 " fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 50,0 50,100 50,100" />
      </svg>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={beachClubHeader} alt="" />
  </div>
</div>


    {/* See https://www.alaskaair.com/content/mileage-plan */}

    <div className="job-apply__container" id="Section1">
      <div className="job-apply">
      <div class="relative">
      <h3 class="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-10">
        What is Beach <span className="text-indigo-600">Club+</span>?
      </h3>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500 pb-8">
  _______________________________      </p>
    </div>
        <p style={{ fontSize: "1.25rem" }}>Beach Club+ is Coastal Airlines' Frequent Flyer Program. It is a customer loyalty program that
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
              For each mile you fly, you earn at least one Beach Club+ point. However, you'll often earn much more based on what dates you fly, how expensive your ticket is, and what class you book.
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
              When you accumulate 100,000 points in a year, you will become a Diamond Beach Club+ Member!
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
          <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
        More Out of Each Flight
      </div>
            <h2 className="mb-12 text-white text-4xl leading-9 font-bold tracking-normal sm:text-6xl sm:leading-tight">
              One Mile<span className="text-teal-300">,</span> <br />One Point<span className="text-teal-300">.</span>
            </h2>
            <p className="text-xl leading-7 text-gray-300">Each mile you fly with us gives you at least one Beach Club+ point. You may earn more than one point per mile when booking specific promotional routes, special dates, or business/first class.
              Redeem your points for free flights!</p>
          </div>
        </div>
        <div className="hidden lg:block flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/jobs-bg.jpg')" }}/>
      </div>
      <div class="md:ml-auto md:w-1/2 md:pl-10">
    </div>
    </div>

    <div className="bg-gray-100 pt-24 pb-32">
      <div className="narrow-container">
        <h2 className="section-heading section-heading--center font-bold tracking-normal sm:leading-10">Spend your Rewards</h2>
        <p className="text-gray-700 text-xl text-center mb-12">
          Use the tool below to explore how you can use your points! Select an origin and destination region
          and receive an instant estimate of the average number of points you need to score a <i>free flight</i>!
        </p>
      </div>
      <FFPRewardsSpender />
    </div>

  


<div class="relative bg-gray-900">
  <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
    <img class="w-full h-full object-cover" src={boatMount} alt="Support team" />
  </div>
  <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div class="md:ml-auto md:w-1/2 md:pl-10">
      <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
        Our Special Speciality Program
      </div>
      <h2 class="mt-2 text-white text-4xl leading-9 font-bold tracking-normal sm:text-6xl sm:leading-tight">
Diamond Members.      </h2>
      <p class="mt-3 text-xl leading-7 text-gray-300">
If you earn more than 100,000 points, you automatically
              become a Diamond Beach Club+ Member.
            <p className="mt-3 text-xl leading-7 text-gray-300">Diamond members enjoy priority boarding, free checked bags, and
              complimentary beverages on all our
              flights.</p>      </p>
      <div class="mt-8">
       
      </div>
    </div>
  </div>
</div>


  </Layout>
)

export default FrequentFlyerProgramPage
