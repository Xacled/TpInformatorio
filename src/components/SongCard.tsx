import './Components.css';
import Profile from './Profile';

function SongCard({ song }: any) {
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
