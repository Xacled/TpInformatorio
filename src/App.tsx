import { useState } from "react";
import Header from "../src/components/Header/Header";
import "./App.css";
import {  QuickPicks, RecommendedAlbums, SimilarArtists } from "./components/Componentes";
import ContentLeft from "./components/SideBar";
import PlaylistForm from "./components/form";
// import { ListenAgain } from "./components/ListenAgain";
import AudioPlayer from "./components/PlaybackBar";
import { ListenAgain } from "./components/ListenAgain";

interface Playlist {
  title: string;
  description: string;
  imageUrl: string;
}

function App() {
  const [showPlaylistForm, setShowPlaylistForm] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState<Playlist>({ title: '', description: '', imageUrl: '' });
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  // Mostrar el formulario
  const handleNewPlaylistClick = () => {
    setShowPlaylistForm(true);
  };

  // Manejar cambios en el formulario
  const handleFormChange = (field: keyof Playlist, value: string) => {
    setNewPlaylist((prev) => ({ ...prev, [field]: value }));
  };

  // Agregar nueva playlist
  const handleAddPlaylist = () => {
    if (newPlaylist.title && newPlaylist.description) {
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylist({ title: '', description: '', imageUrl: '' }); // Resetear formulario
      setShowPlaylistForm(false);
    } else {
      alert("Please fill in both the title and description.");
    }
  };

  // Cancelar el formulario
  const handleCancel = () => {
    setShowPlaylistForm(false);
    setNewPlaylist({ title: '', description: '', imageUrl: '' }); // Resetear formulario
  };

  return (
    <div className="app">
      <Header />
      <ContentLeft onNewPlaylistClick={handleNewPlaylistClick} playlists={playlists} />

      <main className="main-content">
        {showPlaylistForm ? (
          <PlaylistForm 
            newPlaylist={newPlaylist}
            onFormChange={handleFormChange}
            onAddPlaylist={handleAddPlaylist}
            onCancel={handleCancel}
          />
        ) : (
          <>
            <ListenAgain />
            <SimilarArtists />
            <QuickPicks />
            <RecommendedAlbums />
          </>
        )}
      </main>
      
    </div>
  );
}

export default App;
