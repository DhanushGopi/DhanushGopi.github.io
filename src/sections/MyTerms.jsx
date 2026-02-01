import howiworkthumbnail from "../assets/mytermsthumbnail.svg"
import SecBtn from "../components/SecBtn";

// import process from '../assets/process.svg'
import TrioBtn from "../components/TrioBtn";

export default function MyTerms(){

      const viewPortfolio = () =>{
        window.open("https://dhanushgopi.github.io/portfolio", "_blank", "noopener,noreferrer");
    }

    return(
        <div className="myterms-box" id="myterms">
            <p className="titletwo">My Terms!</p>
            {/* <div className="myterms-contentbox"> */}
                <img src={howiworkthumbnail} alt="How I Work Thumbnail" className="myterms-thumbnail" />
                {/* <div className="myterms-left"> */}
                    <ol className="myterms-rules">
                        <li><b>Consultation:</b> We'll start by getting to know your industry and specific design requirements.</li>
                        <li><b>Research:</b>Our team will conduct thorough research to understand your niche market and identify design trends.</li>
                        <li><b>Sketching:</b>We'll create a visual representation of your design concept and share it with you for transparent collaboration.</li>
                        <li><b>Feedback:</b>You can provide feedback at this stage, with three revision levels available:
                            <br /><b>Minor Revisions:</b> Small adjustments to the feDiffuseLighting.
                            <br/><b>Major Revisions:</b>More significant changes to the design concept.
                            <br/><b>Macro Revisions:</b>Overhaul of the design direction.</li>
                        <li><b>Delivery:</b>Once the design is finalized and payment is complete, we'll deliver all the final design files to you.</li>
                    </ol>
                {/* </div> */}
            {/* </div> */}
            <div className="myterms-btns">
                <TrioBtn extlink={viewPortfolio} btntext="Cancel"/>
                <SecBtn extlink={viewPortfolio} btntext="Agree"/>
            </div>
        </div>
    );

}