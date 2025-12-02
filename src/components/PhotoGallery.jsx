import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

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

// Generate consistent rotation for each photo based on index
const getRotation = (index) => {
  const rotations = [-3, 2, -2, 3, -1, 1, -2.5, 2.5];
  return rotations[index % rotations.length];
};

function PhotoGallery() {
  return (
    <div className="photo-gallery">
      {categories.map((category, catIndex) => (
        <div key={category.name} className="gallery-category">
          <h3 className="category-title">{category.name}</h3>
          <MasonryPhotoAlbum
            photos={category.photos}
            columns={(containerWidth) => {
              if (containerWidth < 400) return 1;
              if (containerWidth < 700) return 2;
              return 3;
            }}
            spacing={24}
            render={{
              image: (props, { photo, index }) => (
                <div
                  className="polaroid"
                  style={{ '--rotation': `${getRotation(catIndex * 10 + index)}deg` }}
                >
                  <img {...props} alt={`${category.name} photo ${index + 1}`} />
                  <div className="polaroid-bottom" />
                </div>
              ),
            }}
          />
        </div>
      ))}

      <style jsx>{`
        .photo-gallery {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5vw, 70px);
          width: 100%;
        }

        .gallery-category {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 2vw, 24px);
        }

        .category-title {
          font-family: 'Russo One', sans-serif;
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 400;
          color: #66C48A;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .polaroid {
          background: #fff;
          padding: 12px 12px 40px 12px;
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
        }

        .polaroid-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: #fff;
        }

        /* Override react-photo-album default styles */
        :global(.react-photo-album--masonry) {
          gap: 24px !important;
        }

        :global(.react-photo-album--column) {
          gap: 24px !important;
        }
      `}</style>
    </div>
  );
}

export default PhotoGallery;
