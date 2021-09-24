import { Link } from 'react-router-dom';

const NavBar = () => {
    return (  
        <nav className="navbar">
            <h1>PrepTogether</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/browse">Browse Recipes</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;