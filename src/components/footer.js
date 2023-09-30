import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">GAP Technologies</h1>
          <p className="text-white text-sm mt-5 opacity-50">
            We are digital transformation company.
          </p>
          <h3 className="text-white text-lg mt-20 ">
            Copyright 2023 GAP Technologies. All rights reserved.
          </h3>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/">Demos</Link>
            </li>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>{" "}
            {/* <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
