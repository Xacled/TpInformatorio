import SongCard from './SongCard';
import './Components.css';
import { listenAgainSongs } from '../data/musicData';

function ListenAgain() {
  return (
    <section className="listen-again">
      <h2>Listen Again</h2>
      <div className="song-list">
        {listenAgainSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}

export default ListenAgain;
