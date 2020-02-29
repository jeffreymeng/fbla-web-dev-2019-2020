import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import "../styles/index.scss"
import "../styles/about.scss"
import "../styles/parallax.scss"
import { graphql, StaticQuery } from "gatsby"

import planeImage from "../images/planecoast.jpg"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import icon from "../images/coastalLogo.png"


const About = () => (
    <Layout bodyClassName="parallax-wrapper">
	    <SEO title="About"/>
	   	<div className="grayColor">


<div className="relative bg-white overflow-hidden">
  <div className="max-w-screen-xl mx-auto ">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
 	<div className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
        <div className="sm:text-center lg:text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
	About            <br className="xl:hidden" />
            <span className="text-indigo-600"> Us</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
What started off as a dream with three individuals to travel and explore the nation in a simple, hassle-free manner is now Coastal Airlines: <span	className="about_emphasis">The Best Air Travel in the West.</span>          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="white" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="32,0 100,0 50,100 32,200" />
      </svg>
	   </div>
	</div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={planeImage} alt="" />
		  </div>
</div>

{/*		   	<div className="about_box">

		      	<h1 className="about_title nexa">About <span className="about_emphasis">Us</span></h1>
		        <p className="about_sub">The Story of <span className="nexa">Coastal Airlines</span></p>
		    </div>*/}



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
      <div className="lg:col-span-1">
        <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          A better way to fly.
        </h3>
      </div>
      <div className="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-gray-900">A Sustainable Future</h5>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.
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
              Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.
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
              Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.
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
              Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


	    
	 
		    <div className="about_info">

			   
				
				{/*<CardDeck className="about_cardDeck">
				  <Card bg="light">
				    <Card.Img variant="top" src={icon} />
				    <Card.Body>
				      <Card.Title>The Best in Sustainability</Card.Title>
				      <Card.Text>
				        One of our core principles is to <span className="italics">simplicity</span> - that's why we have partnered up with agencys such as the EPA to find the safest way to fly.
				      </Card.Text>
				    </Card.Body>
				    <Card.Footer>
				      <small className="text-muted">Last updated 3 mins ago</small>
				    </Card.Footer>
				  </Card>
				  <Card bg="light">
				    <Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"/>
				    <Card.Body>
				      <Card.Title>The Best for a Budget</Card.Title>
				      <Card.Text>
				        With the best prices in the market, we provide a service for everyone - without leaving quality behind.
				      </Card.Text>
				    </Card.Body>
				    <Card.Footer>
				      <small className="text-muted">Last updated 3 mins ago</small>
				    </Card.Footer>
				  </Card>
				  <Card bg="light">
				    <Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
				    <Card.Body>
				      <Card.Title>For the People</Card.Title>
				      <Card.Text>
				        One of our core principles is to <span className="italics">simplicity</span> - and our booking process is no different. In just a few steps, you can forget about the fine print and huge options, giving you freedom before your long needed vacation. 
				      </Card.Text>
				    </Card.Body>
				    <Card.Footer>
				      <small className="text-muted">Last updated 3 mins ago</small>
				    </Card.Footer>
				  </Card>
				</CardDeck>

	
				 <Jumbotron className="planeBackground">
				  	<h1 className="about_subTitle nexa center">Dream On!</h1>
				  	<p className="about_phrase center">
					   Travel to your favorite locations <span className="italics">right now!</span>
				  	</p>
				  	<p className="center">
    			        <a className="about_button btn btn-outline-secondary" href="/">Book Now</a>
    				</p>
    			</Jumbotron>
    			
				*/}

				


				<div className="bg-gray-50 pt-12 sm:pt-16">
				  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				    <div className="max-w-4xl mx-auto text-center">
				      <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
				        Trusted by developers from over 80 planets
				      </h2>
				      <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
				        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
				      </p>
				    </div>
				  </div>
				  <div className="mt-10 pb-12 bg-white sm:pb-16">
				    <div className="relative">
				      <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
				      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				        <div className="max-w-4xl mx-auto">
				          <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
				            <div className="border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
				              <p className="text-5xl leading-none font-extrabold text-indigo-600">
				                95%
				              </p>
				              <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
				                Cheapest Rates
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
				                100k
				              </p>
				              <p className="mt-2 text-lg leading-6 font-medium text-gray-500">
				                Calories
				              </p>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>



				<div className="bg-white">
				  <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
				      <div>
				        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
				          Used by the world's most average companies
				        </h2>
				        <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
				          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
				        </p>
				        <div className="mt-8 sm:flex">
				          <div className="rounded-md shadow">
				            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
				              Create Account
				            </a>
				          </div>
				          <div className="mt-3 sm:mt-0 sm:ml-3">
				            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
				              Contact Us
				            </a>
				          </div>
				        </div>
				      </div>
				      <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
				        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
				          <img className="max-h-12" src="/img/logos/transistor-logo.svg" alt="Workcation" />
				        </div>
				        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
				          <img className="max-h-12" src="/img/logos/mirage-logo.svg" alt="Mirage" />
				        </div>
				        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
				          <img className="max-h-12" src="/img/logos/tuple-logo.svg" alt="Tuple" />
				        </div>
				        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
				          <img className="max-h-12" src="/img/logos/laravel-logo.svg" alt="Laravel" />
				        </div>
				        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
				          <img className="max-h-12" src="/img/logos/statickit-logo.svg" alt="StaticKit" />
				        </div>
				        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
				          <img className="max-h-12" src="/img/logos/statamic-logo.svg" alt="Statamic" />
				        </div>
				      </div>
				    </div>
				  </div>
				</div>




				<Carousel
				  autoPlay={5000}
				  animationSpeed={500}
				  infinite>
				  <img src="../images/bg.jpg" />
				  <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
				  <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
				</Carousel>
			</div>

				
			<div className="relative bg-gray-800">
				  <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
				    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6875F5&sat=-100&blend-mode=multiply" alt="Support team" />
				  </div>
				  <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				    <div className="md:ml-auto md:w-1/2 md:pl-10">
				      <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
				       	Simplicity is our Motto
				      </div>
				      <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
				        Dream On!
				      </h2>
				      <p className="mt-3 text-lg leading-7 text-gray-300">
						Travel to your favorite locations <span className="italics">right now!</span>
					  </p>
				      <div className="mt-8">
				        <div className="inline-flex rounded-md shadow">
				          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
				            Visit the help center
				            <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
				              <path fill-rule="evenodd" d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" clip-rule="evenodd"/>
				            </svg>
				          </a>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>
				
		  </div>
	</Layout>
)
export default About
 

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