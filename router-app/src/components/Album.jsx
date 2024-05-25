import React, { useState } from 'react';
import Photo from './Photo';

function Album({ album }) {
  const [photos, setPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState(false);

  const loadPhotos = () => {
    if (!showPhotos) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
        .then(response => response.json())
        .then(data => setPhotos(data));
    }
    setShowPhotos(!showPhotos);
  };

  return (
    <div className="album">
      <p><strong>{album.title}</strong></p>
      <button onClick={loadPhotos}>{showPhotos ? 'Hide Photos' : 'Show Photos'}</button>
      {showPhotos && (
        <div className="photos">
          {photos.map(photo => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Album;
