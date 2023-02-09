import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import "./NavBar.css"
function NavBar(){
    return(
        <div className="navigationBar">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <Link to="/">
            Popularne knjige
        </Link>
        <Link to="/lista" >
            Lista želja
        </Link>
        <Link to="/kontakt" >
            Kontakt
        </Link>
    </div>
    )
}
export default NavBar;