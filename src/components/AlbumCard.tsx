import './Components.css';

function AlbumCard({ album }: any) {
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

export default AlbumCard;
