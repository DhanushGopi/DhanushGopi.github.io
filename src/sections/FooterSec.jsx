import { useNavigate } from 'react-router-dom';
import dglogowhite from '../assets/dglogowhite.svg'
import { HashLink } from 'react-router-hash-link';

export default function FooterSec(){

    const navigate = useNavigate();

     const gotoHome = () => {
        navigate('/#navbar');   
    }

    const viewMyresume = () =>{
        window.open("https://drive.google.com/drive/folders/19DiBZWSsP6H7-gpuaiwaE2qGN_a9CDgl", "_blank", "noopener,noreferrer");
    }


    const gotoTerms = () => {
        navigate('/terms');   
    }

    return(
        <div className="footer-box" id='footer'>
                <div className="footer-top">
                    <div className="footer-left">
                        <img src={dglogowhite} alt="" />
                        <div className="footer-link socialmap">
                            <a href="https://www.instagram.com/dhanushgopi.in" className='footer-hyperlink'>Instagram</a>
                            <a href="https://x.com/dhanushgopi_inn" className='footer-hyperlink'>X</a>
                            <a href="https://www.linkedin.com/in/dhanushgopi/" className='footer-hyperlink'>LinkedIn</a>
                            <button onClick={viewMyresume} className='footer-hyperlink'>My Resume</button>
                        </div>
                        <p className='email'>Reach Me : reachdhanushgopi@gmail.com</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-link sitemap">
                            {/* <button onClick={gotoHome} className='footer-hyperlink'>Home</button> */}
                            <HashLink smooth to="/#herosec" className='footer-hyperlink'>Home  </HashLink>
                            {/* <button onClick={viewPortfolio} className='footer-hyperlink'>Portfolio</button> */}
                            <HashLink smooth to="/portfolio#myportfolio" className='footer-hyperlink'>Portfolio  </HashLink>
                            <HashLink smooth to="/terms#myterms" className='footer-hyperlink'>Terms  </HashLink>
                        </div>
                        <p className='email'>2026 © DHANUSH GOPI</p>
                    </div>
                </div>
                <p className="footer-bottom">DHANUSHGOPI🗲</p>
        </div>
    )
}