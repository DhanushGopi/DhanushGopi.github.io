import BlackChip from "../components/BlackChip";
import howiworkthumbnail from "../assets/processelement.svg"
import SecBtn from "../components/SecBtn";

import process from '../assets/process.svg'
import { useNavigate } from "react-router-dom";

export default function HowIWork(){

    const navigate = useNavigate();

    const gotoTerms = () => {
        navigate('/terms');   
    }


      const viewPortfolio = () =>{
        window.open("https://dhanushgopi.github.io/portfolio", "_blank", "noopener,noreferrer");
    }

    return(
        <div className="howiwork-box">
            <BlackChip blackicon={process} btntext="PROCESS"/>
            <p className="titletwo">How I Work!</p>
            <div className="howiwork-contentbox">
                <div className="howiwork-left">
                    <ul className="howiwork-rules">
                        <li><b>Consultation:</b> We understand your industry and design goals.</li>
                        <li><b>Research:</b> We explore your niche and relevant design trends.</li>
                        <li><b>Sketching:</b> Concepts are visualized and shared for collaboration.</li>
                        <li><b>Feedback:</b> Your inputs are refined through up to three revisions.</li>
                        <li><b>Delivery:</b> Final files are delivered after approval and payment.</li>
                    </ul>
                </div>
                <img src={howiworkthumbnail} alt="How I Work Thumbnail" className="howiwork-thumbnail" />
            </div>
            <SecBtn extlink={gotoTerms} btntext="Read More..."/>
        </div>
    )

}