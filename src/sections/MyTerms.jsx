import { HashLink } from "react-router-hash-link";
import howiworkthumbnail from "../assets/mytermsthumbnail.svg"
import SecBtn from "../components/SecBtn";

// import process from '../assets/process.svg'
import TrioBtn from "../components/TrioBtn";

export default function MyTerms(){

      const viewOnboardingForm = () =>{
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScwWUShgLP3n_vlKxo2dcOFnjpaXlotUnel9WD5gwQAnMTo5Q/viewform?usp=dialog", "_blank", "noopener,noreferrer");
    }

    return(
        <div className="myterms-box" id="myterms">
            <p className="titletwo">My Terms!</p>
            {/* <div className="myterms-contentbox"> */}
                <img src={howiworkthumbnail} alt="How I Work Thumbnail" className="myterms-thumbnail" />
                {/* <div className="myterms-left"> */}
                    <ol className="myterms-rules">
                        <li><b>Consultation:</b> We’ll start by understanding your industry, goals, and specific design requirements to define a clear direction for the project.</li>
                        <li><b>Research:</b>Thorough research will be conducted to understand your niche market, competitors, and relevant design trends to ensure strategic alignment.</li>
                        <li><b>Sketching:</b>A visual representation of the design concept will be created and shared with you to ensure transparent collaboration and clarity before refinement.</li>
                        <li><b>Feedback:</b>You can provide feedback at this stage. Three levels of revisions are available:
                            <br /><b>Minor Revisions:</b> Small adjustments such as color changes, spacing, typography refinements, or minor visual tweaks.
                            <br/><b>Major Revisions:</b>More significant modifications within the approved concept while maintaining the original direction.
                            <br/><b>Macro Revisions:</b>A complete change in the overall design direction after concept presentation. Such changes may require additional time, cost, or scope discussion before proceeding.</li>
                        <li><b>Delivery:</b>Once the design is finalized and full payment is completed, all final design files will be delivered.</li>
                    </ol>
                {/* </div> */}
            {/* </div> */}
            <div className="myterms-btns">
                {/* <TrioBtn extlink={viewPortfolio} btntext="Cancel"/> */}
                <HashLink smooth to="/#herosec" className='triobtn'>Cancel</HashLink>
                <SecBtn extlink={viewOnboardingForm} btntext="Agree"/>
            </div>
        </div>
    );

}