import SongCard from './SongCard';
import './Components.css';
import { quickPickSongs } from '../data/musicData';
import Profile from './Profile';

function QuickPicks() {
  return (
    <section className="quick-picks">
      <Profile text="Anka" text2='Quick Picks' />

      <div className="song-list">
        {quickPickSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}

export default QuickPicks;


