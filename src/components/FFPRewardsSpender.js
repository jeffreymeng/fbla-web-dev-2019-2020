import React, { useEffect, useState } from "react"
import Select from "react-select";

const FFPRewardsSpender = (props) => {
  const regionOptions =[
    {
      label:"Mainland USA",
      value:"USA"
    },
    {
      label:"Hawaii",
      value:"HAI"
    },
    {
      label:"Alaska",
      value:"ASK"
    },
    {
      label:"Canada",
      value:"CAN"
    },
    {
      label:"Mexico",
      value:"MEX"
    },
  ];
  const defaultRegion = {
    label:"Mainland USA",
    value:"USA"
  };
  const [originRegion, setOriginRegion] = useState(defaultRegion);
  const [destRegion, setDestRegion] = useState(defaultRegion);
  const [cost, setCost] = useState([0, 0, 0]);

  useEffect(() => {
    let prices = [
      // 1: USA 2: HAI 3: ASK 4. CAN 5. MEX
      [98728, 14839, 13698, 12849, 10928],
      [    0,  3389, 12473, 13928, 15039],
      [    0,     0,  4923,  7293, 16557],
      [    0,     0,     0,  4958, 14820],
      [    0,     0,     0,     0,  5092]
    ]
    let locMap = ["USA", "HAI", "ASK", "CAN", "MEX"];
    const lookup = (from, to) => prices[locMap.indexOf(from.value)][locMap.indexOf(to.value)]
    let economy = lookup(originRegion, destRegion);
    if (economy === 0) {
      economy = lookup(destRegion, originRegion);
    }
    let business = Math.round(economy * 2.4394);
    let first = Math.round(business * 1.837);
    setCost([economy, business, first]);
  }, [originRegion, destRegion]);

  return (
    <>
      <div className="md:flex narrow-container">
        <div className="md:flex-1 md:mr-8">
          <label htmlFor="rewardsSpenderOrigin" className="ml-1 mb-2 block text-lg leading-5 font-medium text-gray-700">Origin Region</label>
          <Select options={regionOptions} value={originRegion} onChange={v => setOriginRegion(v)} />
        </div>
        <div className="md:flex-1">
          <label htmlFor="rewardsSpenderDestination" className="ml-1 block text-lg leading-5 font-medium text-gray-700">Destination Region</label>
          <Select options={regionOptions} value={destRegion} onChange={v => setDestRegion(v)} />
        </div>
      </div>
      <div className="md:max-w-5xl md:flex mx-auto mt-8 max-w-xs px-4">
        <div className="flex-1 rounded shadow mx-2 lg:mx-4 px-6 py-4 bg-white mb-4 md:mb-0">
          <div className="font-bold text-md text-uppercase text-gray-800">Economy</div>
          <span className="text-4xl mr-1">{Math.floor(cost[0]/1000)},{cost[0] % 1000}</span> <span className="text-blue-700 text-xl">points</span>
        </div>
        <div className="flex-1 rounded shadow mx-2 lg:mx-4 px-6 py-4 bg-white mb-4 md:mb-0">
          <div className="font-bold text-md text-uppercase text-gray-800">Business</div>
          <span className="text-4xl mr-1">{Math.floor(cost[1]/1000)},{cost[1] % 1000}</span> <span className="text-blue-700 text-xl">points</span>
        </div>
        <div className="flex-1 rounded shadow mx-2 lg:mx-4 px-6 py-4 bg-white mb-4 md:mb-0">
          <div className="font-bold text-md text-uppercase text-gray-800">First Class</div>
          <span className="text-4xl mr-1">{Math.floor(cost[2]/1000)},{cost[2] % 1000}</span> <span className="text-blue-700 text-xl">points</span>
        </div>
      </div>
    </>
  )
};

export default FFPRewardsSpender;