import React, { useMemo, useState } from "react"
import {navigate} from "gatsby";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/index.scss"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image";
import BookingForm from "../components/BookingForm"
import DynamicBackgroundImage from "../components/DynamicBackgroundImage"
import bgImageCaptions from "../images/airport_bg_images/captions"

const IndexPage = ({ data }) => {
  const [airport, setAirport] = useState(null)
  const backgroundImages = useMemo(() => {
    return data.images.edges.reduce((acc, cur) => {
      const airportCode = cur.node.relativePath.substring(18, 21)
      acc[airportCode] = cur.node.childImageSharp.fluid
      return acc
    }, {})
  }, data.images);

  return (
    <Layout>
      <SEO
        title="Home"
      />

      <div className="min-h-content-area relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden -z-10">
          <DynamicBackgroundImage
            className="h-full"
            images={backgroundImages}
            captions={bgImageCaptions}
            currentImage={airport}
            defaultImage={data.file.childImageSharp.fluid}
            defaultCaption={{ caption: "New York City Skyline", location: "New York, New York" }} />
        </div>
        <div className="pt-16">
          <Img className="max-w-6xl mx-auto mb-16" fluid={data.logoBig.childImageSharp.fluid} />
          <h1
            className="mb-4 sm:mb-8 px-4 text-center text-white text-3xl leading-10 font-bold text-indigo-50 sm:text-4xl sm:leading-none md:text-6xl"
            style={{ textShadow: "0 0 75px black, 0 0 20px rgba(0,0,0,0.7)" }}>Where will we be flying today?</h1>

          <div>
            <BookingForm onAirportSelect={airport => setAirport(airport)} onSubmit={(data) => navigate("booking", {state:data})}/>
          </div>
        </div>
      </div>

      <div className="relative bg-indigo-800 overflow-hidden">
        <div className="relative z-10 pb-8 bg-indigo-800 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32">
          <div className="pt-10 mx-auto max-w-2xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                About <span className="text-yellow-200">Us</span>
              </h2>
              <p className="mt-3 text-base text-indigo-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                From humble beginnings, Coastal Airlines has grown to become a leading air travel company in the West Coast.
              </p>
              <div className="inline-block mt-8">
                <Link to="about" className="rounded border border-yellow-200 px-4 py-2 text-yellow-200 text-lg uppercase font-bold flex items-center transition duration-100 hover:bg-yellow-200 hover:text-yellow-800">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                       className="fill-current inline-block ml-4">
                    <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-indigo-800 transform translate-x-24" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100" />
          </svg>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
        </div>
      </div>

      <div className="flex bg-indigo-800 overflow-hidden items-stretch">
        <div className="hidden lg:block flex-1 overflow-hidden relative">
          <img className="absolute h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
        </div>
        <div className="flex-1">
          <div className="relative z-10 pb-8 bg-indigo-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute left-0 inset-y-0 h-full w-48 text-indigo-800 transform -translate-x-24" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 50,100 0,100" />
            </svg>
            <div className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-right">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                  Frequent <span className="text-yellow-200">Flyer</span>
                </h2>
                <p className="mt-3 text-base text-indigo-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:ml-auto">
                  Get rewarded for choosing Coastal Airlines. For each mile you fly, you earn one point. Redeem points for free tickets!
                </p>
                <div className="inline-block mt-8">
                  <Link to="about" className="rounded border border-yellow-200 px-4 py-2 text-yellow-200 text-lg uppercase font-bold flex items-center transition duration-100 hover:bg-yellow-200 hover:text-yellow-800">
                    More Information
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                         className="fill-current inline-block ml-4">
                      <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#svg-pattern-squares-1)" />
          </svg>

          <div className="relative">
            <blockquote className="mt-8">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;I love flying with Coastal Airlines. Their prices are unbeatable and their service is always extremely friendly. I would recommend them to anyone!&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img className="mx-auto h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="" />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base leading-6 font-medium text-gray-900">Judith Black</div>

                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor"
                         viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base leading-6 font-medium text-gray-500">Coastal Airlines Beach Club Member</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Looking for a Job?
            <br />
            <span className="text-indigo-600">Travel the world with Coastal Airlines.</span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <Link to="jobs/apply"
                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Apply Now
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link href="jobs"
                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
              Be the first to learn about special pricing, promotions, and opportunities with Coastal Airlines.
              Unsubscribe at any time.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <input aria-label="Email address" type="email" required
                     className="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out sm:max-w-xs"
                     placeholder="Enter your email" />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm leading-5 text-gray-300">
              We care about the protection of your data. Read our <a href="#" className="text-white font-medium underline">Privacy Policy.</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    images: allFile(filter: {absolutePath: {regex: "/(airport_bg_images).*(\\.jpe?g)/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
          relativePath
        }
      }
    }
    file(relativePath: { eq: "bg.jpg" }) {
     childImageSharp {
       fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
       }
     }
    },
    logoBig: file(relativePath: { eq: "longCoastalInvisV6.png" }) {
     childImageSharp {
       fluid(maxWidth: 1152, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
       }
     }
    }
  }
`