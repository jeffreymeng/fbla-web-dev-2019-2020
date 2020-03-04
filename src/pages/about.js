import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "../styles/index.scss"
import "../styles/about.scss"
import "../styles/parallax.scss"
import { graphql, StaticQuery, Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';




import planeImage from "../images/planecoast.jpg"
import edfPic from "../images/EDFPic.png"
import epaPic from "../images/EPAPic.png"
import percentPic from "../images/1ForThePlanet.png"
import flightSafetyPic from "../images/flightSafetyPic.png"
import vacationPic from "../images/dreamOn.jpg"


const About = ({ data }) => {

return(
    <Layout>
	    <SEO title="About"/>
	   	<div className="grayColor">

{/*
<div className="relative bg-white overflow-hidden h-screen">
  <div className="max-w-screen-xl mx-auto ">
    <div className="relative z-10 pb-0 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-0">
 	<div className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-0 xl:pt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-10xl">
	About            <br className="xl:hidden" />
            <span className="text-indigo-600"> Us</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-20 md:text-3xl lg:mx-0">
What started off as a dream with three individuals to travel and explore the nation in a simple, hassle-free manner is now Coastal Airlines:</p><p	className="about_emphasis  mt-3 text-base text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">The Best Air Travel in the West.  </p>
          <div className="mt-5 sm:mt-8 mr-48 sm:flex sm:justify-center">
            <div className="mt-3 sm:mt-32 sm:mr-0">

              <AnchorLink href="#Section1" offset="45" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-2xl md:px-10">
				 Learn More
              </AnchorLink>

            </div>
          </div>
        </div>
      </div>
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-white transform translate-x-1/2" fill="white" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="32,0 100,0 40,100 32,100" />
      </svg>
	   </div>
	</div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 fixed">
		    <img className="h-screen w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={planeImage} alt="" />
		  </div>
</div>


*/}

<div class="relative bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto ">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <div class="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28 pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-28">
        <Fade appear left cascade>
        <div class="sm:text-center lg:text-left">
          
          <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-6xl sm:leading-none md:text-10xl">
            About<span className="text-indigo-600"> Us</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 pt-10 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
			<p>What started off as a dream with three individuals to travel and explore the nation in a simple, hassle-free manner is now Coastal Airlines:</p><p	className="about_emphasis  mt-3 text-lg text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">The Best Air Travel in the West.  </p>
          </p>
          <div class="mx-15 md:mx-0 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start  pt-10 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <AnchorLink href="#Section1" offset="45" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 ">
                Learn More
              </AnchorLink>
            </div>
          </div>
        </div>
        </Fade>
      </div>
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <Img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" fluid={data.planeImage.childImageSharp.fluid} alt="" />
  </div>
</div>



<div className="bg-gray-50 overflow-hidden">
  <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
      <defs>
        <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
    </svg>
    <div className="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
    <Fade left>
      <div className="lg:col-span-1">
        <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10" id="Section1">
          A better way to fly.
        </h3>
      </div>
      </Fade>
      <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
       <Fade right cascade>
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-gray-900">A Sustainable Future</h5>
            <p className="mt-2 text-base leading-6 text-gray-500">
            	By working closely with environmental agencies such as the EPA, we have created award-winning environmentally safe procedures, integrated into our airline from the ground up.
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-gray-900">The Best for a Budget</h5>
            <p className="mt-2 text-base leading-6 text-gray-500">
               With the best prices in the market, we provide a service for everyone - without leaving quality behind.
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-gray-900">Instant Booking</h5>
            <p className="mt-2 text-base leading-6 text-gray-500">
 		 		Leave behind the fine print and huge options. In just a few steps, you can be on your way to your long needed vacation. 
				       </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-gray-900">Beach Club+</h5>
            <p className="mt-2 text-base leading-6 text-gray-500">
				One of our core principles is <span className="italics">loyalty</span> - thats why we wanted to give back to those who love and care for Coastal Airlines as much as we love them. Go to our	<Link to="frequent-flyer-program"
             className=" font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">Beach Club+
          		</Link> page to learn more.</p>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  </div>
</div>


	    
	 
		    <div className="about_info">

			   
				
				
				


				<div className="bg-gray-50 pt-12 sm:pt-16">
				  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				  	<Fade bottom cascade>
				    <div className="max-w-4xl mx-auto text-center">
				      <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
				        Over 1,000,000 Flights a Year 
				      </h2>
				      <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
				        and our passengers love every bit of it - we'll let them tell you!
				      </p>
				    </div>
				    </Fade>
				  </div>
				  <div className="mt-10 pb-12 bg-white sm:pb-16">
				    <div className="relative">
				      <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
				      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				        <div className="max-w-4xl mx-auto">
				          <Fade bottom>
				          <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
				            <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
				              <p className="text-5xl leading-none font-extrabold text-indigo-600">
				                95%
				              </p>
				              <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
				                Cheapest Rates<span className="text-sm">*</span>
				              </p>
				            </div>
				            <div className="border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
				              <p className="text-5xl leading-none font-extrabold text-indigo-600">
				                24/7
				              </p>
				              <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
				                Non-stop Flights
				              </p>
				            </div>
				            <div className="border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
				              <p className="text-5xl leading-none font-extrabold text-indigo-600">
				                5 Stars
				              </p>
				              <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
				                Beach Club+ Program
				              </p>
				            </div>
				          </div>
				          </Fade>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>



				<div className="bg-white">
				  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
				    <Fade left cascade>
				      <div>
				        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
				          Working together to make travel just better.
				        </h2>
				        <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
				          By working with these leading agencies we hope to revolutionize the industry of Air Travel in the future - we hope you join us!
				        </p>
				        <div className="mt-8 sm:flex">
				          <div className="rounded-md shadow">
				            <Link to="/jobs" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
				              Job Information
				            </Link>
				          </div>
				          <div className="mt-3 sm:mt-0 sm:ml-3">
				            <a href="mailto:jobs@coastalairlines.com" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
				              Contact Us
				            </a>
				          </div>
				        </div>
				      </div>
				      </Fade>
				      <Fade right cascade>
				      <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">

			          <a href="https://www.epa.gov/"  target="_blank" className="inline-flex items-center px-2.5 py-1.5 mx-1.5 my-1.5 border border-transparent text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-50 transform hover:scale-105 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150">
				        <div className="col-span-1 mx-auto flex justify-center py-1 px-8 ">
				          <img className="max-h-24" src={epaPic} alt="EPA" />
				        </div>
			          </a>

				          <a href="https://www.edf.org/"  target="_blank" className="inline-flex items-center px-2.5 py-1.5 mx-1.5 my-1.5 border border-transparent text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-50 transform hover:scale-105 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150">
				        <div className="col-span-1 flex mx-auto justify-center py-1 px-8 ">
				          <img className="max-h-24" src={edfPic} alt="Environmental Defense Fund" />
				        </div>
			          </a>
				         <a href="https://www.onepercentfortheplanet.org/"  target="_blank" className="inline-flex items-center px-2.5 py-1.5 mx-1.5 my-1.5 border border-transparent text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-50 transform hover:scale-105 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150">
				        <div className="col-span-1 flex mx-auto justify-center py-1 px-8 ">
				          <img className="max-h-28" src={percentPic} alt="1% For the Planet" />
				        </div>
			          </a>
				           <a href="https://flightsafety.org/"  target="_blank" className="inline-flex items-center px-2.5 py-1.5 mx-1.5 my-1.5 border border-transparent text-xs leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-50 transform hover:scale-105 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150">
				        <div className="col-span-1 flex mx-auto justify-center py-1 px-8 ">
				          <img className="max-h-28 " src={percentPic} alt="Workcation" />
				        </div>
			          </a>
				        </div>
				        </Fade>
				    </div>
				  </div>
				</div>

			</div>

				
			<div className="relative bg-gray-800">
			<Fade left>
				  <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 bg-indigo-800">
				    <img className="w-full h-full object-cover opacity-90" src={vacationPic} alt="Support team" />
				  </div>
				  </Fade>
				  <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				  <Fade right cascade>
				    <div className="md:ml-auto md:w-1/2 md:pl-10">
				      <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
				       	Simplicity is our Motto
				      </div>
				      <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
				        Live On!
				      </h2>
				      <p className="mt-3 text-lg leading-7 text-gray-300">
						Travel to your favorite locations <span className="italics">right now!</span>
					  </p>
				      <div className="mt-8">
				        <div className="inline-flex rounded-md shadow">
				          <Link to="/book" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
				            Book Your Next Vacation!
				            
				          </Link>
				        </div>
				      </div>
				    </div>
				    </Fade>
				  </div>
			</div>
			</div>
				

		</Layout>
	)
};
export default About

export const query = graphql`
  query {
    planeImage: file(relativePath: { eq: "planecoast.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    epaPic: file(relativePath: { eq: "EPAPic.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    edfPic: file(relativePath: { eq: "EDFPic.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    percentPic: file(relativePath: { eq: "1ForThePlanet.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    flightSafetyPic: file(relativePath: { eq: "flightSafetyPic.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    vacationPic: file(relativePath: { eq: "dreamOn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
 

 /*
Coastal Airlines started off as a dream between three people who wanted to experience the rich cultures of the American West

what started off as a dream of travelling the rich cultures of the US


What started off as a dream of travel within three individuals has 

Fulfilling the dreams of travel for all

The best balance of budget and quality

Non-stop flights to the most captivating locations

What started off as a dream with three individuals to travel and explore the nation in a simple, hassle-free manner has built into Coastal Airlines: The best travel for the west



Sustainability

Sustainability Accounting Standards Board (

Safety Measures

Budget Friendly

For the people

Apply now




 */