import React from "react"
import { Link } from "gatsby";

import SEO from "../../components/seo"
import Layout from "../../components/layout/layout"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import flightJob from "../../images/flightJob.jpg"
import attendantPic from "../../images/attendant.jpg"
import officePic from "../../images/officePic.jpg"
import offerPic from "../../images/offerPic.jpg"

const JobsPage = () => (
  <Layout> {/*parallax={"jobs"}*/}
    <SEO title="Apply for a Job" />
{/*}
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

                Look no further. With the right steps, you can start travelling the world for a living at Coastal Airlines!

  <div class="relative bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-0">
    <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
      <defs>
        <pattern id="svg-pattern-squares-desktop" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
      <rect x="118" width="404" height="784" fill="url(#svg-pattern-squares-desktop)" />
    </svg>
  </div>
  
    <div class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          {/*<div class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
            Coming soon
          </div>
          <h2 class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Looking for a
            <br class="hidden md:inline" />
            <span class="text-indigo-600">Job</span> ?
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Look no further. With the right steps, you can start travelling the world for a living at Coastal Airlines!
          </p>
           <div class="mx-15 md:mx-0 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start  pt-10 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <AnchorLink href="#Section1" offset="45" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 ">
                Learn More
              </AnchorLink>
            </div>
          </div>
         </div>
        <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <svg class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784">
            <defs>
              <pattern id="svg-pattern-squares-mobile" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
            <rect x="118" width="404" height="784" fill="url(#svg-pattern-squares-mobile)" />
          </svg>
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <button class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
              <img class="w-full" src={flightJob} alt="Woman making a sale" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

*/}
  


<div class="relative bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-0">
    <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
      <defs>
        <pattern id="svg-pattern-squares-desktop" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
      <rect x="118" width="404" height="784" fill="url(#svg-pattern-squares-desktop)" />
    </svg>
  </div>
  <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <div class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <div class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
            Welcome
          </div>
          <h2 class="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            Looking for a
            <br class="hidden md:inline" />
            <span class="text-indigo-600"> Job</span> ?
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Look no further. With the right steps, you can start travelling the world for a living at Coastal Airlines!
          </p>
         <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <AnchorLink href="#benefits" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Learn More
              </AnchorLink>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <Link to="jobs/apply" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
            <button class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
              <img class="w-full" src={flightJob} alt="Woman making a sale" />
             
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 

<div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl pb-20">
   
    <div class="relative">
      <h3 class="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-10">
        Why Us?
      </h3>
      <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
  _______________________________      </p>
    </div>

    <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center pb-4">
      <div class="relative">
       <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-normal sm:text-3xl sm:leading-9">
            What We Offer
          </h4>
        <ul class="mt-10">
          <li>
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500 text-white">
                  <p className="text-xl md:text-2xl">1.</p>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-bold text-gray-900">Travel the World</h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  When working for Coastal Airlines, you can travel the world -- and get paid to do it! Visit Hawaii, Alaska, Mexico, and so much more with Coastal Airlines.
                </p>
              </div>
            </div>
          </li>
          <li class="mt-10">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500 text-white">
                  <p className="text-xl md:text-2xl">2.</p>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-bold text-gray-900">Comprehensive Employee Benefits</h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
Coastal Airlines provides extremely comprehensive employee benefits to all employees. We provide renowned benefits including healthcare, 401(k) matching, and much more!                </p>
              </div>
            </div>
          </li>
          <li class="mt-10">
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500 text-white">
                  <p className="text-xl md:text-2xl">3.</p>
                </div>
              </div>
              <div class="ml-4">
                <h5 class="text-lg leading-6 font-bold text-gray-900">Proven Employee Testimonials</h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
We have more than 500 satisfied employees! We are consistently ranked amongst the top airlines to work for, and would love you here!                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-10 -mx-4 relative lg:mt-0">
        <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="svg-pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#svg-pattern-squares-2)" />
        </svg>
        <img class="relative mx-auto rounded-lg" width="490" src={offerPic} alt="" />
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
                 src={attendantPic}
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
                         src={attendantPic}
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


    <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
   
      <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div class="lg:col-start-2">
          <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-normal sm:text-3xl sm:leading-9">
            Apply Now
          </h4>
          <ul class="mt-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-700">
                  <p className="text-xl md:text-2xl">1.</p>
                </div>
              </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-bold text-gray-900">Select a Position</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
Choose from a variety of different job openings!                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-700">
                  <p className="text-xl md:text-2xl">2.</p>
                </div>
              </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-bold text-gray-900">Send Your Resume</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
Prepare a resume and cover letter for your selected position.                  </p>
                </div>
              </div>
            </li>
             <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-700">
                  <p className="text-xl md:text-2xl">3.</p>
                </div>
              </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-bold text-gray-900">Apply!</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
We'll get back to you within a few days to arrange an interview!                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern id="svg-pattern-squares-4" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#svg-pattern-squares-4)" />
          </svg>
          <img class="relative mx-auto rounded-lg" width="490" src={officePic} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>





    {/*
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
*/}
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
