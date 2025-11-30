import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Navbar/cs-club-logo.png";
import JoinNowButton from "./JoinNowButton";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="w-full px-12 py-6 flex items-center">
                {/* Logo - Left side */}
                <div className="flex-1">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="CS Club Logo" className="h-20 w-auto" />
                    </Link>
                </div>

                {/* Navigation Links - Centered */}
                <div className="flex-none flex justify-center gap-12 text-2xl" style={{ fontFamily: "'Russo One', sans-serif" }}>
                    <Link
                        to="/"
                        className={`transition-colors ${
                            location.pathname === '/'
                                ? 'text-teal-400'
                                : 'text-white hover:text-teal-400'
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`transition-colors ${
                            location.pathname === '/about'
                                ? 'text-teal-400'
                                : 'text-white hover:text-teal-400'
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/team"
                        className={`transition-colors ${
                            location.pathname === '/team'
                                ? 'text-teal-400'
                                : 'text-white hover:text-teal-400'
                        }`}
                    >
                        Our Team
                    </Link>
                </div>

                {/* Right side - Join Now Button */}
                <div className="flex-1 flex justify-end">
                    <JoinNowButton />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
