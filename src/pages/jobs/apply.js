import React, { useState } from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const jobs = [
  {
    name: "Junior Flight Attendant",
    department: "Services",
    location: "Plane",
    closing: "July 21, 2020",
    testimonial: {
      quote: "Coastal Airlines treats its Junior Flight Attendants very well and compensates them handsomely as well! If this is your first Flight Attendant job, you'll want to apply at Coastal Airlines.",
      name: "Judith Black",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Junior Flight Attendant",
    },
  },
  {
    name: "Back End Developer",
    department: "Engineering",
    location: "Remote",
    closing: "July 28, 2020",
    testimonial: {
      quote: "Even though Coastal Airlines is an airline company, it has an amazing, talented development team. You'll feel right at home as a back-end developer!",
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      position: "Senior Full-Stack Engineer",
    },
  },
]


const ApplyPage = props => {
  const [selectedJob, setSelectedJob] = useState(0)

  return (
    <Layout>
      <SEO title="Apply for a Job" />

      <div className="bg-gray-50">
        <div className="py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28">
          <div className="text-center">
            <h2
              className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Begin your new <br className="xl:hidden" />
              <span className="text-indigo-600">career.</span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Work with Coastal Airlines and get paid to travel and enjoy industry-leading comprehensive employee
              benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto py-16 px-4">
        <h1 className="section-heading section-heading--center">
          To get started, choose an available position.
        </h1>
        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="mb-0">
            {jobs.map((job, idx) => (
              <li className={idx === 0 ? "" : "border-t border-gray-200"} key={job.name}>
                <a href="#"
                   onClick={e => {
                     e.preventDefault()
                     setSelectedJob(idx)
                   }}
                   className={(selectedJob === idx ? "border-indigo-700 " : "border-transparent ") + "border-l-4 block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out no-underline"}>
                  <div className="flex items-center">
                    <div className="px-4 py-4 sm:px-6 flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                          {job.name}
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Full-time
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                                 viewBox="0 0 20 20">
                              <path
                                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            {job.department}
                          </div>
                          <div className="flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                                 viewBox="0 0 20 20">
                              <path fill-rule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clip-rule="evenodd" />
                            </svg>
                            {job.location}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor"
                               viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clip-rule="evenodd" />
                          </svg>
                          <span>
                            Closing on {job.closing}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mr-4">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-8 bg-gray-50 overflow-hidden md:py-12 lg:py-16 relative">
        <div className={"max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative"}>
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

          <div className={"opacity-0"}>
            <blockquote>
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  {jobs[0].testimonial.quote}
                </p>
              </div>
              <div className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img className="mx-auto h-10 w-10 rounded-full"
                         src={jobs[0].testimonial.image}
                         alt="" />
                  </div>
                  <div className="text-center md:ml-4 md:flex md:items-center">
                    <div
                      className="text-base leading-6 font-medium text-gray-900">{jobs[0].testimonial.name}</div>

                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor"
                         viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div
                      className="text-base leading-6 font-medium text-gray-500">{jobs[0].testimonial.position}</div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>

          {jobs.map((job, idx) => (
            <div className={(idx===selectedJob?"opacity-1":"opacity-0")+" absolute transition duration-200 ease-in-out top-0 left-0 right-0 px-4"}>
              <blockquote>
                <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                  <p>
                    {job.testimonial.quote}
                  </p>
                </div>
                <div className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img className="mx-auto h-10 w-10 rounded-full"
                           src={job.testimonial.image}
                           alt="" />
                    </div>
                    <div className="text-center md:ml-4 md:flex md:items-center">
                      <div
                        className="text-base leading-6 font-medium text-gray-900">{job.testimonial.name}</div>

                      <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor"
                           viewBox="0 0 20 20">
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>

                      <div
                        className="text-base leading-6 font-medium text-gray-500">{job.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      HELLO
    </Layout>
  )
}

export default ApplyPage