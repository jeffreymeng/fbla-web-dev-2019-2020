import React from "react"
import { Link } from "gatsby";

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import flightJob from "../images/flightJob.jpg"
import attendantPic from "../images/attendant.jpg"
import officePic from "../images/officePic.jpg"
import offerPic from "../images/offerPic.jpg"

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';

const CreditsPage = () => (
  <Layout> 
    <SEO title="Credits" />


<div class="relative bg-white overflow-hidden">
  <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <div class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
   
        <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6">
          <h2 class="mt-1 text-6xl tracking-tight leading-10 font-extrabold text-indigo-600 sm:leading-none sm:text-8xl lg:text-10xl xl:text-12xl">
            Credits and Technologies Documentation
          </h2>
      </div>
    </div>
  </div>
</div>

 

<div class="py-16 bg-gray-50 overflow-hidden lg:py-24"  id="benefits">
  <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl pb-20">
    <div class="relative">
      <h3 class="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-10">
        Images
      </h3>
    </div>
    <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center pb-4">

      <div class="relative">
      <div>
       <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-normal sm:text-3xl sm:leading-9 mb-10">
            Unsplash
          </h4>
          </div>
        <ul>
          <li class="mt-10">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/5fNmWej4tAA" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Brainstorming over paper</a> by <span className="italics">Helloquence</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/ff5K3-kYPHA" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">girl with sunglasses on a pier</a> by <span className="italics">Hannah Busing</span></h5>
              </div>
            </div>
          </li>
           <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/TWoL-QCZubY" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">body of water near trees and mountain cliff</a> by <span className="italics">Derek Thompson</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/xe68QiMaDrQ" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">women wearing blue denim jacket</a> by <span className="italics">Philipe Cavalcante</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/8rRdnSDfS68" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">man swimming in pool</a> by <span className="italics">Marvin Meyer</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/n-YceUl10I0" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">flight attendant standing between passenger seat</a> by <span className="italics">NeONBRAND</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/ONpGBpns3cs" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">airplane on sky during golden hour</a> by <span className="italics">Nils Nedel</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/VW8MUbHyxCU" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Empire State Building</a> by <span className="italics">Jonathon Riley</span></h5>
              </div>
            </div>
          </li>
           <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/LglfAGlZCvk" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">high-angle photo of cityscape</a> by <span className="italics">Glen Jackson</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/T7K4aEPoGGk" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">wooden boat on blue lake water taken at daytime</a> by <span className="italics">Pietro De Grandi</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/prSogOoFmkw" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">green mountain beside body of water under white sky</a> by <span className="italics">Braden Jarvis</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/xyXcGADvAwE" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">hot air balloon pfestival</a> by <span className="italics">Kyle Hinkson</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/NPh6umzx8GM" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">high-rise buildings</a> by <span className="italics">Smit Shah</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/qr8Ci2tzyR8" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">photography of concrete high-rise buildings</a> by <span className="italics">Ken Yam</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://unsplash.com/photos/SHP1t8EduMY" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Golden Gate Bridge, USA</a> by <span className="italics">Umer Sayyam</span></h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center pb-4">

      <div class="relative">
      <div>
       <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-normal sm:text-3xl sm:leading-9 mb-10">
            Fair-Use Images
          </h4>
          </div>
        <ul>
          <li class="mt-10">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://www.epa.gov/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">EPA Logo</a> by <span className="italics">EPA</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://www.onepercentfortheplanet.org/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">1% for the Planet Logo</a> by <span className="italics">1% for the Planet</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://www.edf.org/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">EDF Logo</a> by <span className="italics">EDF</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://flightsafety.org/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Flight Safety Logo</a> by <span className="italics">The Flight Safety Foundation</span></h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
</div>

<div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl pb-20">
    <div class="relative">
      <h3 class="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-10">
        Technologies
      </h3>
    </div>

    <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center pb-4">

      <div class="relative">
      <div>
       <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-normal sm:text-3xl sm:leading-9 mb-10">
            Front-End Technologies
          </h4>
          </div>
        <ul class="mt-10">
           <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://fontawesome.com/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Font Awesome Icons</a> by <span className="italics">Font Awesome</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://tailwindui.com/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">TailwindUI</a> by <span className="italics">Tailwind CSS</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://tailwindcss.com/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">TailwindCSS</a> by <span className="italics">Tailwind CSS</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://postcss.org/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">PostCSS</a> by <span className="italics">PostCSS</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://sass-lang.com/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Sass</a> by <span className="italics">Sass</span></h5>
              </div>
            </div>
          </li>
           <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://reactjs.org/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">React.js</a> by <span className="italics">React</span></h5>
              </div>
            </div>
          </li>
        </ul>


        <div>
       <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-normal sm:text-3xl sm:leading-9 my-10 ">
            Back-End Technologies
          </h4>
          </div>
        <ul class="mt-10">
           <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://www.netlify.com/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Netlify</a> by <span className="italics">Netlify</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://firebase.google.com/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Firebase</a> by <span className="italics">Google</span></h5>
              </div>
            </div>
          </li>
          <li class="mt-5">
            <div class="flex">
              <div>
                <h5 class="text-lg leading-6 font-semibold text-gray-900"><a href="https://www.gatsbyjs.org/" target="_blank" className="inline-flex items-center px-3 py-1 rounded-full  leading-5 bg-indigo-100 text-indigo-800 transition ease-in-out hover:bg-indigo-300 duration-500">Gatsby.js</a> by <span className="italics">Gatsby</span></h5>
              </div>
            </div>
          </li>
        </ul>
      </div>


      </div>
</div>
</div>

  </Layout>
)

export default CreditsPage
