import './Components.css';
import { recommendedAlbums } from '../data/musicData';
import AlbumCard from './AlbumCard';

function RecommendedAlbums() {
  return (
    <section className="recommended-albums">
      <h2>Recommended Albums</h2>
      <div className="album-list">
        {recommendedAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedAlbums;
