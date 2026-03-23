import arrow1 from '../assets/icons/arrow-down-1.svg';
import arrow2 from '../assets/icons/arrow-down-2.svg';

/**
 * DownArrow Component
 * Dual-layer down arrow that scrolls to next section when clicked
 * Based on Figma design specifications
 *
 * @param {string} targetId - ID of the element to scroll to (optional)
 */
function DownArrow({ targetId }) {
  const handleClick = () => {
    if (targetId) {
      // Just scroll down by viewport height minus navbar
      const viewportHeight = window.innerHeight;
      const navbarHeight = 120;

      window.scrollBy({
        top: viewportHeight - navbarHeight,
        behavior: 'smooth'
      });
    } else {
      // Scroll down by one viewport height if no target specified
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="down-arrow-container"
      aria-label={targetId ? `Scroll to ${targetId}` : "Scroll down"}
    >
      {/* Layer 2 (Background arrow) */}
      <img
        src={arrow2}
        alt=""
        className="arrow-layer arrow-layer-2"
        aria-hidden="true"
      />

      {/* Layer 1 (Foreground arrow) */}
      <img
        src={arrow1}
        alt=""
        className="arrow-layer arrow-layer-1"
        aria-hidden="true"
      />

      <style jsx>{`
        .down-arrow-container {
          position: relative;
          width: var(--arrow-width);
          height: var(--arrow-height);

          /* Remove button styling */
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;

          /* Center arrows within button */
          display: flex;
          align-items: center;
          justify-content: center;

          /* Animation */
          animation: bounce 2s infinite;
          transition: var(--transition-base);
        }

        .down-arrow-container:hover {
          transform: translateY(4px);
          opacity: 0.8;
        }

        .down-arrow-container:active {
          transform: translateY(6px);
        }

        .arrow-layer {
          position: absolute;
          pointer-events: none;
        }

        /* Arrow Layer 2 (Background) */
        .arrow-layer-2 {
          width: clamp(60px, 5vw, 80px);
          height: clamp(18px, 1.5vw, 24px);
          top: clamp(5px, 0.5vw, 7px);
          left: 0;
        }

        /* Arrow Layer 1 (Foreground) */
        .arrow-layer-1 {
          width: clamp(45px, 3.8vw, 60px);
          height: clamp(13px, 1.1vw, 18px);
          top: 0;
          left: clamp(7px, 0.6vw, 10px);
        }

        /* Bounce animation */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .down-arrow-container {
            width: 60px;
            height: 18px;
          }
        }
      `}</style>
    </button>
  );
}

export default DownArrow;
