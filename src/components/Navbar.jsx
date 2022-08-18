import { Link } from 'react-router-dom';

const Navbar = ({ total }) => {
    return (
            <div className="navbar">
                <Link to="/" className="navbarTitle">Home</Link>
                <Link to="/favorites" className="navbarTitle">Favorites</Link>
                <Link to="/cart" className="navbarTitle">Cart: ${total.toFixed(2)}</Link>
            </div>
    )
}

export default Navbar;