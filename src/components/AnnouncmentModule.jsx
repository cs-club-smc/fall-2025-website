import React from 'react'

const AnnouncmentModule = ({title, link, author, date, description, images}) => {
  return (
    <div className="announcement-module">
      <div className="module-header">
        <div className="title-container">
          <h3 className="module-title">
            {link && link !== '#' ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="title-link">
                {title}
              </a>
            ) : (
              <span className="title-module-text">{title}</span>
            )}
          </h3>
          <hr className="module-divider" />
        </div>
      </div>
      
      <div className="module-meta">
        <span className="meta-author">{author}</span>
        <span className="meta-separator">|</span>
        <span className="meta-date">{date}</span>
      </div>
      
      <p className="module-description">{description}</p>
      
      <div className="module-images">
        {Array.from({ length: 3 }).map((_, index) => {
          const imageUrl = images && images[index] ? images[index] : 'https://i.sstatic.net/mwFzF.png';
          return (
            <img 
              src={imageUrl} 
              key={index} 
              alt={images && images[index] ? `${title} - Image ${index + 1}` : 'Image placeholder'}
              className="module-image"
            />
          );
        })}
      </div>

      <style jsx>{`
        .announcement-module {
          background: transparent;
          border-radius: 0;
          padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0;
          border: none;
          width: 100%;
          box-sizing: border-box;
        }

        .module-header {
          margin-bottom: clamp(1rem, 2vw, 1.5rem);
          width: 100%;
          display:flex;

        }

        .title-container {
          display: inline-block;
          width: auto;
        }

        .module-title {
          font-family: 'Russo One', sans-serif;
          font-size: 64px;
          font-weight: 400;
          color: #F1F5F9;
          margin: 0;
          margin-bottom: clamp(0.5rem, 1vw, 0.75rem);
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-align: left;
          width: auto;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .title-module-text {
          text-decoration: none;
          display: block;
        }

        .title-link {
          color: #F1F5F9;
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
        }

        .title-link:hover {
          color: #3DDC84;
        }

        .module-divider {
          border: none;
          border-top: 1px solid #F1F5F9;
          margin: 0;
          width: 100%;
        }

        .module-meta {
          display: flex;
          align-items: center;
          gap: clamp(0.5rem, 1vw, 0.75rem);
          margin-bottom: clamp(1rem, 2vw, 1.5rem);
          font-family: 'Roboto Mono', monospace;
          font-size: 20px;
          color: rgba(241, 245, 249, 0.7);
        }

        .meta-author {
          font-weight: 500;
          color: rgba(241, 245, 249, 0.9);
        }

        .meta-separator {
          color: rgba(241, 245, 249, 0.4);
        }

        .meta-date {
          color: rgba(241, 245, 249, 0.6);
        }

        .module-description {
          font-family: 'Roboto Mono', monospace;
          font-size: 20px;
          font-weight: 300;
          line-height: 120%;
          color: rgba(241, 245, 249, 0.9);
          margin: 0 0 clamp(1rem, 2vw, 1.5rem) 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          text-align: left;
        }

        .module-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(0.25rem, 0.5vw, 0.5rem);
          margin-top: clamp(1rem, 2vw, 1.5rem);
          width: 100%;
        }

        .module-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: rgba(200, 200, 200, 0.3);
          border-radius: clamp(4px, 0.5vw, 8px);
          object-fit: cover;
          border: none;
          display: block;
        }

        .module-image:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  )
}

export default AnnouncmentModule