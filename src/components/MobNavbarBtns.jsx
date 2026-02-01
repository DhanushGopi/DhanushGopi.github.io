import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function MobNavbarBtns() {
    // 1. Get the current URL path (e.g., "/" or "/portfolio")
    const location = useLocation();
    const path = location.pathname;

    // 2. Helper to check if a link should be active
    // We check the path and the hash (#)
    const getActiveLine = (targetPath, hash) => {
        const isPathMatch = path === targetPath;
        const isHashMatch = location.hash === hash;
        
        // Return active class if path matches (and hash matches if provided)
        return (isPathMatch && (hash ? isHashMatch : true)) ? "navbarbtn-active" : "";
    };

    return (
        <div className="mobnavbar-btn-box">
            <HashLink 
                smooth to="/#herosec" 
                className={`mobnavbar-btn  ${getActiveLine("/", "#herosec")}`}
            >
                Home
            </HashLink>

            <HashLink 
                smooth to="/#clients" 
                className={`mobnavbar-btn  ${getActiveLine("/", "#clients")}`}
            >
                Services
            </HashLink>

            <HashLink 
                smooth to="/portfolio#myportfolio" 
                className={`mobnavbar-btn  ${getActiveLine("/portfolio", "#myportfolio")}`}
            >
                Portfolio
            </HashLink>

            <HashLink 
                smooth to="/#footer" 
                className={`mobnavbar-btn  ${getActiveLine("/", "#footer")}`}
            >
                Contact
            </HashLink>
        </div>
    );
}