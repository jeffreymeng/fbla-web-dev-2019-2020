import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import { Container, Button, Image, Jumbotron, Card, CardDeck} from "react-bootstrap"
import "../styles/index.scss"
import "../styles/about.scss"
import "../styles/jobs.scss"
import { graphql, StaticQuery } from "gatsby"

import planeImage from "../images/planecoast.jpg"
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import icon from "../images/coastalLogo.png"


const About = () => (
    <Layout>
	    <SEO title="About"/>
	   	<div className="grayColor parallax-wrapper">
		   	<div className="about_box parallax">
		      	<h1 className="about_title nexa">About <span className="about_emphasis">Us</span></h1>
		        <p className="about_sub">The Story of <span className="nexa">Coastal Airlines</span></p>
		    </div>

	    
		    <div className="about_info container">
			    <h1 className="about_subTitle nexa">Our Origins</h1>
			    <h1 className="about_subTitle nexa">_</h1>
			    <h1 className="about_phrase">What started off as a dream with three individuals to travel and explore the nation in a simple, hassle-free manner is now Coastal Airlines: <span	className="nexa">The best air travel for the West.</span></h1>
			   
				
				{/*<CardDeck className="about_cardDeck">*/}
				{/*	<Card bg="light">*/}
				{/*		<Card.Img variant="top" src={icon} />*/}
				{/*		<Card.Body>*/}
				{/*			<Card.Title>The Best in Sustainability</Card.Title>*/}
				{/*			<Card.Text>*/}
				{/*				One of our core principles is to <span className="italics">simplicity</span> - that's why we have partnered up with agencys such as the EPA to find the safest way to fly.*/}
				{/*			</Card.Text>*/}
				{/*		</Card.Body>*/}
				{/*		<Card.Footer>*/}
				{/*			<small className="text-muted">Last updated 3 mins ago</small>*/}
				{/*		</Card.Footer>*/}
				{/*	</Card>*/}
				{/*	<Card bg="light">*/}
				{/*		<Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"/>*/}
				{/*		<Card.Body>*/}
				{/*			<Card.Title>The Best for a Budget</Card.Title>*/}
				{/*			<Card.Text>*/}
				{/*				With the best prices in the market, we provide a service for everyone - without leaving quality behind.*/}
				{/*			</Card.Text>*/}
				{/*		</Card.Body>*/}
				{/*		<Card.Footer>*/}
				{/*			<small className="text-muted">Last updated 3 mins ago</small>*/}
				{/*		</Card.Footer>*/}
				{/*	</Card>*/}
				{/*	<Card bg="light">*/}
				{/*		<Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />*/}
				{/*		<Card.Body>*/}
				{/*			<Card.Title>For the People</Card.Title>*/}
				{/*			<Card.Text>*/}
				{/*				One of our core principles is to <span className="italics">simplicity</span> - and our booking process is no different. In just a few steps, you can forget about the fine print and huge options, giving you freedom before your long needed vacation.*/}
				{/*			</Card.Text>*/}
				{/*		</Card.Body>*/}
				{/*		<Card.Footer>*/}
				{/*			<small className="text-muted">Last updated 3 mins ago</small>*/}
				{/*		</Card.Footer>*/}
				{/*	</Card>*/}
				{/*</CardDeck>*/}


					<Jumbotron className="planeBackground">
						<h1 className="about_subTitle nexa center">Dream On!</h1>
						<p className="about_phrase center">
							Travel to your favorite locations <span className="italics">right now!</span>
						</p>
						<p className="center">
							<a className="about_button btn btn-outline-secondary" href="/">Book Now</a>
						</p>
					</Jumbotron>
					<Carousel
						autoPlay={5000}
						animationSpeed={500}
						infinite>
						<img src="../images/bg.jpg" />
						<img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
						<img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg" />
					</Carousel>
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