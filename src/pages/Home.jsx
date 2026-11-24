function Home(props) {
  let songs = props.songs;
  let total = songs.length;
  let inPlaylist = 0;
  let trending = 0;

  for (let i = 0; i < songs.length; i++) {
    if (songs[i].isInPlaylist) {
      inPlaylist = inPlaylist + 1;
    }
    if (songs[i].streams >= 1000000) {
      trending = trending + 1;
    }
  }

  return (
    <div className="page">
      <h2>Music App</h2>
      <p>Total Songs: {total}</p>
      <p>Songs in Playlist: {inPlaylist}</p>
      <p>Trending Songs: {trending}</p>
    </div>
  );
}

export default Home;
