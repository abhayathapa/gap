import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        {/* <div className="overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80"></img>
        </div> */}
        <div className="mt-5">
          <span className="text-white text-m opacity-50">About us</span>
          <h1 className="text-white text-5xl font-poppins mt-5 font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-5xl">
            We're on a mission to power industries with cybersecurity, AI and
            IOT expertise.
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
