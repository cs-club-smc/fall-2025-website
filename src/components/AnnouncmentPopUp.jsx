import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import AnnouncmentModule from './AnnouncmentModule'

const AnnouncmentPopUp = ({ onClose, announcements }) => {
  // Prevent body scroll and save scroll position
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleOverlayClick = (e) => {
    // Close if clicking directly on the overlay (not on the popup content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const popupContent = (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleOverlayClick}
    >
      <motion.div
        className="popup-content"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="popup-header">
          <button 
            className="close-button" 
            onClick={handleCloseClick} 
            aria-label="Close"
            type="button"
          >
            <span className="close-icon-x">×</span>
          </button>
        </div>
        
        <div className="popup-body">
          {announcements.map((announcement) => (
            <AnnouncmentModule
              key={announcement.id}
              title={announcement.title}
              link={announcement.link || '#'}
              author={announcement.author}
              date={announcement.date}
              description={announcement.message}
              images={announcement.images || []}
            />
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: clamp(1rem, 3vw, 2rem);
          overflow-y: auto;
          cursor: pointer;
          margin: 0;
          box-sizing: border-box;
        }

        .popup-content {
          background: #11121F;
          border: 2px solid #3DDC84;
          border-radius: clamp(16px, 2vw, 24px);
          width: 100%;
          max-width: 1717px;
          max-height: 900px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(61, 220, 132, 0.4);
          position: relative;
          cursor: default;
          margin: auto;
          z-index: 99999;
        }

        .popup-header {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          padding: clamp(1.5rem, 3vw, 2rem);
          padding-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .close-button {
          background: #A8E6CF;
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          z-index: 10;
        }

        .close-button:hover {
          background: #000000;
        }

        .close-button:active {
          transform: scale(0.95);
        }

        .close-icon-x {
          font-size: 28px;
          color: #FFFFFF;
          font-weight: 600;
          line-height: 1;
          transition: all 0.3s ease;
        }

        .close-button:hover .close-icon-x {
          color: #3DDC84;
          text-shadow: 0 0 10px rgba(61, 220, 132, 0.8), 0 0 20px rgba(61, 220, 132, 0.6), 0 0 30px rgba(61, 220, 132, 0.4);
        }

        .popup-body {
          padding: clamp(1.5rem, 3vw, 2rem);
          padding-top: clamp(0.5rem, 1.5vw, 1rem);
          overflow-y: auto;
          flex: 1;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        .popup-body::-webkit-scrollbar {
          width: 8px;
        }

        .popup-body::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.05);
          border-radius: 4px;
        }

        .popup-body::-webkit-scrollbar-thumb {
          background: rgba(61, 220, 132, 0.3);
          border-radius: 4px;
        }

        .popup-body::-webkit-scrollbar-thumb:hover {
          background: rgba(61, 220, 132, 0.5);
        }
      `}</style>
    </motion.div>
  );

  // Render to document body using portal
  return createPortal(popupContent, document.body);
}

export default AnnouncmentPopUp