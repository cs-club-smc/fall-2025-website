import { SiLinktree } from 'react-icons/si';

/**
 * JoinNowButton Component
 * Linktree button that links to the CS Club Linktree
 * Glassmorphism design to match site aesthetic
 */
function JoinNowButton() {
  const LINKTREE_URL = "https://linktr.ee/csclub.smc";

  return (
    <a
      href={LINKTREE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="join-now-button group"
      aria-label="Visit CS Club Linktree"
    >
      {/* Linktree Icon */}
      <SiLinktree className="linktree-icon" />

      {/* Button Text */}
      <span className="button-text">Join Now</span>

      <style jsx>{`
        .join-now-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          /* Glassmorphism */
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);

          /* Subtle border */
          border: 1px solid rgba(255, 255, 255, 0.15);

          /* Rounded pill shape */
          border-radius: 50px;

          /* Layout */
          padding: 12px 24px;

          /* Remove link styling */
          text-decoration: none;

          /* Transition */
          transition: all 0.3s ease;

          /* Cursor */
          cursor: pointer;
        }

        .join-now-button:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(102, 196, 138, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 196, 138, 0.15);
        }

        .join-now-button:active {
          transform: translateY(0);
        }

        .linktree-icon {
          width: 22px;
          height: 22px;
          color: #F1F5F9;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }

        .join-now-button:hover .linktree-icon {
          color: #66C48A;
        }

        .button-text {
          font-family: 'Russo One', sans-serif;
          font-size: 18px;
          color: #F1F5F9;
          font-weight: 400;
          line-height: 1;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .join-now-button:hover .button-text {
          color: #66C48A;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .join-now-button {
            padding: 10px 20px;
            gap: 8px;
          }

          .button-text {
            font-size: 16px;
          }

          .linktree-icon {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 768px) {
          .join-now-button {
            padding: 8px 16px;
            gap: 6px;
          }

          .button-text {
            font-size: 14px;
          }

          .linktree-icon {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </a>
  );
}

export default JoinNowButton;
