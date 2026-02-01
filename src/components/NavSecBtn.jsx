export default function NavSecBtn(props){
    return(
        <a href={props.sectionid} className="navbar-btn"><p>{props.btntext}</p></a>
    )
}