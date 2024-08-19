import "./Components.css";
import { recommendedAlbums } from "../data/musicData";
import AlbumCard from "./AlbumCard";
import Profile from "./Profile";

function RecommendedAlbums() {
  return (
    <section className="recommended-albums">
      <Profile text="Sufyan Ali" text2="Recommended Album" />

      <div className="album-list">
        {recommendedAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}

export default RecommendedAlbums;
  