import { Link } from "react-router-dom";
import logo from "../assets/Navbar/cs-club-logo.png";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="w-full px-12 py-6 flex items-center">
                {/* Logo - Left side */}
                <div className="flex-none">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="CS Club Logo" className="h-20 w-auto" />
                    </Link>
                </div>

                {/* Navigation Links - Centered */}
                <div className="flex-1 flex justify-center gap-12 text-2xl" style={{ fontFamily: "'Russo One', sans-serif" }}>
                    <Link
                        to="/"
                        className="text-teal-400 hover:text-teal-300 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-teal-400 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        to="/members"
                        className="text-white hover:text-teal-400 transition-colors"
                    >
                        Members
                    </Link>
                </div>

                {/* Right side - placeholder for Join Now Button */}
                <div className="flex-none w-20"></div>
            </div>
        </nav>
    );
}

export default Navbar;
