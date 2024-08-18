import { similarArtists } from '../data/musicData';
import ArtistCard from './ArtistCard';
import './Components.css';

function SimilarArtists() {
  return (
    <section className="similar-artists">
      <h2>Similar to [Artista]</h2>
      <div className="artist-list">
        {similarArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}

export default SimilarArtists;
