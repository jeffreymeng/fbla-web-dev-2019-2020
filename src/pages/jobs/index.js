import React from "react"
import { Link } from "gatsby";

import SEO from "../../components/seo"
import Layout from "../../components/layout/layout"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const JobsPage = () => (
  <Layout parallax={"jobs"}>
    <SEO title="Apply for a Job" />

    <div className="job-hero py-12 md:py-16 lg:py-24">
      <h1 className="job-hero__title mb-6 lg:mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">Looking for a <span className="job-hero__title__emphasis">Job</span>?</h1>
      <p className="job-hero__subtitle text-2xl md:text-3xl lg:text-4xl xl:text-4xl">Travel the world for a living at Coastal Airlines!</p>
      <div className="job-hero__buttons">
        
        
                <AnchorLink href="#benefits" className="job-hero__buttons__button btn btn-outline-secondary">
                  Learn More
                </AnchorLink>

        <Link className="job-hero__buttons__button job-hero__buttons__button--highlight btn btn-outline-secondary"
              to="jobs/apply">Apply Now</Link>
      </div>
    </div>

    <div className="bg-gray-50 pt-12 pb-8">
      <div className="job-benefits" id="benefits">
        <h2 className="section-heading" >Why Us?</h2>
        <div className="numbered-sections-list">
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              01
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Travel the World</h3>
              When working for Coastal Airlines, you can travel the world -- and get paid to do it!
              Visit Hawaii, Rome, Paris, and so much more with Coastal Airlines.
            </div>
          </div>
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              02
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Comprehensive Employee Benefits</h3>
              Coastal Airlines provides extremely comprehensive employee benefits to all employees.
              We provide renowned benefits including healthcare, 401(k) matching, and much more!
            </div>
          </div>
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              03
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Proven Employee Testimonials</h3>
              We have more than 500 satisfied employees! We are consistently ranked amongst
              the top airlines to work for.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <svg className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784"
             height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#svg-pattern-squares-1)" />
        </svg>

        <svg className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404"
             height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="svg-pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                 alt="" />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
              stroke="currentColor" fill="none" viewBox="0 0 144 144">
              <path strokeWidth="2"
                    d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
            </svg>
            <blockquote>
              <div className="text-2xl leading-9 font-medium text-gray-900">
                <p>
                  I thoroughly enjoy working at Coastal Airlines! Their employee benefits are unbelievable, and I love
                  getting paid to travel.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img className="h-12 w-12 rounded-full"
                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="" />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base leading-6 font-medium text-grya-900">Jane Doe</div>
                    <div className="text-base leading-6 font-medium text-indigo-600">Senior Flight Attendant</div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <div className="job-apply__container" id="apply">
      <div className="job-apply">
        <h2 className="section-heading">Apply Now</h2>
        <div className="numbered-sections-list numbered-sections-list--green">
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              01
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Select a Position</h3>
              Choose from a variety of different job openings!
            </div>
          </div>
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              02
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Send Your Resume</h3>
              Prepare a resume and cover letter for your selected position.
            </div>
          </div>
          <div className="numbered-sections-list__item">
            <div className="numbered-sections-list__item__number">
              03
            </div>
            <div className="numbered-sections-list__item__content">
              <h3 className="numbered-sections-list__item__content__title">Apply!</h3>
              We'll get back to you within a few days to arrange an interview!
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white mb-4">
      <div className="max-w-screen-xl mx-auto text-center py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          Start your job application today.
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link to="jobs/apply"
               className="no-underline inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <a href="mailto:jobs@coastalairlines.com"
               className="no-underline inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default JobsPage
