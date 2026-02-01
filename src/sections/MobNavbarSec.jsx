// 


import { useState } from "react"; // 1. Import useState
import NavCta from "../components/NavCta";
import dglogo from '../assets/dglogoblue.svg';
import menuopenicon from '../assets/open.svg';
import menucloseicon from '../assets/close.svg';
import MobNavbarBtns from "../components/MobNavbarBtns";

export default function MobNavbarSec() {
    // 2. Define the state (false means hidden by default)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mobnavbar-box" id="navbar">
            <div className="mobnavbar-top">
                <img src={dglogo} alt="Dhanush Gopi Logo" className="mobnavbar-logo" />
                
                {/* 3. Toggle logic for the icons */}
                {!isOpen ? (
                    <img 
                        src={menuopenicon} 
                        alt="Open Menu" 
                        className="mobnavbar-open" 
                        onClick={() => setIsOpen(true)} 
                    />
                ) : (
                    <img 
                        src={menucloseicon} 
                        alt="Close Menu" 
                        className="mobnavbar-close" 
                        onClick={() => setIsOpen(false)} 
                    />
                )}
            </div>

            {/* 4. Conditional rendering for the bottom section */}
            {isOpen && (
                <div className="mobnavbar-bottom">
                    <MobNavbarBtns />
                    <NavCta />
                </div>
            )}
        </div>
    );
}