import "./Components.css";

export default function ContentLeft({ onNewPlaylistClick, playlists }:any) {
  return (
    <div className="container-left">
      <div className="menu-item active" onClick={() => window.location.href = '/'}>
        <i className="icon">I</i>
        <span>Home</span>
      </div>
      <div className="menu-item">
        <i className="icon">I</i>
        <span>Home</span>
      </div>
      <hr className="divider" />
      <div className="playlist-section">
        <button className="new-playlist-btn" onClick={onNewPlaylistClick}>
          + New playlist
        </button>
        <div className="playlist-list">
          {playlists.map((playlist:any , index:any) => (
            <div key={index} className="playlist-item">
              <img
                src={playlist.imageUrl}
                alt={playlist.title}
                className="playlist-image"
              />
              <div className="playlist-info">
                <p>{playlist.title}</p>
                <span>{playlist.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
