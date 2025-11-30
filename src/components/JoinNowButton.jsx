import discordIcon from '../assets/icons/discord-white-icon.png';

/**
 * JoinNowButton Component
 * Discord button that links to the CS Club Discord server
 * Based on Figma design specifications
 */
function JoinNowButton() {
  const DISCORD_INVITE_URL = "https://discord.gg/vWVBwsAqfJ";

  return (
    <a
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="join-now-button group"
      aria-label="Join CS Club Discord Server"
    >
      {/* Discord Icon */}
      <img
        src={discordIcon}
        alt="Discord"
        className="discord-icon"
      />

      {/* Button Text */}
      <span className="button-text">Join Now</span>

      <style jsx>{`
        .join-now-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          /* Exact dimensions from Figma */
          width: var(--join-btn-width);
          height: var(--join-btn-height);

          /* Discord brand blue */
          background-color: var(--color-discord-blue);

          /* Rounded pill shape */
          border-radius: var(--join-btn-radius);

          /* Border */
          border: 1px solid var(--color-black);

          /* Layout */
          padding: 0 24px;

          /* Remove link styling */
          text-decoration: none;

          /* Transition */
          transition: var(--transition-base);

          /* Cursor */
          cursor: pointer;
        }

        .join-now-button:hover {
          background-color: #4752c4;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(88, 101, 242, 0.3);
        }

        .join-now-button:active {
          transform: translateY(0);
        }

        .discord-icon {
          width: var(--join-btn-icon-size);
          height: auto;
          flex-shrink: 0;
        }

        .button-text {
          font-family: var(--font-heading);
          font-size: var(--text-button);
          color: var(--color-white);
          font-weight: var(--weight-regular);
          line-height: 1;
          white-space: nowrap;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .join-now-button {
            width: 220px;
            height: 60px;
            padding: 0 20px;
          }

          .button-text {
            font-size: 24px;
          }

          .discord-icon {
            width: 40px;
          }
        }

        @media (max-width: 768px) {
          .join-now-button {
            width: 180px;
            height: 50px;
            padding: 0 16px;
            gap: 8px;
          }

          .button-text {
            font-size: 20px;
          }

          .discord-icon {
            width: 32px;
          }
        }
      `}</style>
    </a>
  );
}

export default JoinNowButton;
