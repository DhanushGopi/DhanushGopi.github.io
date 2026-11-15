import MobNavbarBtns from "../components/MobNavbarBtns";
import FooterStrip from "../sections/FooterStrip";
import MobNavbarSec from "../sections/MobNavbarSec";
import NavbarSec from "../sections/NavbarSec";

import Segment6 from "../sections/Segment6";

export default function Portfolio(){
    return(
        <div className="Home">
            <MobNavbarSec/>
            <NavbarSec/>
            <Segment6/>
            <FooterStrip/>
            </div>
    );
}