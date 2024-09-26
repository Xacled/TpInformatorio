import {  quickPickSongs, recommendedAlbums, similarArtists } from '../data/musicData';
import './Components.css';
import Profile from './Header/Profile';




//Componente de los artistcas
export function ArtistCard({ artist }: any) {
  return (
    <div className="artist-card">
      <img src={artist.picture} alt={artist.name} className="artist-picture" />
      <h3>{artist.name}</h3>
      <span>200M subscribers</span>
    </div>
  );
}


//Componentes para los Almbunes
export function AlbumCard({ album }: any) {
  return (
    <div className="album-card">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <div className="album-info">
        <h3>{album.title}</h3>
        <p>{album.artist}</p>
      </div>
    </div>
  );
}


//Componente para quickpicks
export function QuickPicks() {
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


//Componente para albums recomendados
export function RecommendedAlbums() {
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

//Componente para artistas similares
export function SimilarArtists() {
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


//Componentes para las tarjetas de canciones
export function SongCard({ song }: any) {
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




