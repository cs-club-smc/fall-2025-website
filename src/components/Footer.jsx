import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="site-footer">
      {/* Gradient divider — expands from center */}
      <motion.div
        className="footer-divider"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="footer-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Watermark */}
        <span className="footer-watermark" aria-hidden="true">SMC CS CLUB</span>

        {/* Content */}
        <div className="footer-content">
          <motion.p
            className="footer-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Built with ❤️ by the CS Club Website Committee
          </motion.p>
          <motion.p
            className="footer-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            1900 Pico Blvd, Santa Monica, CA 90405
          </motion.p>
        </div>
      </motion.div>

      <style jsx>{`
        .site-footer {
          position: relative;
          width: 100%;
          overflow: hidden;
          z-index: 5;
        }

        .footer-divider {
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #0FB588 25%,
            #4ECDC4 50%,
            #0FB588 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
          transform-origin: center;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .footer-inner {
          position: relative;
          background: linear-gradient(
            180deg,
            rgb(10, 10, 10) 0%,
            rgb(5, 5, 5) 100%
          );
          padding: clamp(1.5rem, 3.5vh, 2.5rem) clamp(1.5rem, 8vw, 145px);
          box-sizing: border-box;
        }

        .footer-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Russo One', sans-serif;
          font-size: clamp(36px, 8vw, 120px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.08);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: 0.05em;
        }

        .footer-content {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: clamp(0.75rem, 2vh, 1.5rem);
        }

        .footer-text {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(11px, 1.1vw, 16px);
          font-weight: 300;
          color: rgba(241, 245, 249, 0.7);
          margin: 0;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }

        .footer-text:hover {
          color: #F1F5F9;
        }

        @media (max-width: 950px) {
          .footer-inner {
            padding: 0.75rem 1.25rem;
          }
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 0.25rem;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
