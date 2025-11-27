import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import DownArrow from '../DownArrow';
import benefitIcon1 from '../../assets/icons/benefit-icon-1.svg';
import benefitIcon2 from '../../assets/icons/benefit-icon-2.svg';
import benefitIcon3 from '../../assets/icons/benefit-icon-3.svg';

/**
 * Landing Component
 * Hero section with text scramble effect and refined aesthetics
 */

// Text scramble hook - decodes text character by character
function useTextScramble(text, delay = 0, speed = 30) {
  const [displayed, setDisplayed] = useState('');
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`01';

  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    let scrambleCount = 0;

    const scramble = () => {
      if (currentIndex <= text.length) {
        const revealed = text.slice(0, currentIndex);
        const scrambled = text.slice(currentIndex, currentIndex + 3)
          .split('')
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join('');
        setDisplayed(revealed + scrambled);

        scrambleCount++;
        if (scrambleCount >= 2) {
          scrambleCount = 0;
          currentIndex++;
        }
        timeout = setTimeout(scramble, speed);
      } else {
        setDisplayed(text);
      }
    };

    const startTimeout = setTimeout(scramble, delay);
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return displayed;
}

function Landing() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scramble effect for title - slowed down 50%
  const smcText = useTextScramble('SMC', 450, 60);
  const csText = useTextScramble('CS CLUB', 900, 55);

  // Mouse tracking for subtle tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const benefits = [
    { icon: benefitIcon1, label: 'Knowledge' },
    { icon: benefitIcon2, label: 'Experience' },
    { icon: benefitIcon3, label: 'Networking' }
  ];

  return (
    <div className="landing-container" ref={containerRef}>
      {/* Grain overlay */}
      <div className="grain" />

      {/* Gradient mesh background */}
      <div className="gradient-bg">
        <div className="gradient-blob blob-1" />
        <div className="gradient-blob blob-2" />
      </div>

      {/* Main Content */}
      <motion.div
        className="content-wrapper"
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
      >
        {/* Hero Title with scramble decode */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="title-line" data-text="SMC">
            <span className="title-text">{smcText}</span>
            <span className="title-outline" aria-hidden="true">SMC</span>
          </span>
          <span className="title-line" data-text="CS CLUB">
            <span className="title-text">{csText}</span>
            <span className="title-outline" aria-hidden="true">CS CLUB</span>
          </span>
        </motion.h1>

        {/* Mission Statement */}
        <motion.p
          className="mission-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Inspiring excellence through technology and teamwork. SMC CS Club is where passionate individuals come together to learn, innovate, and lead in the field of computer science.
        </motion.p>

        {/* Benefits - simple inline */}
        <motion.div
          className="benefits-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {benefits.map((benefit, i) => (
            <div key={benefit.label} className="benefit-item">
              <div className="benefit-icon-wrapper">
                <img src={benefit.icon} alt="" className="benefit-icon" />
              </div>
              <span className="benefit-label">{benefit.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Down Arrow */}
        <motion.div
          className="arrow-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <DownArrow targetId="announcements" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .landing-container {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
        }

        /* Film grain texture */
        .grain {
          position: absolute;
          inset: -50%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          animation: grainShift 0.5s steps(1) infinite;
        }

        @keyframes grainShift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2%, -2%); }
          50% { transform: translate(2%, 2%); }
          75% { transform: translate(-2%, 2%); }
        }

        /* Gradient background */
        .gradient-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
          animation: blobFloat 20s ease-in-out infinite;
        }

        .blob-1 {
          width: 50vw;
          height: 50vw;
          max-width: 600px;
          max-height: 600px;
          top: -10%;
          right: -10%;
          background: rgba(15, 181, 136, 0.3);
        }

        .blob-2 {
          width: 40vw;
          height: 40vw;
          max-width: 500px;
          max-height: 500px;
          bottom: -10%;
          left: -10%;
          background: rgba(0, 136, 254, 0.25);
          animation-delay: -10s;
        }

        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(3%, 3%) scale(1.05); }
          66% { transform: translate(-2%, 2%) scale(0.95); }
        }

        /* Content */
        .content-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 5vh, 4rem) clamp(1rem, 5vw, 3rem);
          box-sizing: border-box;
        }

        /* Hero Title - stacked outline effect */
        .hero-title {
          position: relative;
          font-family: 'Russo One', sans-serif;
          font-size: clamp(52px, 13vw, 240px);
          font-weight: 400;
          line-height: 0.9;
          text-align: center;
          margin: 0;
          margin-bottom: clamp(2rem, 4vh, 3.5rem);
          display: flex;
          flex-direction: column;
        }

        .title-line {
          position: relative;
          display: block;
        }

        .title-text {
          position: relative;
          z-index: 2;
          color: #F1F5F9;
          display: inline-block;
          min-width: 100%;
          text-align: center;
        }

        /* Chromatic aberration layers */
        .title-line::before,
        .title-line::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          overflow: hidden;
          pointer-events: none;
          opacity: 0;
        }

        .title-line::before {
          color: #ff0040;
          z-index: 3;
        }

        .title-line::after {
          color: #00ffff;
          z-index: 3;
        }

        .title-outline {
          position: absolute;
          inset: 0;
          z-index: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(15, 181, 136, 0.3);
          transform: translate(4px, 4px);
          pointer-events: none;
          user-select: none;
        }

        /* Glitch effect on hover */
        .title-line:hover .title-text {
          animation: glitchText 0.7s steps(2) forwards;
        }

        .title-line:hover::before {
          animation: glitchRed 0.7s steps(2) forwards;
        }

        .title-line:hover::after {
          animation: glitchCyan 0.7s steps(2) forwards;
        }

        @keyframes glitchText {
          0% { opacity: 1; }
          5% { opacity: 0; }
          5.5% { opacity: 1; }
          10% { opacity: 1; transform: translate(0); }
          15% { opacity: 0; }
          16% { opacity: 1; }
          20% { transform: translate(-3px, 0); }
          25% { transform: translate(0); opacity: 0; }
          26% { opacity: 1; }
          30% { transform: translate(2px, 1px); }
          35% { transform: translate(0); }
          40% { opacity: 0; }
          41% { opacity: 1; }
          50% { transform: translate(-2px, -1px); }
          55% { transform: translate(0); opacity: 0; }
          56% { opacity: 1; }
          65% { transform: translate(3px, 0); }
          70% { transform: translate(0); }
          80% { opacity: 0; }
          81% { opacity: 1; }
          90% { transform: translate(-1px, 1px); }
          100% { transform: translate(0); opacity: 1; }
        }

        @keyframes glitchRed {
          0%, 100% { opacity: 0; }
          5% { opacity: 0.8; transform: translate(-4px, -1px); clip-path: inset(20% 0 40% 0); }
          10% { opacity: 0; }
          20% { opacity: 0.6; transform: translate(-3px, 2px); clip-path: inset(60% 0 10% 0); }
          25% { opacity: 0; }
          40% { opacity: 0.7; transform: translate(-5px, 0); clip-path: inset(10% 0 70% 0); }
          45% { opacity: 0; }
          55% { opacity: 0.8; transform: translate(-3px, -2px); clip-path: inset(50% 0 20% 0); }
          60% { opacity: 0; }
          75% { opacity: 0.5; transform: translate(-4px, 1px); clip-path: inset(30% 0 50% 0); }
          80% { opacity: 0; }
        }

        @keyframes glitchCyan {
          0%, 100% { opacity: 0; }
          8% { opacity: 0.8; transform: translate(4px, 1px); clip-path: inset(40% 0 30% 0); }
          13% { opacity: 0; }
          25% { opacity: 0.6; transform: translate(3px, -1px); clip-path: inset(10% 0 60% 0); }
          30% { opacity: 0; }
          45% { opacity: 0.7; transform: translate(5px, 2px); clip-path: inset(70% 0 5% 0); }
          50% { opacity: 0; }
          60% { opacity: 0.8; transform: translate(3px, 0); clip-path: inset(25% 0 55% 0); }
          65% { opacity: 0; }
          80% { opacity: 0.5; transform: translate(4px, -2px); clip-path: inset(45% 0 35% 0); }
          85% { opacity: 0; }
        }

        /* Mission Text */
        .mission-text {
          max-width: min(85%, 950px);
          font-family: 'Russo One', sans-serif;
          font-size: clamp(14px, 1.4vw, 22px);
          font-weight: 400;
          line-height: 1.5;
          text-align: center;
          color: rgba(241, 245, 249, 0.75);
          margin: 0;
          margin-bottom: clamp(2.5rem, 5vh, 4rem);
        }

        /* Benefits - clean inline */
        .benefits-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(2rem, 6vw, 5rem);
          flex-wrap: wrap;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1vw, 16px);
          transition: transform 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateY(-2px);
        }

        .benefit-item:hover .benefit-icon-wrapper {
          box-shadow: 0 0 20px rgba(15, 181, 136, 0.4);
        }

        .benefit-icon-wrapper {
          width: clamp(40px, 3.5vw, 54px);
          height: clamp(40px, 3.5vw, 54px);
          background: linear-gradient(135deg, #0FB588 0%, #0088FE 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: box-shadow 0.3s ease;
        }

        .benefit-icon {
          width: clamp(22px, 2vw, 30px);
          height: clamp(22px, 2vw, 30px);
          filter: brightness(0) invert(1);
        }

        .benefit-label {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(1rem, 1.3vw, 1.5rem);
          font-weight: 400;
          color: #F1F5F9;
          white-space: nowrap;
        }

        /* Arrow */
        .arrow-wrapper {
          position: absolute;
          left: 50%;
          bottom: clamp(20px, 4vh, 48px);
          transform: translateX(-50%);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .benefits-container {
            flex-direction: column;
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Landing;
