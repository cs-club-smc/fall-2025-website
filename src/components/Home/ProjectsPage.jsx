

import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// single white SVG data URI used as a blank image placeholder
const whiteImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="%23ffffff"/></svg>';

function ProjectsPage() {
  const containerRef = useRef(null);

  // use the same white placeholder for all gallery items (10 placeholders -> 5 stacked columns)
  const images = new Array(10).fill(whiteImage);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        el.scrollBy({ left: -el.clientWidth * 0.8, behavior: "smooth" });
      }
    };

    // allow arrow keys when gallery is focused
    el.addEventListener("keydown", onKey);

    return () => el.removeEventListener("keydown", onKey);
  }, []);

  const scroll = (direction = "right") => {
    const el = containerRef.current;
    if (!el) return;
    const distance = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: direction === "right" ? distance : -distance, behavior: "smooth" });
    // focus to capture keyboard events
    el.focus();
  };

  return (
    <>
      <Link to="/" className="side-back" aria-label="Back to home">
          <svg className="arrow" viewBox="0 0 24 48" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <polyline points="16 6 6 24 16 42" fill="none" stroke="white" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      <section className="gallery-wrapper">

        <div className="controls">
          <button aria-label="Scroll left" className="control-btn" onClick={() => scroll("left")}>{'‹'}</button>
          <button aria-label="Scroll right" className="control-btn" onClick={() => scroll("right")}>{'›'}</button>
        </div>

    
        

        {/* Single horizontally-scrollable container with columns; each column has two stacked images */}
        <div
          className="gallery"
          ref={containerRef}
          tabIndex={0}
          aria-label="Projects image gallery (horizontally scrollable)"
        >
          {(() => {
            const pairs = [];
            for (let i = 0; i < images.length; i += 2) pairs.push(images.slice(i, i + 2));
            return pairs.map((pair, idx) => (
              <figure className="item column" key={idx}>
                <div className="stack">
                  <img className="top" src={pair[0]} alt={`Project ${idx + 1} top`} loading="lazy" />
                  <img className="bottom" src={pair[1]} alt={`Project ${idx + 1} bottom`} loading="lazy" />
                </div>
              </figure>
            ));
          })()}
        </div>
      </section>

      <style jsx>{`
        .gallery-wrapper {
          position: relative;
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }


        .controls {
          position: absolute;
          right: 24px;
          top: 24px;
          display: flex;
          gap: 8px;
        }

        .control-btn {
          background: rgba(255,255,255,0.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.08);
          height: 40px;
          width: 40px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 20px;
        }

        .gallery {
          display: flex;
          gap: 12px; /* horizontal gap matches vertical stack gap */
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 12px 8px;
          outline: none;
        }


        .item {
          min-width: 400px; /* slightly reduced so five columns are reasonable */
          flex: 0 0 auto;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.05));
          border-radius: 12px;
          overflow: hidden;
          scroll-snap-align: center;
          box-shadow: 0 6px 18px rgba(2,6,23,0.6);
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
        }

        .stack { display:flex; flex-direction:column; gap:12px; width:100%; }

        
        .side-back {
          position: absolute;
          left: 175px;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 200px;
          background: linear-gradient(180deg,#47d189,#4ad6a4);
          border-radius: 20px;
          box-shadow: 0 6px 10px rgba(2,6,23,0.5);
          text-decoration: none;
          color: white;
          font-weight: 600;
          border: 2px solid transparent; 
          transition: background .18s ease, border-color .18s ease, box-shadow .18s ease, transform .12s ease;
          overflow: visible;
        }

        .side-back .arrow{
          width: 34px;
          height: 84px;
          display:block;
          transform: translateX(-4px);
        }

        
        .side-back:hover,
        .side-back:focus {
          background: #050505; /* black interior */
          border-color: #47d189; /* bright green outline */
          box-shadow: 0 6px 18px rgba(2,6,23,0.7), 0 0 0 3px rgba(71,209,137,0.06) inset;
          transform: translateY(-50%) scale(1.01);
        }

        .side-back .arrow polyline {
          transition: stroke .16s ease, stroke-width .16s ease, transform .18s ease;
        }

        .side-back:hover .arrow polyline,
        .side-back:focus .arrow polyline{
          stroke: #47d189; /* green arrow */
          stroke-width: 5.2;
          transform: translateX(-2px);
        }


        .item img {
          display: block;
          width: 100%;
          height: 350px; /* unified height for both top & bottom */
          object-fit: cover;
          background: #e6e6e6;
          border-radius: 6px;
        }


        
      `}</style>
    </>
  );
}

export default ProjectsPage