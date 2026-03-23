import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/Navbar/cs-club-logo.png";
import JoinNowButton from "./JoinNowButton";

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => setMenuOpen(false), [location.pathname]);

    const linkClass = (path) =>
        location.pathname === path ? "nav-link active-link" : "nav-link";

    return (
        <nav className="top-0 right-0 left-0 z-50 fixed bg-black/30 backdrop-blur-md border-white/10 border-b">
            <div className="navbar-inner">
                {/* Logo */}
                <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="CS Club Logo" className="navbar-logo-img" />
                </Link>

                {/* Desktop/Tablet nav links */}
                <div className="navbar-links">
                    <Link to="/" className={linkClass("/")}>Home</Link>
                    <Link to="/about" className={linkClass("/about")}>About</Link>
                    <Link to="/team" className={linkClass("/team")}>Our Team</Link>
                </div>

                {/* Desktop/Tablet Join Now */}
                <div className="navbar-button">
                    <JoinNowButton />
                </div>

                {/* Hamburger toggle (mobile only) */}
                <button
                    className="navbar-hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/about" className={linkClass("/about")} onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="/team" className={linkClass("/team")} onClick={() => setMenuOpen(false)}>Our Team</Link>
                        <div className="mobile-menu-button">
                            <JoinNowButton />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .navbar-inner {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: clamp(10px, 0.8vh, 14px) clamp(16px, 2vw, 32px);
                }

                .navbar-logo {
                    flex: 1;
                    display: flex;
                    align-items: center;
                }

                .navbar-logo-img {
                    height: clamp(36px, 2.8vw, 48px);
                    width: auto;
                }

                .navbar-links {
                    display: flex;
                    flex: none;
                    justify-content: center;
                    gap: clamp(16px, 2vw, 32px);
                    font-family: 'Russo One', sans-serif;
                    font-size: clamp(14px, 1.1vw, 18px);
                }

                .nav-link {
                    color: #F1F5F9;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .nav-link:hover {
                    color: #2dd4bf;
                }

                .navbar-links .active-link {
                    color: #2dd4bf;
                }

                .navbar-button {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    margin-right: clamp(0px, 1.5vw, 16px);
                }

                .navbar-hamburger {
                    display: none;
                    background: none;
                    border: none;
                    color: #F1F5F9;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 8px;
                    transition: background 0.2s ease;
                }

                .navbar-hamburger:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                /* Mobile menu */
                .mobile-menu {
                    display: flex;
                    flex-direction: column;
                    padding: 0 16px 20px 16px;
                    gap: 4px;
                    overflow: hidden;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                .mobile-menu .nav-link {
                    display: block;
                    padding: 14px 16px;
                    font-family: 'Russo One', sans-serif;
                    font-size: 18px;
                    color: rgba(241, 245, 249, 0.8);
                    text-decoration: none;
                    border-radius: 10px;
                    transition: background 0.2s ease, color 0.2s ease;
                }

                .mobile-menu .nav-link:hover {
                    background: rgba(255, 255, 255, 0.06);
                    color: #F1F5F9;
                }

                .mobile-menu .active-link {
                    color: #0FB588;
                    background: rgba(15, 181, 136, 0.08);
                }

                .mobile-menu-button {
                    padding: 12px 16px 4px 16px;
                }

                /* Mobile: < 768px */
                @media (max-width: 768px) {
                    .navbar-inner {
                        padding: 12px 16px;
                    }

                    .navbar-logo-img {
                        height: 36px;
                    }

                    .navbar-links {
                        display: none;
                    }

                    .navbar-button {
                        display: none;
                    }

                    .navbar-hamburger {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;
