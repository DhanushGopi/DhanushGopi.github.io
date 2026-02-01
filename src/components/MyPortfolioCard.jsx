import p1thumbnail from "../assets/bc1.png"
import Designchip from "./Chips/Designchip";
import Devchip from "./Chips/Devchip";
import FigmaLogo from "./Chips/FigmaLogo";

export default function MyportfolioCard(props){

 const viewPortfolio = () =>{
        window.open(props.link, "_blank", "noopener,noreferrer");
    }

   
    return(
    <div className="myportfolio-card">
                    {props.chip}
                    <img src={props.img} alt="Project thumbnail" className='myportfolio-img'/>
                    <div className="myportfolio-context">
                        <p className='myportfolio-title'>{props.title}</p>
                        <p className='myportfolio-subtitle'>{props.description}</p>
                    </div>
                    <div className="myportfolio-stacks">{props.stack}</div>
                    <button onClick={viewPortfolio} className='myportfolio-btn'>Open Project</button>
    </div>
   )    
}