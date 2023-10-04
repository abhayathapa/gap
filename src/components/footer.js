import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.png"
import linkedin from "../images/linkedin.png"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 mt-2 bg-lightblack rounded-xl text-white text-sm">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <img className="w-1/3 h-1/3 " src={logo} alt="Header"></img>
          <p className="ml-8 opacity-50">
            GAP Technologies
            <p>5th Floor, Trade Tower, Thapathali, Kathmandu, Nepal</p>
            <p>e. info@gaptechnologies.co</p>
            <a href="https://www.linkedin.com/company/gap-technologies-pvt-ltd">
              <img className="w-1/12 h-1/12" src={linkedin}></img>
            </a>
          </p>
          <h3 className="ml-8 mt-5 opacity-50">
            Copyright 2023 GAP Technologies. All rights reserved.
          </h3>
        </div>
        {/* <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/">Demo</Link>
            </li>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
