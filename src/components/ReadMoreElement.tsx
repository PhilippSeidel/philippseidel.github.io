import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReadMoreElement.css';


interface ReadMoreElementProps {
  children: React.ReactNode;
  previewHeight?: number; // in pixels
}

const ReadMoreElement: React.FC<ReadMoreElementProps> = ({ children, previewHeight = 200 }) => {
  const [expanded, setExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const isOverflowing = contentRef.current.scrollHeight > previewHeight;
      setNeedsTruncation(isOverflowing);
    }
  }, [children, previewHeight]);

  return (
    <div className="mb-3">
      <div
        ref={contentRef}
        style={{
          maxHeight: expanded ? 'none' : `${previewHeight}px`,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {children}
      </div>

      {needsTruncation && (
        <button
          className="btn btn-sm btn-primary mt-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreElement;
