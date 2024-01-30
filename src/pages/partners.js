import React from "react"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"
import ecc from "../images/ecc.png"

const Partners = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-10 text-white">
        <h1 className="font-semibold text-4xl text-center mb-10">PARTNERS</h1>
        <Fade bottom>
          <p>
            We partner with technology providers who are proven and market
            leaders in their field. Prior to introducing products to the market,
            we thoroughly evaluate their strengths and market positioning.
            Extensive product assessment and testing are conducted before
            partnering with a focus on technical excellence, robustness, and
            reliability.We emphasize building service and consulting
            capabilities around partner technologies.
          </p>
          <p className="mt-5">
            Our portfolio comprises only the best in class products in their
            respective domains, ensuring that we provide top-tier solutions and
            services to meet the needs of our customers.
          </p>

          <div className="flex justify-normal xxs:flex-col xs:flex-col sm:flex-row">
            <div className="bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-80 xs:w-80 sm:w-1/3">
              {/* <h1 className="text-white text-2xl">EC Council</h1> */}
              <img className="w-1/2 h-1/3" src={ecc} alt="Header"></img>
              <p className="mt-10 text-white opacity-90 font-semibold">
                <p>Academia</p>
                <p>AWARE - anti-phising product</p>
                <p>CyberQ</p>
                <p>Cybersecurity Consulting</p>
                <p>ISO Certification</p>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default Partners
