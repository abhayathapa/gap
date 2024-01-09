import React from "react"
import AboutTeamCard from "./aboutTeamCard"
import abhaya from "../../images/abhaya.jpg"
import prince from "../../images/prince.jpeg"
import gaurav from "../../images/gaurav.jpeg"

const AboutGrid = () => {
  return (
    <div>
      {/* <h1 className="text-white text-5xl ml-60 mt-10 pl-3 font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl">
        Join the revolution
      </h1> */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
        <AboutTeamCard
          imgSrc={prince}
          position="Prince Khetan, Co-founder"
        ></AboutTeamCard>
        <AboutTeamCard
          imgSrc={gaurav}
          position="Gaurav Shrestha, Co-founder"
        ></AboutTeamCard>
        <AboutTeamCard
          imgSrc={abhaya}
          position="Abhaya Thapa, Co-founder"
        ></AboutTeamCard>
        {/* <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1536096928601-99bac26a838b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Kristina, Designer"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Devin Ferry, Manager"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="David, Developer"
      ></AboutTeamCard> */}
      </div>
      <div class="max-w-7xl mx-auto mt-5">
        <section class="text-white rounded-lg shadow-lg">
          <h1 className="font-semibold text-white text-4xl mb-5 mt-10">
            Join the revolution
          </h1>
          <p className="mb-5">
            At GAP Technologies, we believe that exceptional teams drive
            extraordinary results. Our journey towards innovation and excellence
            is powered by talented individuals who are passionate about
            technology, cybersecurity, and making a difference.
          </p>

          <p className="mb-5">
            When you join our team, you become a part of a dynamic, diverse, and
            forward-thinking group of professionals who are committed to pushing
            the boundaries of what's possible. Whether you're an experienced
            expert or a fresh talent, we welcome your unique perspectives and
            skills.
          </p>

          <p className="mb-5">
            We foster a collaborative and inclusive work environment where your
            ideas are not just heard but celebrated. Together, we are building a
            secure digital future, reselling cybersecurity academia powered by
            EC Council and many more interesting things in the days ahead.
          </p>

          <p className="mb-5">
            If you're looking for a rewarding career in a fast-growing
            technology company and are ready to make your mark in the world of
            cybersecurity and artificial intelligence, we invite you to join us
            on this exciting journey to redefine possibilities, protect digital
            landscapes, and drive innovation.
          </p>

          <p className="mb-5">
            Discover your potential with us. Join GAP Technologies and be a part
            of something extraordinary.
          </p>

          {/* <form class="mt-6" action="submit_form.php" method="post">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="mb-4">
                <label for="name" class="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-white font-semibold mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div class="mb-4">
                <label
                  for="contact_number"
                  class="block text-white font-semibold mb-2"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact_number"
                  name="contact_number"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div class="mt-6">
              <button
                type="submit"
                class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form> */}
        </section>
      </div>

      <div className="max-w-7xl mx-auto mt-5 text-white">
        <h1 className="font-semibold text-white text-4xl mb-2">
          Sustainability Initiatives
        </h1>
        <p className="mb-5">
          At GAP Technologies, we are committed to sustainability and believe in
          the responsible use of technology to make a positive impact on the
          environment and society. Our sustainability initiatives are rooted in
          our core values, and we continually strive to reduce our ecological
          footprint, support our local community, and promote ethical business
          practices. Here are some key aspects of our sustainability efforts:
        </p>
        <p className="mb-5">
          Green Technology Adoption: We prioritize the use of energy-efficient
          and environmentally friendly technologies in our operations. From data
          centers to office facilities, we are dedicated to minimizing our
          carbon footprint.
        </p>
        <p className="mb-5">
          Reducing E-Waste: We promote the responsible disposal and recycling of
          electronic waste, ensuring that our products have minimal
          environmental impact throughout their lifecycle.
        </p>
        <p className="mb-5">
          Community Engagement: We actively engage with our local community
          through initiatives such as educational programs, workshops, and
          technology donations to underserved areas. We are committed to giving
          back and supporting the development of future technology leaders.
        </p>
        <p>
          Ethical Sourcing: We work with suppliers and partners who share our
          commitment to ethical and sustainable business practices. We ensure
          that our supply chain adheres to high standards of responsibility and
          fairness.
        </p>
        <p className="mb-5">
          Remote Work and Flexibility: We support remote work options and
          flexible schedules for our employees, reducing the need for daily
          commuting and decreasing our overall environmental footprint.
        </p>
        <p className="mb-5">
          Paperless Operations: We strive to minimize paper usage by
          implementing digital processes, reducing our reliance on physical
          documentation, and opting for electronic communication and
          documentation wherever possible.
        </p>
        <p className="mb-5">
          Continuous Improvement: We actively seek ways to improve our
          sustainability efforts, set measurable goals, and regularly assess our
          progress to ensure we are on track to meet our sustainability
          objectives.
        </p>
        <p className="mb-5">
          Our sustainability initiatives are not only about being
          environmentally responsible but also about creating a positive and
          lasting impact on the world around us. We believe that by integrating
          sustainability into our business practices, we can contribute to a
          better, more sustainable future for all.
        </p>
      </div>
    </div>
  )
}

export default AboutGrid
