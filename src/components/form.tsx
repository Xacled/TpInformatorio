import { useEffect, useState } from "react";
import "./Components.css";

export default function PlaylistForm({
  newPlaylist,
  onFormChange,
  onAddPlaylist,
}) {
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    const { title, description, imageUrl } = newPlaylist;
    setIsFormComplete(title && description && imageUrl);
  }, [newPlaylist]);

  return (
    <div className="playlist-form">
      <form className="addform">
        <h2>Creá tu playlist</h2>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            placeholder="Título"
            value={newPlaylist.title}
            onChange={(e) => onFormChange("title", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            placeholder="Descripción"
            value={newPlaylist.description}
            onChange={(e) => onFormChange("description", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            placeholder="Image URL"
            value={newPlaylist.imageUrl}
            onChange={(e) => onFormChange("imageUrl", e.target.value)}
          />
        </div>
        <div >
          <button
            type="button"
            className="submit-btn"
            onClick={onAddPlaylist}
            disabled={!isFormComplete}
          >
            Agregar Playlist
          </button>
        </div>
      </form>

      {/* Vista previa en tiempo real */}
      <div className="playlist-preview">
         {newPlaylist.imageUrl && (
          <img
            src={newPlaylist.imageUrl}
            alt="Preview"
            className="playlist-image-preview"
          />
        )}
        <h2>{newPlaylist.title || "Título de la playlist"}</h2>
        <span>{newPlaylist.description || "Descripción de la playlist"}</span>
      </div>
    </div>
  );
}
