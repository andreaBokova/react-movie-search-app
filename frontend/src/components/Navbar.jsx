import "../css/Navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">MovieSearch</Link>
        </div>
        <div className="navbar-links">
            <Link to="/favorites">Favorites</Link>
            <Link to="/">Home</Link>
        </div>
    </nav>
}

export default Navbar