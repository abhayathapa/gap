import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
      <Fade bottom>
        <div className="w-full flex flex-row justify-between align-middle bg-lightblack p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4">
            <p className="text-white leading-10 xxs:text-xs xxs:font-normal sm:text-xl">
              Working with GAP Technologies has been nothing short of
              exceptional. Their team's unwavering dedication to cybersecurity
              is truly commendable. Their in-depth knowledge and innovative
              solutions have provided us with a sense of security and peace of
              mind that is priceless in today's digital landscape. Their
              proactive approach to identifying vulnerabilities and implementing
              robust security measures has not only shielded clients from
              potential risks but has also allowed us to focus on our core
              business activities without worry.
            </p>
            <br />
            <p className="text-white leading-10 xxs:text-xs xxs:font-normal sm:text-xl">
              What sets GAP Technologies apart is their commitment to continuous
              improvement and staying ahead of the evolving cybersecurity
              landscape. They not only provide top-notch services but also take
              the time to educate and empower the team, ensuring that clients
              are well-prepared to face any challenges that may arise.
            </p>
            <br />
            <p className="text-white leading-10 xxs:text-xs xxs:font-normal sm:text-xl">
              If you're seeking a partner in cybersecurity that is reliable,
              knowledgeable, and genuinely invested in your organization's
              safety, look no further than GAP Technologies. They have truly set
              the gold standard for cybersecurity services in Nepal, and we
              couldn't be more grateful for their partnership.
            </p>
            <div className="mt-10">
              <h1 className="text-white text-3xl font-bold font-poppins">
                Nisarg H Acharya
              </h1>
              <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                Vice President - EC Council
              </h1>
            </div>
          </div>
          <div className="w-1/4 overflow-hidden flex align-middle justify-center xxs:hidden sm:block">
            <img
              className="rounded-xl w-auto h-auto"
              src="https://media.licdn.com/dms/image/D4D03AQEIuXg8yyRKdg/profile-displayphoto-shrink_800_800/0/1691144036217?e=1701907200&v=beta&t=8rxKUjHvWGAxZUSKbLCrLqIz6YZ_TXgVly-9KZHU-q8&auto=format&fit=crop&w=800&q=60"
            ></img>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
