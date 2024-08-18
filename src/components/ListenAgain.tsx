import SongCard from "./SongCard";
import "./Components.css";
import { listenAgainSongs } from "../data/musicData";
import Profile from "./Profile";

function ListenAgain() {
  return (
    <section className="listen-again">
      
      <Profile text="Sufyan Ali" text2="Listen Again" />

      <div className="song-list">
        {listenAgainSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}

export default ListenAgain;
