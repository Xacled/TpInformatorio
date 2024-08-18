import './Components.css';

function SongCard({ song }) {
  return (
    <div className="song-card">
      <img src={song.cover} alt={song.title} className="song-cover" />
      <div className="song-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}

export default SongCard;
