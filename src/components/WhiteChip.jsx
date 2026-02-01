import service from "../assets/service.svg"

export default function WhiteChip(){
    return(
        <div className="chipbox chip-white">
            <img src={service} alt="service icon" className="chip-icon chip-white-icon"/>
            <p className="chiptext chip-white-text">SERVICES</p>
        </div>
    )
}