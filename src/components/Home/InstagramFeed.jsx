import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function InstagramFeed() {
  const embedRef = useRef(null);
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    let retryCount = 0;
    let retryTimer;

    const processEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    const retryProcess = () => {
      retryTimer = setTimeout(() => {
        retryCount++;
        // Check if the iframe was created (means the embed loaded successfully)
        const iframe = embedRef.current?.querySelector('iframe');
        if (iframe) return;

        if (retryCount < 3) {
          processEmbed();
          retryProcess();
        } else {
          setEmbedFailed(true);
        }
      }, 2000);
    };

    if (window.instgrm) {
      processEmbed();
      retryProcess();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        processEmbed();
        retryProcess();
      };
      script.onerror = () => setEmbedFailed(true);
      document.body.appendChild(script);
    }

    return () => clearTimeout(retryTimer);
  }, []);

  return (
    <div className="instagram-section">
      <motion.h1
        className="instagram-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        OUR INSTAGRAM
      </motion.h1>

      <motion.p
        className="instagram-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        @csclub.smc
      </motion.p>

      <motion.div
        className="instagram-embed-wrapper"
        ref={embedRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {embedFailed ? (
          <a
            href="https://www.instagram.com/csclub.smc/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-fallback"
          >
            <p className="instagram-fallback-text">
              View our Instagram posts at<br />
              <span className="instagram-fallback-handle">@csclub.smc</span>
            </p>
          </a>
        ) : (
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/csclub.smc/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '12px',
              margin: '0 auto',
              maxWidth: '540px',
              width: '100%',
              padding: 0,
            }}
          />
        )}
      </motion.div>

      <motion.div
        className="instagram-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="https://www.instagram.com/csclub.smc/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          Follow Us on Instagram
        </a>
      </motion.div>

      <style>{`
        .instagram-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(3rem, 8vh, 6rem) clamp(1rem, 5vw, 3rem);
          box-sizing: border-box;
        }

        .instagram-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(40px, 6vw, 96px);
          font-weight: 400;
          line-height: 1.2;
          text-align: center;
          color: #F1F5F9;
          margin: 0 0 0.25em 0;
          letter-spacing: 0.04em;
        }

        .instagram-subtitle {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(14px, 2vw, 22px);
          color: #0FB588;
          margin: 0 0 clamp(2rem, 5vh, 4rem) 0;
          letter-spacing: 0.05em;
        }

        .instagram-embed-wrapper {
          width: 100%;
          max-width: 580px;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: clamp(12px, 2vw, 24px);
          border: 1px solid rgba(15, 181, 136, 0.2);
          border-radius: 16px;
          background: rgba(15, 181, 136, 0.04);
          box-shadow: 0 0 40px rgba(15, 181, 136, 0.08);
        }

        .instagram-fallback {
          text-decoration: none;
          text-align: center;
          padding: 2rem;
        }

        .instagram-fallback-text {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(14px, 2vw, 18px);
          color: #94A3B8;
          line-height: 1.6;
        }

        .instagram-fallback-handle {
          color: #0FB588;
          font-weight: 600;
        }

        .instagram-cta {
          margin-top: clamp(1.5rem, 4vh, 3rem);
        }

        .instagram-link {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(14px, 1.5vw, 20px);
          color: #0FB588;
          text-decoration: none;
          border: 1px solid rgba(15, 181, 136, 0.4);
          border-radius: clamp(10px, 1vw, 14px);
          padding: clamp(10px, 1.5vh, 16px) clamp(20px, 3vw, 36px);
          transition: all 0.3s ease;
          letter-spacing: 0.02em;
        }

        .instagram-link:hover {
          background: rgba(15, 181, 136, 0.12);
          border-color: #0FB588;
          box-shadow: 0 0 20px rgba(15, 181, 136, 0.15);
        }
      `}</style>
    </div>
  );
}

export default InstagramFeed;
