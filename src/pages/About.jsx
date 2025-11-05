import background from '../assets/About/background.png';
import meeting from '../assets/About/meeting.png';
import logo from '../assets/About/logo.jpg';

function About() {
    return (
        <main
            className="min-h-screen bg-cover bg-center bg-no-repeat pt-24"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-white text-center mb-12">
                    ABOUT US
                </h1>

                <div className="max-w-4xl mx-auto space-y-8 text-white">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Description of the Club</h2>
                        <p className="text-lg leading-relaxed">
                            The SMC Computer Science Club is a student-led organization dedicated to fostering a community of technology enthusiasts, innovators, and problem solvers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Mission Statement</h2>
                        <p className="text-lg leading-relaxed">
                            Our mission is to inspire excellence through technology and teamwork, bringing passionate individuals together to learn, innovate, and lead in the field of computer science.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Goals</h2>
                        <p className="text-lg leading-relaxed">
                            We aim to provide knowledge, experience, and networking opportunities to help our members grow as developers and computer scientists.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Advisors</h2>
                        <p className="text-lg leading-relaxed">
                            Information about club advisors will be updated soon.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Affiliated Organizations</h2>
                        <p className="text-lg leading-relaxed">
                            Information about affiliated organizations will be updated soon.
                        </p>
                    </section>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    <img
                        src={meeting}
                        alt="CS Club meeting"
                        className="w-full max-w-sm h-auto rounded-3xl object-cover"
                    />
                    <img
                        src={logo}
                        alt="CS Club logo"
                        className="w-full max-w-sm h-auto rounded-3xl object-cover"
                    />
                </div>
            </div>
        </main>
    );
}

export default About;