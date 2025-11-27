import { motion } from 'framer-motion';
import DownArrow from '../DownArrow';

/**
 * Announcements Section - Flexbox layout with fluid scaling
 */
function Announcements() {
  // Stagger animation for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const announcements = [
    {
      id: 1,
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
    },
    {
      id: 2,
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
    },
    {
      id: 3,
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
    }
  ];

  return (
    <section id="announcements" className="announcements-section">
      {/* Title */}
      <motion.h1
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        ANNOUNCEMENTS
      </motion.h1>

      {/* Announcement Cards - flex layout with stagger */}
      <div className="cards-container">
        {announcements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            className="card-bubble"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.02,
              x: 10,
              transition: { duration: 0.2 }
            }}
          >
            <h2 className="card-title">{announcement.title}</h2>
            <p className="card-message">{announcement.message}</p>
          </motion.div>
        ))}
      </div>

      {/* Read All Button */}
      <motion.div
        className="read-all-container"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <button className="read-all-button">Read All &gt;</button>
      </motion.div>

      {/* Down Arrow */}
      <motion.div
        className="arrow-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <DownArrow targetId="projects" />
      </motion.div>

      <style jsx>{`
        .announcements-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(3rem, 8vh, 6rem) clamp(1rem, 5vw, 3rem);
          padding-bottom: clamp(5rem, 10vh, 8rem);
          box-sizing: border-box;
        }

        .section-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(40px, 6vw, 96px);
          font-weight: 400;
          line-height: 1.2;
          text-align: center;
          color: #F1F5F9;
          margin: 0 0 clamp(2rem, 5vh, 4rem) 0;
        }

        .cards-container {
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vh, 2.5rem);
          width: 100%;
          max-width: 800px;
          margin-bottom: clamp(2rem, 4vh, 3rem);
        }

        .card-bubble {
          background: linear-gradient(135deg, #0088FE 0%, #4273AA 100%);
          border-radius: clamp(16px, 2vw, 24px);
          padding: clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2vw, 1.5rem);
          width: 100%;
          box-sizing: border-box;
        }

        .card-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(20px, 2.5vw, 36px);
          font-weight: 400;
          line-height: 1.2;
          color: #000000;
          margin: 0 0 clamp(8px, 1vh, 12px) 0;
        }

        .card-message {
          font-family: 'Roboto Mono', monospace;
          font-size: clamp(12px, 1vw, 14px);
          font-weight: 300;
          line-height: 1.5;
          color: #000000;
          margin: 0;
        }

        .read-all-container {
          text-align: center;
          margin-bottom: clamp(2rem, 4vh, 3rem);
        }

        .read-all-button {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(20px, 2.5vw, 36px);
          font-weight: 400;
          color: #F1F5F9;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: opacity 0.2s ease;
        }

        .read-all-button:hover {
          opacity: 0.8;
        }

        .arrow-container {
          position: absolute;
          left: 50%;
          bottom: clamp(20px, 4vh, 48px);
          transform: translateX(-50%);
        }
      `}</style>
    </section>
  );
}

export default Announcements;
