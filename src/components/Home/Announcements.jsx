import { color, motion } from 'framer-motion';

/**
 * Announcements Section - Flexbox layout with fluid scaling
 * Now wrapped by parent for scroll animations
 */
function Announcements() {
  const announcements = [
    {
      id: 1,
      author: 'Evan Ly',
      date: 'December 18th, 2024 8:44 P.M',
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
    },
    {
      id: 2,
      author: 'Evan Ly',
      date: 'December 18th, 2024 8:44 P.M',
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
    },
    {
      id: 3,
      author: 'Evan Ly',
      date: 'December 18th, 2024 8:44 P.M',
      title: 'Just some test title',
      message: "Hi I'm just a text box here, you can add any text long or short here. Text here are just announcements for the SMC CS Club.",
    }
  ];

  const colorBank = [
    {foreground: '#0088FE', background: '#4273AA'},
    {foreground: '#3DDC84', background: '#014B51'},
    {foreground: '#F1F5F9', background: '#B3B3B3'},
  ]

  return (
    <div className="announcements-section">
      {/* Title */}
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        ANNOUNCEMENTS
      </motion.h1>

      {/* Announcement Cards */}
      <div className="cards-container">
        {announcements.map((announcement, index) => (
          <>
            <p style={{ fontFamily: 'Roboto Mono', color: '#AAA', margin: '0' }}>{announcement.date}</p>
            <h3 style={{ fontSize: "20px", textAlign: `${index % 3 == 1 ? 'right' : 'left'}`, padding: '0px 40px 10px 40px', margin: '0'}}>{announcement.author}</h3>
            <motion.div
              key={announcement.id}
              className="card-bubble"
              style={{ backgroundColor: `${colorBank[index % 3].foreground}`, margin: '0px 0px 40px 0px' }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                scale: 1.02,
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <h2 className="card-title" style={{ textAlign: 'left' }}>{announcement.title}</h2>
              <p className="card-message">{announcement.message}</p>
            </motion.div>
          </>
        ))}
      </div>

      {/* Read All Button */}
      <motion.div
        className="read-all-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button className="read-all-button">Read All &gt;</button>
      </motion.div>

      <style jsx>{`
        .announcements-section {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(2rem, 5vh, 4rem) clamp(1rem, 5vw, 3rem);
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
          width: 100%;
          max-width: 800px;
          margin-bottom: clamp(2rem, 4vh, 3rem);
        }

        .card-bubble {
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
      `}</style>
    </div>
  );
}

export default Announcements;
