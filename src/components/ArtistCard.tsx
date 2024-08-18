import './Components.css';

function ArtistCard({ artist }) {
  return (
    <div className="artist-card">
      <img src={artist.picture} alt={artist.name} className="artist-picture" />
      <h3>{artist.name}</h3>
    </div>
  );
}

export default ArtistCard;
