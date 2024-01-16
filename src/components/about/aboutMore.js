import React from "react"
import Fade from "react-reveal/Fade"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade bottom cascade>
        <div className="grid grid-cols-3 h-full overflow-hidden gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3">
          <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2890&q=80"
            ></img>
          </div>
          <div className="col-start-3 overflow-hidden rounded-xl h-96 xxs:col-start-1 sm:col-start-3">
            <img
              className="object-cover h-96"
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            ></img>
          </div>
        </div>
      </Fade> */}
      <div className="grid">
        <div className="col-start-3 col-end-5 text-white leading-normal xxs:col-start-1 sm:col-start-3">
          <p>
            GAP Technologies is a pioneering technology startup based in the
            heart of Nepal. We're committed to pushing the boundaries of
            innovation and harnessing the power of artificial intelligence to
            transform industries and fortify national security and cybersecurity
            landscapes.
          </p>
          <br />
          <h1 className="font-semibold text-white text-4xl mb-2">
            Mission Statement
          </h1>
          <p>
            At GAP Technologies, our mission is to be the leading force in
            harnessing cutting-edge technology, particularly in the realms of
            cybersecurity, AI and IOT solutions. We are dedicated to equipping
            businesses, organizations, and individuals with the tools and
            knowledge required to safeguard their digital assets and maximize
            their potential. Our unwavering commitment is to bridge the gap
            between innovation and practical solutions, empowering our clients
            and partners to thrive in the ever-evolving digital landscape.
          </p>
          <br />
          <h1 className="font-semibold text-white text-4xl mb-2">
            Vision Statement
          </h1>
          <p>
            Our vision is to create a digitally secure and technologically
            empowered world. We strive to be the preferred partner for
            cybersecurity academia and software solutions, setting industry
            benchmarks for excellence and innovation. We envision a future where
            businesses and individuals can navigate the digital realm with
            confidence, where their assets are protected, and where technology
            serves as an enabler for progress. We aim to lead the way in
            fortifying the cybersecurity landscape and advancing the adoption of
            artificial intelligence, making the world safer, smarter, and more
            connected.
          </p>
          <h1 className="font-semibold text-white text-4xl mb-5 mt-10">
            Our Founders
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AboutMore
