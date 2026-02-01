import NavCta from "../components/NavCta";
import dglogo from "../assets/dglogoblue.svg"
import NavbarBtns from "../components/NavbarBtns";
export default function NavbarSec(){
    return(
        <div className="navbar-box" id="navbar">
            <img src={dglogo} alt="Dhanush Gopi Logo" className="navbar-logo" />
            <NavbarBtns/>
            <NavCta/>
        </div>
    )
}