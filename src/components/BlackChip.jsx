import process from '../assets/process.svg'

export default function BlackChip(props){
    return(
        <div className="chipbox chip-black">
            <img src={props.blackicon} alt="service icon" className="chip-icon chip-black-icon"/>
            <p className="chiptext chip-black-text">{props.btntext}</p>
        </div>
    )
}