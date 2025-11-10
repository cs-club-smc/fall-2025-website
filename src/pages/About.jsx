import meeting from '../assets/About/meeting.png'
import logo from '../assets/About/logo.jpg'

function About() {
  return (
    <main className="min-h-screen bg-transparent pb-20">
      <div className="h-[120px]" />

      <div className="flex">
        <div className="hidden lg:block w-[280px] xl:w-[320px]" />

        <div className="flex-1 max-w-3xl ml-auto mr-auto px-6 flex flex-col">
          <div>
            <h1
              className="text-white select-none text-left"
              style={{
                fontFamily: '"Russo One", sans-serif',
                fontSize: '90px',
                lineHeight: '100%',
              }}
            >
              ABOUT US
            </h1>
          </div>

          <div className="h-20" />

          <div
            className="text-white space-y-10 text-left"
            style={{
              fontFamily:
                '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: '16px',
              lineHeight: '150%',
            }}
          >
            <section>
              <h2 className="font-semibold text-lg mb-2">Description:</h2>
              <p>
                Our club brings together students who are passionate about
                computer science and technology. We organize workshops,
                hackathons, and social events to help members learn new skills,
                collaborate, and explore career opportunities in tech.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">Mission Statement:</h2>
              <p>
                To create a supportive and inclusive space where students can
                grow their technical and professional skills while building
                lasting connections through shared curiosity and creativity.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">Goals:</h2>
              <p>
                – Host coding workshops and guest speaker events. <br />
                – Encourage collaboration on open-source or student projects. <br />
                – Help members prepare for internships and tech interviews. <br />
                – Promote diversity and accessibility in STEM fields.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">Advisors:</h2>
              <p>Prof. John Doe and Dr. Jane Smith</p>
            </section>

            <section>
              <h2 className="font-semibold text-lg mb-2">
                Affiliated Organizations:
              </h2>
              <p>Santa Monica College Computer Science Department, ACM</p>
            </section>
          </div>

          <div className="h-28" />

          <div className="flex flex-wrap justify-center lg:justify-start lg:ml-24 xl:ml-32 relative">
            <div className="relative w-[370px] h-[430px] z-10 flex items-center justify-center -mt-6 transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-[28px] bg-black/75 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -z-10 translate-x-3 translate-y-3 transition duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]" />
              <img
                src={meeting}
                alt="CS Club meeting"
                className="w-[92%] h-[92%] object-contain rounded-[20px]"
              />
            </div>

            <div className="relative w-[370px] h-[430px] -ml-10 mt-8 z-20 flex items-center justify-center transition-transform duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-[28px] bg-black/75 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -z-10 translate-x-3 translate-y-3 transition duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]" />
              <img
                src={logo}
                alt="CS Club logo"
                className="w-[92%] h-[92%] object-contain rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
