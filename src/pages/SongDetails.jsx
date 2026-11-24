import { useParams, Link } from "react-router";

function formatDuration(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  if (secs < 10) {
    secs = "0" + secs;
  }
  return mins + ":" + secs;
}

function SongDetails(props) {
  const { id } = useParams();

  let song = null;
  for (let i = 0; i < props.songs.length; i++) {
    if (props.songs[i].id === parseInt(id)) {
      song = props.songs[i];
    }
  }

  if (song === null) {
    return (
      <div className="page">
        <p>Song not found.</p>
        <Link to="/songs">Back</Link>
      </div>
    );
  }

  let isTrending = song.streams >= 1000000;
  let buttonText = "Add to Playlist";
  if (song.isInPlaylist) {
    buttonText = "Remove from Playlist";
  }

  return (
    <div className="page">
      <Link to="/songs">← Back</Link>
      <h2>{song.title}</h2>
      {isTrending && <span className="badge">Trending 🔥</span>}
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
      <p>Genre: {song.genre}</p>
      <p>Year: {song.year}</p>
      <p>Duration: {formatDuration(song.duration)}</p>
      <p>Streams: {song.streams}</p>
      <button onClick={() => props.onTogglePlaylist(song.id)}>
        {buttonText}
      </button>
    </div>
  );
}

export default SongDetails;
