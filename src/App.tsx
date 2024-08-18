import Header from "./components/Header";
import QuickPicks from "./components/QuickPicks";
import RecommendedAlbums from "./components/RecommendedAlbums";
import SimilarArtists from "./components/SimilarArtists";
import PlaybackBar from "./components/PlaybackBar";
import "./App.css";
import ListenAgain from "./components/ListenAgain";
import ContentLeft from "./components/ContentLeft";

function App() {
  return (
    <div className="app">
      <Header />
      <ContentLeft/>

      <main className="main-content">
        <ListenAgain />
        <SimilarArtists />
        <QuickPicks />
        <RecommendedAlbums />
      </main>
      <PlaybackBar />
    </div>
  );
}

export default App;
