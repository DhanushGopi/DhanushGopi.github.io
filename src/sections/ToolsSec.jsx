import tools from '../assets/tools.svg'
import BlackChip from '../components/BlackChip'
import toolslist from '../assets/toolslist.svg'

export default function ToolsSec(){
    return(
        <div className="tools-box" id='tools'>
            <BlackChip blackicon={tools} btntext="TOOLS & SKILLS"/>
            <p className="titletwo">Tools I Use!</p>
            <img className="toolslist" src={toolslist} alt="Tools List"/>
        </div>
    )
}