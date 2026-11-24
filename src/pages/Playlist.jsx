function formatDuration(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  if (secs < 10) {
    secs = "0" + secs;
  }
  return mins + ":" + secs;
}

function Playlist(props) {
  let songs = props.songs;
  let list = [];

  for (let i = 0; i < songs.length; i++) {
    if (songs[i].isInPlaylist) {
      list.push(songs[i]);
    }
  }

  let totalSeconds = 0;
  for (let i = 0; i < list.length; i++) {
    totalSeconds = totalSeconds + list[i].duration;
  }

  if (list.length === 0) {
    return (
      <div className="page">
        <h2>My Playlist</h2>
        <p>Your playlist is empty</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>My Playlist</h2>
      <p>Total Duration: {formatDuration(totalSeconds)}</p>
      <div className="list">
        {list.map((song) => (
          <div key={song.id} className="card">
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
            <p>Genre: {song.genre}</p>
            <p>Duration: {formatDuration(song.duration)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
