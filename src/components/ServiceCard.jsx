import uxdesignthumbnail from '../assets/uxdesign.png';
import branddesignthumbnail from '../assets/branddesign.png';
import webdevthumbnail from '../assets/webdev.png';
import graphicdesignthumbnail from '../assets/graphicdesign.png';
import { HashLink } from 'react-router-hash-link';

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
                            Professional UX Design that makes your product simple, intuitive. from research to developer ready prototypes.                        
                        </p>
                    </div>
                    {/* <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button> */}
                    {/* <HashLink smooth to="/portfolio#myportfolio" className='servicecard-btn'>View Portfolio</HashLink> */}
                    <HashLink 
                            smooth 
                            to="/portfolio?filter=uxdesign#myportfolio" 
                            className='servicecard-btn'>
                                View Portfolio
                    </HashLink>
                </div>
                <div className="servicecard-box servicecard-two">
                    <img src={branddesignthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>Brand Design</p>
                        <p className='servicecard-subtitle'>
                            Purpose driven brand identities that communicate clarity and trust, from logo to scalable visual systems.
                        </p>
                    </div>
                    {/* <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button> */}
                    {/* <HashLink smooth to="/portfolio#myportfolio" className='servicecard-btn'>View Portfolio</HashLink> */}
                    <HashLink 
                        smooth 
                        to="/portfolio?filter=branddesign#myportfolio" 
                        className='servicecard-btn'>
                        View Portfolio
                    </HashLink>
                </div>
                <div className="servicecard-box servicecard-three">
                    <img src={webdevthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>Web Development</p>
                        <p className='servicecard-subtitle'>
                            Dynamic, scalable, and performance focused websites from landing pages to full web apps. built for real growth.
                        </p>
                    </div>
                    {/* <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button> */}
                    {/* <HashLink smooth to="/portfolio#myportfolio" className='servicecard-btn'>View Portfolio</HashLink> */}
                    <HashLink 
                        smooth 
                        to="/portfolio?filter=webdev#myportfolio" 
                        className='servicecard-btn'>
                        View Portfolio
                    </HashLink>
                </div>
                <div className="servicecard-box servicecard-four">
                    <img src={graphicdesignthumbnail} alt="uxdesign thumbnail" className='servicecard-img'/>
                    <div className="servicecard-context">
                        <p className='servicecard-title'>Graphic Design</p>
                        <p className='servicecard-subtitle'>
                         Visuals designed to communicate effectively from marketing creatives to purposeful digital assets.
                        </p>
                    </div>
                    {/* <button onClick={viewPortfolio} className='servicecard-btn'>View Portfolio</button> */}
                    {/* <HashLink smooth to="/portfolio#myportfolio" className='servicecard-btn'>View Portfolio</HashLink> */}
                    <HashLink 
                        smooth 
                        to="/portfolio?filter=graphicdesign#myportfolio" 
                        className='servicecard-btn'>
                        View Portfolio
                    </HashLink>
                </div>
            </div>
    )
}