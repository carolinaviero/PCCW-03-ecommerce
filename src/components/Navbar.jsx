const Navbar = ({ total }) => {
    return (
        <div className="navbar">
            <h3 className="navbarTitle">Home</h3>
            <h3 className="navbarTitle">Favorites</h3>
            <h3 className="navbarTitle">Cart: ${total.toFixed(2)}</h3>
        </div>
    )
}

export default Navbar;