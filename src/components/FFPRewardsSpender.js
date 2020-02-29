import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"

const FFPRewardsSpender = (props) => {
  const [originRegion, setOriginRegion] = useState("US");
  const [destRegion, setDestRegion] = useState("Canada");
  const [cost, setCost] = useState([0, 0, 0]);

  // TODO do for real
  useEffect(() => {
    setCost([Math.round(Math.random()*10000), Math.round(Math.random()*10000), Math.round(Math.random()*10000)]);
  }, [originRegion, destRegion]);

  return (
    <>
      <div className="md:flex narrow-container">
        <div className="md:flex-1 md:mr-8">
          <label htmlFor="rewardsSpenderOrigin" className="ml-1 block text-lg leading-5 font-medium text-gray-700">Origin Region</label>
          <Form.Control as="select" id="rewardsSpenderOrigin" value={originRegion} onChange={(e) => setOriginRegion(e.target.value)}>
            <option value="US">United States</option>
            <option value="Mexico">Mexico</option>
          </Form.Control>
        </div>

        <div className="md:flex-1">
          <label htmlFor="rewardsSpenderDestination" className="ml-1 block text-lg leading-5 font-medium text-gray-700">Destination Region</label>
          <Form.Control as="select" id="rewardsSpenderDestination" value={destRegion} onChange={(e) => setDestRegion(e.target.value)}>
            <option value="US">United States</option>
            <option value="Canada">Canada</option>
          </Form.Control>
        </div>
      </div>
      <div className="md:max-w-5xl md:flex mx-auto mt-8 max-w-xs px-4">
        <div className="flex-1 rounded shadow mx-2 lg:mx-4 px-6 py-4 bg-white mb-4 md:mb-0">
          <div className="font-bold text-md text-uppercase text-gray-800">Economy</div>
          <span className="text-4xl mr-1">{cost[0]}</span> <span className="text-blue-700 text-xl">points</span>
        </div>
        <div className="flex-1 rounded shadow mx-2 lg:mx-4 px-6 py-4 bg-white mb-4 md:mb-0">
          <div className="font-bold text-md text-uppercase text-gray-800">Business</div>
          <span className="text-4xl mr-1">{cost[1]}</span> <span className="text-blue-700 text-xl">points</span>
        </div>
        <div className="flex-1 rounded shadow mx-2 lg:mx-4 px-6 py-4 bg-white mb-4 md:mb-0">
          <div className="font-bold text-md text-uppercase text-gray-800">First Class</div>
          <span className="text-4xl mr-1">{cost[2]}</span> <span className="text-blue-700 text-xl">points</span>
        </div>
      </div>
    </>
  )
};

export default FFPRewardsSpender;