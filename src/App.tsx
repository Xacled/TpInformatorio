import Header from "./components/Header";
import QuickPicks from "./components/QuickPicks";
import RecommendedAlbums from "./components/RecommendedAlbums";
import SimilarArtists from "./components/SimilarArtists";
import PlaybackBar from "./components/PlaybackBar";
import "./App.css";
import ListenAgain from "./components/ListenAgain";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ListenAgain />
        <QuickPicks />
        <RecommendedAlbums />
        <SimilarArtists />
      </main>
      <PlaybackBar />
    </div>
  );
}

export default App;
