import { similarArtists } from '../data/musicData';
import ArtistCard from './ArtistCard';
import './Components.css';
import Profile from './Profile';

function SimilarArtists() {
  return (
    <section className="similar-artists">
      <Profile text="Similar to" text2='Artist' />

      <div className="artist-list">
        {similarArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}

export default SimilarArtists;
