import { useEffect, useState } from "react";
import "./Components.css";

interface Playlist {
  title: string;
  description: string;
  imageUrl: string;
}

interface PlaylistFormProps {
  newPlaylist: Playlist;
  onFormChange: (field: keyof Playlist, value: string) => void;
  onAddPlaylist: () => void;
  onCancel: () => void;
}

export default function PlaylistForm({
  newPlaylist,
  onFormChange,
  onAddPlaylist,
  onCancel, // Nueva prop para manejar el botón de cancelar
}: PlaylistFormProps) {
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    // Comprobar si todos los campos están completos
    const { title, description, imageUrl } = newPlaylist;
    setIsFormComplete(!!title && !!description && !!imageUrl);
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
        <div className="form-buttons" >
          <button
            type="button"
            className="submit-btn"
            onClick={onAddPlaylist}
            disabled={!isFormComplete}
            style={{ opacity: isFormComplete ? 1 : 0.5 }}
          >
            Agregar Playlist
          </button>
          {/* Botón de cancelar */}
          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
            style={{backgroundColor:'white',color:'black'}}
          >
            Cancelar
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
