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

        /* Arrow Layer 2 (Background) - top: 999px in Figma */
        .arrow-layer-2 {
          width: 114px;
          height: 33px;
          top: 9px;
          left: 0;
        }

        /* Arrow Layer 1 (Foreground) - top: 990px in Figma */
        .arrow-layer-1 {
          width: 86.271px;
          height: 25.052px;
          top: 0;
          left: 14px;
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

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .down-arrow-container {
            width: 80px;
            height: 24px;
          }

          .arrow-layer-2 {
            width: 80px;
            height: 24px;
          }

          .arrow-layer-1 {
            width: 60px;
            height: 18px;
            left: 10px;
          }
        }
      `}</style>
    </button>
  );
}

export default DownArrow;
