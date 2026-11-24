import { Link } from "react-router";

function formatDuration(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  if (secs < 10) {
    secs = "0" + secs;
  }
  return mins + ":" + secs;
}

function SongCard(props) {
  let song = props.song;
  let isTrending = song.streams >= 1000000;
  let buttonText = "Add to Playlist";
  if (song.isInPlaylist) {
    buttonText = "Remove from Playlist";
  }

  return (
    <div className="card">
      <Link to={"/songs/" + song.id}>
        <h3>{song.title}</h3>
      </Link>
      {isTrending && <span className="badge">Trending 🔥</span>}
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Duration: {formatDuration(song.duration)}</p>
      <button onClick={() => props.onTogglePlaylist(song.id)}>
        {buttonText}
      </button>
    </div>
  );
}

export default SongCard;
