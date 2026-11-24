import { Link } from "react-router";

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/songs">Songs</Link>
      <Link to="/playlist">Playlist ({props.playlistCount})</Link>
    </nav>
  );
}

export default Navbar;
