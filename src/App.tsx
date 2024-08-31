import { useState } from "react";
import Header from "../src/components/Header/Header";
import "./App.css";
import { ListenAgain, QuickPicks, RecommendedAlbums, SimilarArtists } from "./components/Componentes";
import PlaybackBar from "./components/PlaybackBar";
import ContentLeft from "./components/SideBar";
import PlaylistForm from "./components/form";

function App() {
  const [showPlaylistForm, setShowPlaylistForm] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({ title: '', description: '', imageUrl: '' });
  const [playlists, setPlaylists] = useState([]);

  const handleNewPlaylistClick = () => {
    setShowPlaylistForm(true);
  };

  const handleFormChange = (field, value) => {
    setNewPlaylist((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddPlaylist = () => {
    setPlaylists([...playlists, newPlaylist]);
    setShowPlaylistForm(false);
  };

  return (
    <div className="app">
      <Header  />
      <ContentLeft onNewPlaylistClick={handleNewPlaylistClick} playlists={playlists} />

      <main className="main-content">
        {showPlaylistForm ? (
          <PlaylistForm 
            newPlaylist={newPlaylist}
            onFormChange={handleFormChange}
            onAddPlaylist={handleAddPlaylist}
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
      <PlaybackBar />
    </div>
  );
}

export default App;
