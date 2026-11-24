import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";
import songsData from "./data/songs";

function App() {
  const [songs, setSongs] = useState(songsData);

  function togglePlaylist(id) {
    let updated = [];
    for (let i = 0; i < songs.length; i++) {
      if (songs[i].id === id) {
        let song = { ...songs[i], isInPlaylist: !songs[i].isInPlaylist };
        updated.push(song);
      } else {
        updated.push(songs[i]);
      }
    }
    setSongs(updated);
  }

  let playlistCount = 0;
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].isInPlaylist) {
      playlistCount = playlistCount + 1;
    }
  }

  return (
    <BrowserRouter>
      <Navbar playlistCount={playlistCount} />
      <Routes>
        <Route path="/" element={<Home songs={songs} />} />
        <Route path="/songs" element={<Songs songs={songs} onTogglePlaylist={togglePlaylist} />} />
        <Route path="/songs/:id" element={<SongDetails songs={songs} onTogglePlaylist={togglePlaylist} />} />
        <Route path="/playlist" element={<Playlist songs={songs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
