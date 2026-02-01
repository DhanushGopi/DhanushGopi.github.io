import ServiceCard from "../components/ServiceCard";
import WhiteChip from "../components/WhiteChip";

export default function ServiceSec(){
    return(
        <div className="service-box" id="service">
            <WhiteChip/>
            <p className="titletwo">What all the works i do!</p>
            <ServiceCard/>
        </div>
    )
}