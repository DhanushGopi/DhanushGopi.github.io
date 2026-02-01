import MobNavbarSec from "../sections/MobNavbarSec";
import NavbarSec from "../sections/NavbarSec";
import Segment1 from "../sections/Segment1";
import Segment2 from "../sections/Segment2";
import Segment3 from "../sections/Segment3";
import Segment4 from "../sections/Segment4";

export default function Home(){
    return(
        <div className="Home">
            <MobNavbarSec/>
            <NavbarSec/>
            <Segment1/>
            <Segment2/>
            <Segment3/>
            <Segment4/>
            </div>
    );
}