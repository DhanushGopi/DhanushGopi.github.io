import designordinarylogo from '../assets/designordinarylogo.svg'
import soulsatisfiedlogo from '../assets/soulsatisfiedlogo.svg'
import kgaslogo from '../assets/kgaslogo.svg'

export default function TrustedClients(){

    const gotoClient1 = () => {
        window.open("https://linktr.ee/soulsatisfied_in", "_blank", "noopener,noreferrer");
    };
    const gotoClient2 = () => {
        window.open("https://dhanushgopi.github.io/portfolio", "_blank", "noopener,noreferrer");
    };

     const gotoClient3 = () => {
        window.open("https://dhanushgopi.github.io/portfolio", "_blank", "noopener,noreferrer");
    };

    return(
        <div className="trustedclients-box" id='clients'>
            <p className="trustedclients-text">My Trusted Clients</p>
            <img className='clientlogo clientlogo1' src={soulsatisfiedlogo} alt="Design Ordinary Logo" onClick={gotoClient1}/>
            <img className='clientlogo clientlogo2' src={designordinarylogo} alt="Soul Satisfied Logo" onClick={gotoClient2}/>
            <img className='clientlogo clientlogo3' src={kgaslogo} alt="Soul Satisfied Logo" onClick={gotoClient3}/>
        </div>
    )
}