// import { HashLink } from "react-router-hash-link";

// export default function NavbarBtns(){
    
    
//     return(
//         <div className="navbar-btn-box">
//             <HashLink smooth to="/#herosec" className="navbar-btn navbar-leftbtn navbarbtn-active">Home </HashLink>
//             <HashLink smooth to="/#clients" className="navbar-btn navbar-midbtn">Services </HashLink>
//             <HashLink smooth to="/portfolio#myportfolio" className="navbar-btn navbar-midtbtn">Portfolio </HashLink>
//             <HashLink smooth to="/#footer" className="navbar-btn navbar-rightbtn">Contact </HashLink>
//         </div>
//     )
// }

// import { useState } from "react";
// import { HashLink } from "react-router-hash-link";

// export default function NavbarBtns() {
//     // Initialize state with 'home' so it's active by default
//     const [activeNav, setActiveNav] = useState("home");

//     return (
//         <div className="navbar-btn-box">
//             <HashLink 
//                 smooth to="/#herosec" 
//                 onClick={() => setActiveNav("home")}
//                 className={`navbar-btn navbar-leftbtn ${activeNav === "home" ? "navbarbtn-active" : ""}`}
//             >
//                 Home
//             </HashLink>

//             <HashLink 
//                 smooth to="/#clients" 
//                 onClick={() => setActiveNav("services")}
//                 className={`navbar-btn navbar-midbtn ${activeNav === "services" ? "navbarbtn-active" : ""}`}
//             >
//                 Services
//             </HashLink>

//             <HashLink 
//                 smooth to="/portfolio#myportfolio" 
//                 onClick={() => setActiveNav("portfolio")}
//                 className={`navbar-btn navbar-midtbtn ${activeNav === "portfolio" ? "navbarbtn-active" : ""}`}
//             >
//                 Portfolio
//             </HashLink>

//             <HashLink 
//                 smooth to="/#footer" 
//                 onClick={() => setActiveNav("contact")}
//                 className={`navbar-btn navbar-rightbtn ${activeNav === "contact" ? "navbarbtn-active" : ""}`}
//             >
//                 Contact
//             </HashLink>
//         </div>
//     );
// }


import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function NavbarBtns() {
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
        <div className="navbar-btn-box">
            <HashLink 
                smooth to="/#herosec" 
                className={`navbar-btn navbar-leftbtn ${getActiveLine("/", "#herosec")}`}
            >
                Home
            </HashLink>

            <HashLink 
                smooth to="/#clients" 
                className={`navbar-btn navbar-midbtn ${getActiveLine("/", "#clients")}`}
            >
                Services
            </HashLink>

            <HashLink 
                smooth to="/portfolio#myportfolio" 
                className={`navbar-btn navbar-midtbtn ${getActiveLine("/portfolio", "#myportfolio")}`}
            >
                Portfolio
            </HashLink>

            <HashLink 
                smooth to="/#footer" 
                className={`navbar-btn navbar-rightbtn ${getActiveLine("/", "#footer")}`}
            >
                Contact
            </HashLink>
        </div>
    );
}