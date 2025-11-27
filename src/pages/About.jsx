import meeting from '../assets/About/meeting.png'
import logo from '../assets/About/logo.jpg'

function About() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="h-[140px]" />

      <div className="px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
          {/* Left side - Text content */}
          <div className="flex-1 w-full">
            <h1
              className="text-white select-none text-left mb-12 lg:mb-16"
              style={{
                fontFamily: '"Russo One", sans-serif',
                fontSize: 'clamp(60px, 10vw, 120px)',
                lineHeight: '100%',
              }}
            >
              ABOUT US
            </h1>

            <div
              className="text-white space-y-8 lg:space-y-10 text-left max-w-4xl"
              style={{
                fontFamily:
                  '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                lineHeight: '170%',
              }}
            >
              <section>
                <h2 className="font-semibold text-xl lg:text-2xl mb-3 text-[#66C48A]">Description:</h2>
                <p>
                  Our club brings together students who are passionate about
                  computer science and technology. We organize workshops,
                  hackathons, and social events to help members learn new skills,
                  collaborate, and explore career opportunities in tech.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-xl lg:text-2xl mb-3 text-[#66C48A]">Mission Statement:</h2>
                <p>
                  To create a supportive and inclusive space where students can
                  grow their technical and professional skills while building
                  lasting connections through shared curiosity and creativity.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-xl lg:text-2xl mb-3 text-[#66C48A]">Goals:</h2>
                <p>
                  – Host coding workshops and guest speaker events. <br />
                  – Encourage collaboration on open-source or student projects. <br />
                  – Help members prepare for internships and tech interviews. <br />
                  – Promote diversity and accessibility in STEM fields.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-xl lg:text-2xl mb-3 text-[#66C48A]">Advisors:</h2>
                <p>Prof. John Doe and Dr. Jane Smith</p>
              </section>

              <section>
                <h2 className="font-semibold text-xl lg:text-2xl mb-3 text-[#66C48A]">
                  Affiliated Organizations:
                </h2>
                <p>Santa Monica College Computer Science Department, ACM</p>
              </section>
            </div>
          </div>

          {/* Right side - Image cluster */}
          <div className="flex-shrink-0 w-full xl:w-auto flex justify-center xl:justify-end xl:pt-16">
            <div className="relative w-[380px] h-[540px] md:w-[480px] md:h-[640px] xl:w-[520px] xl:h-[700px]">
              <div className="absolute top-0 left-0 w-[300px] h-[360px] md:w-[380px] md:h-[440px] xl:w-[420px] xl:h-[500px] z-10 transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-[28px] bg-black/75 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -z-10 translate-x-3 translate-y-3" />
                <img
                  src={meeting}
                  alt="CS Club meeting"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="absolute top-[200px] left-[100px] md:top-[240px] md:left-[140px] xl:top-[280px] xl:left-[160px] w-[280px] h-[320px] md:w-[340px] md:h-[380px] xl:w-[360px] xl:h-[400px] z-20 transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-[28px] bg-black/75 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -z-10 translate-x-3 translate-y-3" />
                <img
                  src={logo}
                  alt="CS Club logo"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
