import React from 'react';

function Photo({ photo }) {
  return (
    <div className="photo">
      <p><strong>{photo.title}</strong></p>
      <img src={photo.thumbnailUrl} alt={photo.title} />
    </div>
  );
}

export default Photo;
