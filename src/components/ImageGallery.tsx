import React from 'react';

interface ImageData {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageData[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {

  return (
    <div className="container mt-4">
      <div className="row row-cols-2 g-2">
        {images.map((image, idx) => (
          <div className="col text-center" key={idx}>
            <div
              className="d-flex justify-content-center align-items-center rounded shadow-sm"
              style={{
                height: "100%",
                width: "100%",
                overflow: 'hidden',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
