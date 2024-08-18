import SongCard from './SongCard';
import './Components.css';
import { quickPickSongs } from '../data/musicData';

function QuickPicks() {
  return (
    <section className="quick-picks">
      <h2>Quick Picks</h2>
      <div className="song-list">
        {quickPickSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}

export default QuickPicks;
