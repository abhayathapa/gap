import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
// import ec1 from "../../images/ec1.jpg"

// Assets
// import HeaderImage from "../../images/header-main.jpg"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Fade>
        {/* <div className="overflow-hidden flex align-middle justify-center sm:block">
          <a href="https://eccouncil.org/cybersecurity-scholarship-nepal/">
            <img src={ec1} alt="EC Council"></img>
          </a>
        </div> */}
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xl lg:text-xl mb-3">
            We deliver premium solutions on cybersecurity, AI and IOT solutions
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Change starts with a<br></br>
            <span class="text-gradient bg-gradient-to-r from-pink to-blue">
              single click.
            </span>
          </h1>
        </div>
      </Fade>
      {/* <div className="mt-10 xxs:flex xxs:flex-row sm:block">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Request Access"
            textColor="text-white"
            marginClass="ml-5"
          ></Button>
        </div>
      /* <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <img className="w-full h-full" src={HeaderImage} alt="Header"></img>
        </div>
      </div> */}
    </div>
  )
}

export default Header
