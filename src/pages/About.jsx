import meeting from '../assets/About/meeting.png'
import logo from '../assets/About/logo.jpg'

function About() {
  return (
    <main className="min-h-screen bg-transparent pb-20">
      <div className="h-[120px]" />

      <div className="flex">
        <div className="hidden lg:block w-[120px] xl:w-[140px]" />

        <div className="flex-1 px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="max-w-xl">
              <h1
                className="select-none text-left"
                style={{
                  fontFamily: '"Russo One", sans-serif',
                  fontSize: '80px',
                  lineHeight: '100%',
                  color: '#F1F5F9',
                }}
              >
                ABOUT US
              </h1>

              <div
                className="space-y-10 mt-10 text-left"
                style={{
                  fontFamily:
                    '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
                  fontSize: '16px',
                  lineHeight: '140%',
                  color: '#F1F5F9',
                }}
              >
                <section className="space-y-2">
                  <h2 className="font-semibold text-base">Description:</h2>
                  <p>
                    Our club brings together students who are passionate about
                    computer science and technology. We organize workshops,
                    hackathons, and social events to help members learn new
                    skills, collaborate, and explore career opportunities in
                    tech.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="font-semibold text-base">Mission Statement:</h2>
                  <p>
                    To create a supportive and inclusive space where students
                    can grow their technical and professional skills while
                    building lasting connections through shared curiosity and
                    creativity.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="font-semibold text-base">Goals:</h2>
                  <p>
                    – Host coding workshops and guest speaker events. <br />
                    – Encourage collaboration on open-source or student
                    projects. <br />
                    – Help members prepare for internships and tech interviews. <br />
                    – Promote diversity and accessibility in STEM fields.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="font-semibold text-base">Advisors:</h2>
                  <p>Prof. John Doe and Dr. Jane Smith</p>
                </section>

                <section className="space-y-2">
                  <h2 className="font-semibold text-base">
                    Affiliated Organizations:
                  </h2>
                  <p>Santa Monica College Computer Science Department, ACM</p>
                </section>
              </div>
            </div>

            <div className="relative w-[360px] h-[480px]">
              <div className="absolute top-0 left-0 w-[330px] h-[380px] z-10 transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-[28px] bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -z-10 translate-x-3 translate-y-3" />
                <img
                  src={meeting}
                  alt="CS Club meeting"
                  className="w-full h-full object-contain rounded-[20px]"
                />
              </div>

              <div className="absolute top-[160px] left-[150px] w-[300px] h-[340px] z-20 transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-[28px] bg-black/70 shadow-[0_8px_30px_rgba(0,0,0,0.6)] -z-10 translate-x-3 translate-y-3" />
                <img
                  src={logo}
                  alt="CS Club logo"
                  className="w-full h-full object-contain rounded-[20px]"
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
