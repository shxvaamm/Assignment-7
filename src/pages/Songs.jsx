import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs(props) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  let songs = props.songs;
  let list = [];

  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    let titleMatch = song.title.toLowerCase().includes(search.toLowerCase());
    let artistMatch = song.artist.toLowerCase().includes(search.toLowerCase());
    if (titleMatch || artistMatch) {
      list.push(song);
    }
  }

  if (genre !== "All") {
    let filtered = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].genre === genre) {
        filtered.push(list[i]);
      }
    }
    list = filtered;
  }

  return (
    <div className="page">
      <h2>All Songs</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search songs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>All</option>
          <option>Romantic</option>
          <option>Motivational</option>
          <option>Sufi</option>
          <option>Punjabi</option>
        </select>
      </div>
      <div className="list">
        {list.map((song) => (
          <SongCard key={song.id} song={song} onTogglePlaylist={props.onTogglePlaylist} />
        ))}
      </div>
      {list.length === 0 && <p>No songs found.</p>}
    </div>
  );
}

export default Songs;
