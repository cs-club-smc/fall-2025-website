import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

// Import images
import clubawareness1 from '../assets/Gallery/clubawareness1.jpg';
import clubawareness2 from '../assets/Gallery/clubawareness2.jpg';
import clubawareness3 from '../assets/Gallery/clubawareness3.jpg';
import clubrow1 from '../assets/Gallery/clubrow1.png';
import clubrow2 from '../assets/Gallery/clubrow2.jpg';
import googletour from '../assets/Gallery/googletour.jpg';
import meetingpic1 from '../assets/Gallery/meetingpic1.jpg';
import meetingpic2 from '../assets/Gallery/meetingpic2.jpg';

// Photo categories with dimensions
const categories = [
  {
    name: "Club Awareness",
    photos: [
      { src: clubawareness1, width: 4030, height: 3015 },
      { src: clubawareness2, width: 1169, height: 1394 },
      { src: clubawareness3, width: 4032, height: 3024 },
    ]
  },
  {
    name: "Club Row",
    photos: [
      { src: clubrow1, width: 1170, height: 2532 },
      { src: clubrow2, width: 3024, height: 4032 },
    ]
  },
  {
    name: "Google Tour",
    photos: [
      { src: googletour, width: 5712, height: 3213 },
    ]
  },
  {
    name: "Meetings",
    photos: [
      { src: meetingpic1, width: 1170, height: 1856 },
      { src: meetingpic2, width: 3021, height: 3165 },
    ]
  }
];

const ease = [0.25, 0.46, 0.45, 0.94];

// Generate consistent rotation for each photo based on index
const getRotation = (index) => {
  const rotations = [-3, 2, -2, 3, -1, 1, -2.5, 2.5];
  return rotations[index % rotations.length];
};

// Staggered container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Individual photo variants
const photoVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
      ease,
    },
  },
};

function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  return (
    <div className="photo-gallery">
      {/* Tab buttons */}
      <LayoutGroup>
        <div className="gallery-tabs">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`gallery-tab ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            >
              {i === activeIndex && (
                <motion.div
                  className="tab-indicator"
                  layoutId="activeTab"
                  transition={{ duration: 0.3, ease }}
                />
              )}
              <span className="tab-label">{cat.name}</span>
            </button>
          ))}
        </div>
      </LayoutGroup>

      {/* Photo stage */}
      <div className="photo-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={`photo-grid photos-${activeCategory.photos.length}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeCategory.photos.map((photo, index) => (
              <motion.div
                key={`${activeCategory.name}-${index}`}
                className="polaroid"
                style={{ '--rotation': `${getRotation(activeIndex * 10 + index)}deg` }}
                variants={photoVariants}
              >
                <img
                  src={photo.src}
                  alt={`${activeCategory.name} photo ${index + 1}`}
                  style={{
                    aspectRatio: `${photo.width} / ${photo.height}`,
                  }}
                />
                <div className="polaroid-bottom" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .photo-gallery {
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 2.5vw, 32px);
          width: 100%;
        }

        .gallery-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gallery-tab {
          position: relative;
          font-family: 'Roboto Mono', ui-monospace, monospace;
          font-size: clamp(11px, 1vw, 14px);
          color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 8px 16px;
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .gallery-tab:hover {
          color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.08);
        }

        .gallery-tab.active {
          color: #fff;
          background: rgba(15, 181, 136, 0.2);
          border-color: rgba(15, 181, 136, 0.5);
        }

        .tab-indicator {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(15, 181, 136, 0.2);
          border: 1px solid rgba(15, 181, 136, 0.5);
          z-index: -1;
        }

        .tab-label {
          position: relative;
          z-index: 1;
        }

        .photo-stage {
          min-height: 300px;
        }

        .photo-grid {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: flex-start;
        }

        /* 1 photo = centered, max width */
        .photo-grid.photos-1 .polaroid {
          max-width: 100%;
        }

        /* 2 photos = side by side, each takes half */
        .photo-grid.photos-2 .polaroid {
          flex: 1 1 0;
          max-width: 50%;
        }

        /* 3 photos = row of 3, each takes a third */
        .photo-grid.photos-3 .polaroid {
          flex: 1 1 0;
          max-width: 33.333%;
        }

        .polaroid {
          background: #fff;
          padding: 8px 8px 30px 8px;
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.3),
            0 10px 20px rgba(0, 0, 0, 0.2);
          transform: rotate(var(--rotation, 0deg));
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .polaroid:hover {
          transform: rotate(0deg) translateY(-8px) scale(1.02);
          box-shadow:
            0 8px 16px rgba(0, 0, 0, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.25);
          z-index: 10;
        }

        .polaroid img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .polaroid-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: #fff;
        }

        /* Mobile: stack photos vertically */
        @media (max-width: 640px) {
          .photo-grid {
            flex-direction: column;
            align-items: center;
          }

          .photo-grid.photos-2 .polaroid,
          .photo-grid.photos-3 .polaroid {
            max-width: 100%;
            flex: none;
            width: 100%;
          }

          .gallery-tabs {
            gap: 6px;
          }

          .gallery-tab {
            padding: 6px 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export default PhotoGallery;
