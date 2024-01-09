import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-2 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-purple to-blue hover:from-lightblack to-lightblack transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">1000</h1>
            <h3 className="text-white">Cybersecurity Courses</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-purple to-blue hover:from-lightblack to-lightblack transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">15000</h1>
            <h3 className="text-white">Cybersecurity Videos</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-purple to-blue hover:from-lightblack to-lightblack transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">3</h1>
            <h3 className="text-white">AI based surveillance system</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-purple to-blue hover:from-lightblack to-lightblack transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">10</h1>
            <h3 className="text-white">OEM Partners</h3>
          </div>
        </div>
      </Fade>
      {/* <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            TAGLINE
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br></br>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade> */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">Year Founded</h2>
                <h1 className="text-white text-sm">2023</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Team Members</h2>
                <h1 className="text-white text-sm">15</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Our Core Behaviours</h1>
            <p className="mt-10 text-white opacity-50">
              Our business encompasses three core areas: AI-powered facial
              recognition technology for security and surveillance, IOT
              solutions for the retail and distribution sector, and a
              cybersecurity academia dedicated to education, training,
              certification, and consulting.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          {/* <h1 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
            Join the revolution
          </h1> */}
          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl">
            <span class="text-gradient bg-gradient-to-r from-pink to-blue">
              INNOVATE, PROTECT, EMPOWER
            </span>
          </h1>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-2 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row text-white">
          <div className="w-1/3 bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-2xl">Cybersecurity</h1>
            <p className="mt-5 opacity-90 font-semibold">
              We're committed to fortifying the nation's cybersecurity
              landscape. Our comprehensive academia offerings encompass
              education, training, certification, and consulting services.Our
              courses equip professionals with the career/learning skills path
              to safeguard networks and data effectively. With our holistic
              approach, we empower businesses to proactively defend against
              cyber risks, making them well prepared in the fight against
              cybercrime.
            </p>
          </div>
          <div className="w-1/3 bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-2xl">
              AI-Powered Facial Recognition Technology
            </h1>
            <p className="mt-5 opacity-90 font-semibold">
              Our advanced AI-driven solutions are applicable across a diverse
              spectrum, including law enforcement agencies, airports,
              immigration services, city safety, casinos, industrial facilities,
              residential and commercial complexes and more. We offer innovative
              security and surveillance solutions that redefine safety and
              protect the well-being of communities. Our tools help you to
              optimize inventory management, enhance the customer experience,
              and improve operational efficiency.
            </p>
          </div>

          <div className="w-1/3 bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-2xl">AI/ IOT powered solutions for retail</h1>
            <p className="mt-5 opacity-90 font-semibold">
              We are at the forefront of revolutionizing the retail industry
              with their cutting-edge AI-powered solutions. Leveraging advanced
              algorithms and machine learning, their technology empowers
              retailers to gain unparalleled insights into customer behavior,
              optimize inventory management, and enhance overall operational
              efficiency. Retailers can stay ahead of the competition,
              delivering seamless and personalized shopping experiences that
              drive customer satisfaction and boost profitability. Embrace the
              future of retail with AI solutions that redefine the industry's
              possibilities.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <Fade bottom>
          <h1 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
            <span class="text-gradient bg-gradient-to-r from-pink to-blue">
              Products & Services
            </span>
          </h1>
          <div className="flex justify-normal">
            <div className="w-1/3 bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
              <h1 className="text-white text-2xl">Cybersecurity</h1>
              <p className="mt-10 text-white opacity-90 font-semibold">
                <p>Academia</p>
                <p>AWARE - anti-phising product</p>
                <p>CyberQ</p>
                <p>Cybersecurity Consulting</p>
                <p>ISO Certification</p>
              </p>
            </div>

            <div className="w-1/3 bg-gradient-to-r from-purple to-blue p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
              <h1 className="text-white text-2xl">AI-powered systems</h1>
              <p className="mt-10 text-white opacity-90 font-semibold">
                <p>Law Enforcement</p>
                <p>Airports and Immigration</p>
                <p>Education Institutions</p>
                <p>Banking and Financial Institutions</p>
                <p>Hotel and Casinos</p>
                <p>Retail and Distribution</p>
                <p>Residential Buildings</p>
                <p>Health Care Facilities</p>
                <p>Clubs and Lounges</p>
                <p>Smart Cities</p>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default FeatureSection
