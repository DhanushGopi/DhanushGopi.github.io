import uxdesignthumbnail from '../assets/uxdesign.png';
import branddesignthumbnail from '../assets/branddesign.png';
import webdevthumbnail from '../assets/webdev.png';
import graphicdesignthumbnail from '../assets/graphicdesign.png';

export default function ServiceCard(){

    const viewPortfolio = () =>{
        window.open("https://dhanushgopi.github.io/portfolio", "_blank", "noopener,noreferrer");
    }

    return(
         <div className="servicecards">
                <div className="servicecard-box servicecard-one">
                    <img src={uxdesignthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>UX Design</p>
                        <p className='servicecard-subtitle'>
                            Professional user experience design that makes your product intuitive and engaging. I cover everything from user research and wireframing to high-fidelity prototypes ready for developer hand-off.
                        </p>
                    </div>
                    <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button>
                </div>
                <div className="servicecard-box servicecard-two">
                    <img src={branddesignthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>Brand Design</p>
                        <p className='servicecard-subtitle'>
                           Purpose-driven brand identities that communicate clarity, trust, and personality. From logos to visual systems, I help businesses build brands that feel consistent, memorable, and scalable.
                        </p>
                    </div>
                    <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button>
                </div>
                <div className="servicecard-box servicecard-three">
                    <img src={webdevthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>Web Development</p>
                        <p className='servicecard-subtitle'>
                            Dynamic, Scalable, responsive, and performance-focused websites built to support real business growth. From landing pages to full web apps, I develop solutions that are reliable, fast, and easy to maintain.
                        </p>
                    </div>
                    <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button>
                </div>
                <div className="servicecard-box servicecard-four">
                    <img src={graphicdesignthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>Graphic Design</p>
                        <p className='servicecard-subtitle'>
                            Clean, functional visuals designed to communicate clearly and convert effectively. From marketing creatives to digital assets, every design is crafted with intent and usability in mindful of purpose.
                        </p>
                    </div>
                    <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button>
                </div>
            </div>
    )
}