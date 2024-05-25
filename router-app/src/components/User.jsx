import React, { useState } from 'react';
import Album from './Album';

function User({ user }) {
  const [albums, setAlbums] = useState([]);
  const [showAlbums, setShowAlbums] = useState(false);

  const loadAlbums = () => {
    if (!showAlbums) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
        .then(response => response.json())
        .then(data => setAlbums(data));
    }
    setShowAlbums(!showAlbums);
  };

  return (
    <div className="user">
      <p><strong>{user.name}</strong></p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={loadAlbums}>{showAlbums ? 'Hide Albums' : 'Show Albums'}</button>
      {showAlbums && (
        <div className="albums">
          {albums.map(album => (
            <Album key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default User;
