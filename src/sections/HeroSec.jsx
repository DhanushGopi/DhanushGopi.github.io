import dhanush from "../assets/Dhanush Full.png"

export default function HeroSec(){
    return(
        <div className="herosec-box" id="herosec">
            <div className="herosec-box-left">
                <p className="herosec-title">Your <br/> Pocket-<br/>Friendly <br/>Freelancer</p>
                <p className="herosec-subtitle">Let’s Scale Your Business,<br/>Pocket Friendly.</p>
            </div>
            <img className="herosec-box-right herosec-img" src={dhanush} alt="This is Dhanush Gopi" />
        </div>
    )
}