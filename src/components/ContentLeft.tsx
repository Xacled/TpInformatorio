import './Components.css';

export default function ContentLeft() {
  return (
    <div className="container-left">
          <div className="menu-item active">
            <i className="icon">I</i>
            <span>Home</span>
          </div>
          <div className="menu-item">
            <i className="icon">I</i>
            <span>Home</span>
          </div>
          <div className="menu-item">
            <i className="icon">I</i>
            <span>Home</span>
          </div>
          <hr className="divider" />
          <div className="playlist-section">
            <button className="new-playlist-btn">+ New playlist</button>
            <div className="playlist-list">
              <div className="playlist-item">
                <p>Your Likes</p>
                <span>Autoplaylist</span>
              </div>
              <div className="playlist-item">
                <p>Your Likes</p>
                <span>Autoplaylist</span>
              </div>
            </div>
          </div>
      </div>
  )
}